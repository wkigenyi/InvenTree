import axios from 'axios';

// The InvenTree backend host is configured via an environment variable.
// In development: http://localhost:8000
// In production: set NEXT_PUBLIC_API_HOST to your InvenTree server URL.
const baseURL = process.env.NEXT_PUBLIC_API_HOST ?? 'http://localhost:8000';

export const api = axios.create({
  baseURL: `${baseURL}/api`,
  withCredentials: true,
});

// Automatically attach the CSRF token from the Django-set cookie on every
// mutating request (POST / PUT / PATCH / DELETE).
api.interceptors.request.use((config) => {
  if (typeof document !== 'undefined') {
    const csrfToken = document.cookie
      .split('; ')
      .find((row) => row.startsWith('csrftoken='))
      ?.split('=')[1];

    if (csrfToken) {
      config.headers['X-CSRFToken'] = csrfToken;
    }
  }
  return config;
});
