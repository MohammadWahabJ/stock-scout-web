// 'use server'
import { publicApiCall, stockApiCall } from './utils/api'

export async function login(email: string, password: string) {
    const data = { email, password }
    try {

        await publicApiCall("/auth/login", "post", data)
        return true
    } catch (error) {
        console.log(error)
        return false
    }
}

export async function signup(name: string, email: string, password: string) {
    const data = { name, username: email, email, password }
    try {

        await publicApiCall("/auth/register", "post", data)
        return true
    } catch (error) {
        console.log(error)
        return false
    }
}

export async function stockList() {
    const params = {
        country: 'japan'
    }
    try {

        return await stockApiCall("/stocks", params)
    } catch (error) {
        console.log(error)
        throw error
    }
}
