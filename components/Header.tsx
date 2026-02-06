'use client';

import { cn } from '@/lib/utils';
import { Activity } from 'lucide-react';
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {

  const pathName = usePathname();

  return (
    <header>
      <div className='main-container inner'>
        <Link href='/' className="flex items-center gap-2 group">
          <div className="bg-blue-600 p-1.5 rounded-lg group-hover:bg-blue-500 transition-colors">
            <Activity size={24} className="text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white uppercase">
            Crypto<span className="text-blue-500">nalysis</span>
          </span>
        </Link>

        <nav>
          <Link href='/' className={cn('nav-link', {
            'is-active': pathName === '/',
            'is-home': pathName === '/'
          })}>Home</Link>

          <p>Search Modal</p>

          <Link href='/coins' className={cn('nav-link', {
            'is-active': pathName === '/coins',
          })}>All Coins</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
