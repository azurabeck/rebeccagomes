import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

// Redirects "/" to the best match for the browser's Accept-Language header.
export default createMiddleware(routing);

export const config = {
  matcher: '/((?!api|_next|_vercel|.*\..*).*)',
};
