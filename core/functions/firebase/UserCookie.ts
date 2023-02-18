import { getCookie, removeCookies, setCookies } from 'cookies-next';

export async function getUserFromAuthCookie() {
    const cookie = getCookie('user')
    if (!cookie) {
        return null
    }
    return JSON.parse(cookie as string)
}

export async function setUserAuthCookie(userPayload: string) {
    setCookies('user', userPayload, { maxAge: 3600 })
}

export async function removeUserAuthCookie() {
    removeCookies('user')
}