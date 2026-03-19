import { atom } from 'jotai';

export const emailInputAtom = atom('');
export const subscribeStatusAtom = atom<'idle' | 'loading' | 'success' | 'error'>('idle');
