/**
 * An Array of routes that are accessible to the public
 * These Routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = ["/"];

/**
 * An Array of routes that are used for authentication
 * These routes will redirect logged in users to /settings
 * @type {string[]}
 */
export const authRoutes = ["/auth/login", "/auth/register"];

/**
 * Prefix for api authentication auth
 * Routes that start with this prefix are used for authentication purposes
 *  @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**The default redirect path after a user logs in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";
