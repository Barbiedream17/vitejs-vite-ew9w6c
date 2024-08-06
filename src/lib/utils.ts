import ms from 'ms';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const formatDuration = (duration: string) => {
  return ms(duration);
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}