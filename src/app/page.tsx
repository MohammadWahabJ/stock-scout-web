import Image from "next/image";
import Head from 'next/head';
import Link from 'next/link';
export default function Home() {
  return (
 <>
      <Head>
        <title>Welcome to Our App</title>
      </Head>

      <div className="flex-auto flex flex-col items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
            Welcome to Our App!
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            A place where you can register, login, and explore your stock market.
          </p>

          <div className="space-x-4">
            <Link href="/auth/login" className="btn btn-primary">
              Login
            </Link>
            <Link href="/auth/signup" className="btn btn-secondary">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
