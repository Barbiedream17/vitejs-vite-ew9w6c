// src/services/AuthService.ts
import axios from 'axios';
import { env } from '../config/env';


const API_URL = env.API_URL; // Replace with your actual API URL

export interface User {
  id: string;
  email: string;
  name: string;
  role: string;
  image?: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

const AuthService = {
  async login(email: string, password: string): Promise<AuthResponse> {
    const response = await axios.post(`${API_URL}/auth/login`, { email, password });
    return response.data;
  },

  async register(email: string, password: string, name: string): Promise<AuthResponse> {
    const response = await axios.post(`${API_URL}/auth/register`, { email, password, name });
    return response.data;
  },

  async logout(): Promise<void> {
    await axios.post(`${API_URL}/auth/logout`);
    localStorage.removeItem('token');
  },

  async getCurrentUser(): Promise<User | null> {
    const token = localStorage.getItem('token');
    if (!token) return null;

    try {
      const response = await axios.get(`${API_URL}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      return response.data;
    } catch (error) {
      return null;
    }
  },

  setToken(token: string) {
    localStorage.setItem('token', token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },

  async loginWithGoogle(token: string): Promise<AuthResponse> {
    const response = await axios.post(`${API_URL}/auth/google`, { token });
    return response.data;
  }
};

export default AuthService;