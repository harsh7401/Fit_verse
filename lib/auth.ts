// Auth helpers for PulseAI
export function getToken() {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('pulseai_token');
}

export function setToken(token: string) {
  if (typeof window === 'undefined') return;
  localStorage.setItem('pulseai_token', token);
}
