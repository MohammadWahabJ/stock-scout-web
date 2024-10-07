'use client'; // Client component

import { useEffect, useState } from 'react';

const availableLocales = [
  { code: 'en', label: 'English' },
  { code: 'jp', label: '日本語' },
];

export default function LanguageSelector({ initialLocale }: { initialLocale: string }) {
  const [selectedLocale, setSelectedLocale] = useState(initialLocale);

  // Helper function to set a cookie (for locale)
  const setCookie = (name: string, value: string, days: number) => {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value}; ${expires}; path=/`;
  };

  const handleLocaleChange = (newLocale: string) => {
    setSelectedLocale(newLocale);
    setCookie('locale', newLocale, 365); // Save the new locale in the cookie
    window.location.reload(); // Reload the page to apply the new language
  };

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost">
        {availableLocales.find((l) => l.code === selectedLocale)?.label || 'Language'}
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        {availableLocales.map((localeOption) => (
          <li key={localeOption.code}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault(); // Prevent the default anchor behavior
                handleLocaleChange(localeOption.code); // Change locale
              }}
            >
              {localeOption.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
