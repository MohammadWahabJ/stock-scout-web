// 'use client'
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import localFont from "next/font/local";
import LanguageSelector from './LanguageSelector';
import "./globals.css";
import { cookies } from 'next/headers';
import Link from 'next/link';

// import { useEffect } from 'react'
// import { themeChange } from 'theme-change'

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const locale = await getLocale();
    const messages = await getMessages();

    const cookieStore = cookies();
    const authToken = cookieStore.get('authToken')?.value;

    return (
        <html lang={locale} data-theme="nord">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-dvh justify-between`}
            >
                <NextIntlClientProvider messages={messages}>
                    <div className="navbar">
                        <div className="navbar-start">
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h8m-8 6h16" />
                                    </svg>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                    <li><a href="/dashboard">Dashboard</a></li>
                                    <li><a href="/dashboard/stock-list">Stock List</a></li>
                                </ul>
                            </div>
                            <a href="/" className="btn btn-ghost text-xl">Stock Scout</a>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                <li><a href="/dashboard">Dashboard</a></li>
                                <li><a href="/dashboard/stock-list">Stock List</a></li>
                            </ul>
                        </div>
                        <div className="navbar-end">
                            <button data-toggle-theme="dark,light" data-act-class="ACTIVECLASS"></button>
                            {authToken ?
                                <Link href="/logout" className="btn btn-primary mr-2">
                                    Logout
                                </Link>

                                :
                                <>
                                </>

                            }
                            {/* Language Selector Dropdown */}
                            <LanguageSelector initialLocale={locale} />
                        </div>
                    </div>
                    {children}
                    <footer className="footer footer-center bg-base-300 text-base-content p-4">
                        <aside>
                            <p>Copyright © {new Date().getFullYear()} - All right reserved by Stock Scout</p>
                        </aside>
                    </footer>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
