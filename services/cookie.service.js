import { parseCookies, setCookie } from 'nookies';

export class CookieService {
    static context = null;

    static setContext(newContext) {
        this.context = newContext;
    }

    static getCookie(name) {
        const isServer = typeof window === 'undefined';
        if (!isServer) {
            // In client side;
            const value = '; ' + document.cookie;
            const parts = value.split('; ' + name + '=');
            if (parts.length == 2) {
                return parts.pop().split(';').shift();
            }
        }
        const cookies = parseCookies(this.context);
        return cookies[name];
    }

    static parseCookies() {
        return parseCookies(this.context);
    }

    static setCookie(name, value) {
        setCookie(this.context, name, value, { maxAge: 86400, path: '/' });
    }
}