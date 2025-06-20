"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { MagnifyingGlassIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const router = useRouter();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      router.push(`/category?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
      <Link href="/">
        <h1 className="text-3xl font-extrabold text-green-600">
          Laptop&nbsp;-&nbsp;<span className=' text-black'>M</span>art
        </h1>
      </Link>

        <ul className="hidden md:flex space-x-8 text-base font-medium text-gray-700">
          <li>
            <Link href="/" className="hover:text-green-600">
              Home
            </Link>
          </li>
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center hover:text-green-600 focus:outline-none"
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
            >
              Categories
              <ChevronDownIcon className="w-4 h-4 ml-1" />
            </button>
            {dropdownOpen && (
              <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-10">
                <li>
                  <Link
                    href="/category#gaming-laptops"
                    className="block px-4 py-2 text-gray-700 hover:bg-green-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Gaming Laptops
                  </Link>
                </li>
                <li>
                  <Link
                    href="/category#notebooks"
                    className="block px-4 py-2 text-gray-700 hover:bg-green-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Notebooks
                  </Link>
                </li>
                <li>
                  <Link
                    href="/category#personal-laptops"
                    className="block px-4 py-2 text-gray-700 hover:bg-green-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Personal Laptops
                  </Link>
                </li>
                <li>
                  <Link
                    href="/category#laptop-accessories"
                    className="block px-4 py-2 text-gray-700 hover:bg-green-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Laptop Accessories
                  </Link>
                </li>
                <li>
                  <Link
                    href="/category#macbook"
                    className="block px-4 py-2 text-gray-700 hover:bg-green-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    MacBook
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link href="/aboutus" className="hover:text-green-600">
              About&nbsp;us
            </Link>
          </li>
        </ul>

        <form onSubmit={handleSearchSubmit} className="relative w-40 md:w-56">
          <input
            type="text"
            placeholder="Search…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-4 pr-10 py-2 rounded-full border outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            type="submit"
            className="absolute top-1/2 -translate-y-1/2 right-3 text-gray-600"
            aria-label="Search"
          >
            <MagnifyingGlassIcon className="w-4 h-4" />
          </button>
        </form>
      </nav>
    </header>
  );
}
