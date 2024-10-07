'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Head from 'next/head';
import { login } from '../../actions'

export default function Login() {
    const router = useRouter()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault();

        const res = await login(email, password)
        console.log(res)

        if (res) router.push('/dashboard')
    }
    return (
        <>
            <Head>
                <title>Login</title>
            </Head>

            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold text-center mb-6">Sign in to your account</h2>

                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                name='email'
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@example.com"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                name='password'
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="********"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <input type="checkbox" className="checkbox checkbox-primary" id="remember" />
                                <label htmlFor="remember" className="ml-2 text-sm">Remember me</label>
                            </div>

                            <a href="#" className="text-sm text-blue-500 hover:underline">
                                Forgot Password?
                            </a>
                        </div>

                        <button type="submit" className="btn btn-primary w-full mt-6">
                            Sign In
                        </button>
                    </form>

                    <p className="text-center mt-4 text-sm text-gray-600">
                        Don&apos;t have an account?{' '}
                        <a href="/auth/signup" className="text-blue-500 hover:underline">
                            Sign up
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
}

