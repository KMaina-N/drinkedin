'use client';
import { Navbar } from "@/components/drinkedin/Navbar";
import { Sidebar } from "@/components/drinkedin/Sidebar";
import { RightSidebar } from "@/components/drinkedin/RightSidebar";
import { BottomNav } from "@/components/drinkedin/BottomNav";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BeerStein, Martini, DotsThree, Cake } from "@phosphor-icons/react";

export default function NotificationsPage() {
  return (
    <div className="flex flex-col min-h-screen pb-14 md:pb-0">
      <Navbar />
      <main className="container mx-auto px-0 sm:px-4 md:px-6 py-0 sm:py-4 md:py-6 grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6">
        <div className="hidden md:block md:col-span-3 lg:col-span-2.5">
          <Sidebar />
        </div>

        <div className="md:col-span-9 lg:col-span-6 space-y-2">
          <Card className="bg-zinc-900 border-zinc-800">
             <CardHeader className="p-4 flex flex-row items-center justify-between border-b border-zinc-800">
                <div className="flex gap-4">
                   <button className="text-sm font-bold text-zinc-100 bg-zinc-800 px-4 py-1.5 rounded-full">All</button>
                   <button className="text-sm font-bold text-zinc-400 hover:bg-zinc-800 px-4 py-1.5 rounded-full transition-colors">Toasts</button>
                </div>
                <button className="text-zinc-500 font-bold text-xs uppercase hover:underline">Settings</button>
             </CardHeader>
             <CardContent className="p-0">
                <NotificationItem 
                  icon={<BeerStein weight="fill" className="text-amber-500" />}
                  content={<span><b>Sarah Mixologist</b> just bought a round of drinks for 20 people. <b>Join the cheers!</b></span>}
                  time="2h"
                  unread
                />
                <NotificationItem 
                  icon={<Martini weight="fill" className="text-zinc-300" />}
                  content={<span>Your post about "The worst Martini in Soho" is trending with <b>5,000 cheers</b>.</span>}
                  time="5h"
                />
                <NotificationItem 
                  icon={<Cake weight="fill" className="text-pink-500" />}
                  content={<span>It's <b>Vodka Victor's</b> booze-day! Wish him a massive hangover.</span>}
                  time="8h"
                />
                <NotificationItem 
                  icon={<BeerStein weight="fill" className="text-zinc-400" />}
                  content={<span><b>Brewery Scout</b> viewed your profile. They might be looking for a new taster.</span>}
                  time="1d"
                />
             </CardContent>
          </Card>
        </div>

        <div className="hidden lg:block lg:col-span-3.5">
          <RightSidebar />
        </div>
      </main>
      <BottomNav />
    </div>
  );
}

function NotificationItem({ icon, content, time, unread = false }: { icon: React.ReactNode, content: React.ReactNode, time: string, unread?: boolean }) {
  return (
    <div className={`p-4 flex gap-4 hover:bg-zinc-800/80 cursor-pointer transition-colors border-b border-zinc-800 last:border-0 ${unread ? 'bg-amber-600/5' : ''}`}>
       <div className="shrink-0 mt-1">
          <div className="h-10 w-10 bg-zinc-800 rounded-full flex items-center justify-center border border-zinc-700">
             {icon}
          </div>
       </div>
       <div className="flex-1 text-sm text-zinc-300 leading-snug">
          {content}
       </div>
       <div className="flex flex-col items-end gap-2 shrink-0">
          <span className="text-[10px] text-zinc-500">{time}</span>
          <DotsThree size={24} className="text-zinc-500 hover:text-zinc-100" />
       </div>
    </div>
  )
}
