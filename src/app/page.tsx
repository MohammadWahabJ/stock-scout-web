import { useTranslations } from 'next-intl';
import Head from 'next/head';
import Link from 'next/link';
export default function Home() {
    const t = useTranslations('HomePage');
    const c = useTranslations('common');

    return (
        <>
            <Head>
                <title>Welcome to Our App</title>
            </Head>

            <div className="flex-auto flex flex-col items-center justify-center bg-gray-100">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
                        {t('title')}
                    </h1>
                    <p className="text-lg text-gray-600 mb-8">
                        {t('desc')}
                    </p>

                    <div className="space-x-4">
                        <Link href="/auth/login" className="btn btn-primary">
                            {c('login')}
                        </Link>
                        <Link href="/auth/signup" className="btn btn-secondary">
                            {c('signup')}
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
