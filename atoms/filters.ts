import { atom } from 'jotai';

export const searchQueryAtom = atom('');
export const activeFilterAtom = atom<'all' | 'forex' | 'futures' | 'crypto' | 'instant' | 'twostep'>('all');
export const sortOrderAtom = atom<'discount' | 'newest' | 'rating' | 'expiry'>('discount');
