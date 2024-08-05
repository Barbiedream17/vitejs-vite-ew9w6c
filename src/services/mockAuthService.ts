// src/services/mockAuthService.ts
import type { User } from '@/types/user';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const mockUser: User = {
  id: '1',
  username: 'testuser',
  email: 'testuser@example.com'
};

export const getCurrentUser = async (): Promise<User | null> => {
  await delay(500);
  return Math.random() > 0.5 ? mockUser : null;
};

export const signIn = async (username: string, password: string): Promise<User | null> => {
  await delay(500);
  return mockUser;
};

export const signOut = async (): Promise<void> => {
  await delay(500);
};