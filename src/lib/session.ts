// src/lib/session.ts
import { getCurrentUser as getCurrentUserFromApi } from '@/services/mockAuthService';
import type { User } from '@/types/user';

export const getCurrentUser = async (): Promise<User | undefined> => {
  const user = await getCurrentUserFromApi();
  return user || undefined;
};