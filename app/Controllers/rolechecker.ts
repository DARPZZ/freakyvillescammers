import { jwtDecode } from "jwt-decode";

export interface User {
  email: string;
  role: string;
}

export function getUserFromCookie(request: Request): User | null {
  const cookieHeader = request.headers.get('Cookie');
  if (!cookieHeader) return null;

  const token = cookieHeader
    .split(';')
    .find((row) => row.trim().startsWith('authToken='));

  if (!token) return null;

  try {
    const decodedToken = jwtDecode<User>(token.split('=')[1]);
    return decodedToken;
  } catch (error) {
    console.error('Invalid token:', error);
    return null;
  }
}

