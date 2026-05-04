'use client';
import { BeerBottle, Martini, ChatText, Bell, UserCircle, MagnifyingGlass, House, UsersThree } from "@phosphor-icons/react";
import { Input } from "@/components/ui/input";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-zinc-950/80 backdrop-blur-md border-zinc-800">
      <div className="container mx-auto flex h-14 items-center px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 mr-4">
          {/* <div className="bg-amber-600 rounded p-1">
             <BeerBottle size={24} color="#fff" weight="fill" />
          </div>
          <span className="text-xl font-bold tracking-tighter text-amber-500  md:inline-block">Drinkedin</span> */}
          <img src="/logo.png" alt="Drinkedin Logo" className="h-28 w-28 md:h-36 md:w-36" />
        </Link>
        
        <div className="flex-1 max-w-sm relative hidden md:block">
          <MagnifyingGlass className="absolute left-2.5 top-2.5 h-4 w-4 text-zinc-500" />
          <Input 
            placeholder="Search for bars, beers, or drinking buddies..." 
            className="pl-9 bg-zinc-900 border-zinc-800 focus-visible:ring-amber-600"
          />
        </div>

        <div className="ml-auto hidden md:flex items-center gap-1 sm:gap-4">
          <NavIcon href="/" icon={<House size={24} weight={pathname === '/' ? 'fill' : 'regular'} />} label="Home" active={pathname === '/'} />
          <NavIcon href="/network" icon={<UsersThree size={24} weight={pathname === '/network' ? 'fill' : 'regular'} />} label="My Network" active={pathname === '/network'} />
          <NavIcon href="/happy-hours" icon={<Martini size={24} weight={pathname === '/happy-hours' ? 'fill' : 'regular'} />} label="Happy Hour" active={pathname === '/happy-hours'} />
          <NavIcon href="/messages" icon={<ChatText size={24} weight={pathname === '/messages' ? 'fill' : 'regular'} />} label="Toasts" active={pathname === '/messages'} />
          <NavIcon href="/notifications" icon={<Bell size={24} weight={pathname === '/notifications' ? 'fill' : 'regular'} />} label="Round Alerts" active={pathname === '/notifications'} />
          
          <div className="h-8 w-[1px] bg-zinc-800 mx-2 hidden sm:block" />
          
          <div className="flex flex-col items-center cursor-pointer group">
            <UserCircle size={24} className="text-zinc-400 group-hover:text-zinc-100 transition-colors" />
            <span className="text-[10px] text-zinc-400 hidden sm:block">Me</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavIcon({ href, icon, label, active = false }: { href: string, icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <Link href={href} className={`flex flex-col items-center justify-center min-w-[64px] cursor-pointer group relative ${active ? 'text-zinc-100' : 'text-zinc-400'}`}>
      <div className="group-hover:text-zinc-100 transition-colors">
        {icon}
      </div>
      <span className="text-[10px] hidden sm:block mt-0.5">{label}</span>
      {active && <div className="absolute bottom-[-13px] w-full h-[2px] bg-zinc-100" />}
    </Link>
  );
}
