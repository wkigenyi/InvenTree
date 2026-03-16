import axios from 'axios';

/** Base URL for the InvenTree API, configured via NEXT_PUBLIC_API_HOST */
const API_HOST =
  process.env.NEXT_PUBLIC_API_HOST || 'http://localhost:8000';

/**
 * Preconfigured Axios instance for InvenTree API requests.
 * Automatically includes credentials (cookies) with every request.
 */
export const api = axios.create({
  baseURL: `${API_HOST}/api`,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
});

// ---------------------------------------------------------------------------
// Request interceptor: attach CSRF token from cookie if present
// ---------------------------------------------------------------------------
api.interceptors.request.use((config) => {
  const csrfToken = getCookie('csrftoken');
  if (csrfToken) {
    config.headers['X-CSRFToken'] = csrfToken;
  }
  return config;
});

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift() ?? null;
  return null;
}

// ---------------------------------------------------------------------------
// API helper functions
// ---------------------------------------------------------------------------

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface UserInfo {
  pk: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
}

/** Attempt to log in with username + password */
export async function loginUser(credentials: LoginCredentials): Promise<UserInfo> {
  const response = await api.post<UserInfo>('/auth/login/', credentials);
  return response.data;
}

/** Log out the currently authenticated user */
export async function logoutUser(): Promise<void> {
  await api.post('/auth/logout/');
}

/** Fetch the currently authenticated user's info */
export async function getCurrentUser(): Promise<UserInfo | null> {
  try {
    const response = await api.get<UserInfo>('/user/me/');
    return response.data;
  } catch {
    return null;
  }
}
