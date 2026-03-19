import { useMutation } from '@tanstack/react-query';
import { useSetAtom } from 'jotai';
import { subscribeStatusAtom } from '@/atoms/subscribe';

export function useSubscribe() {
  const setStatus = useSetAtom(subscribeStatusAtom);

  return useMutation({
    mutationFn: async (email: string) => {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error('Failed to subscribe');
      return res.json();
    },
    onMutate: () => {
      setStatus('loading');
    },
    onSuccess: () => {
      setStatus('success');
      setTimeout(() => setStatus('idle'), 3000); // reset after 3s
    },
    onError: () => {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    },
  });
}
