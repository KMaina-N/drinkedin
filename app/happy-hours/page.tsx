'use client';
import { Navbar } from "@/components/drinkedin/Navbar";
import { Sidebar } from "@/components/drinkedin/Sidebar";
import { RightSidebar } from "@/components/drinkedin/RightSidebar";
import { BottomNav } from "@/components/drinkedin/BottomNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MagnifyingGlass, BookmarkSimple, List, BeerBottle, MapPin } from "@phosphor-icons/react";

export default function HappyHoursPage() {
  return (
    <div className="flex flex-col min-h-screen pb-14 md:pb-0">
      <Navbar />
      <main className="container mx-auto px-0 sm:px-4 md:px-6 py-0 sm:py-4 md:py-6 grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6">
        <div className="hidden md:block md:col-span-3 lg:col-span-2.5">
          <Sidebar />
        </div>

        <div className="md:col-span-9 lg:col-span-6 space-y-4">
          <Card className="bg-zinc-900 border-zinc-800 p-6">
             <h1 className="text-xl font-bold text-zinc-100 mb-4">Find your next round</h1>
             <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex-1 relative">
                   <MagnifyingGlass className="absolute left-3 top-3 h-4 w-4 text-zinc-500" />
                   <Input placeholder="Search bar titles..." className="pl-10 bg-zinc-950 border-zinc-800 focus-visible:ring-amber-600" />
                </div>
                <div className="flex-1 relative">
                   <MapPin className="absolute left-3 top-3 h-4 w-4 text-zinc-500" />
                   <Input placeholder="Location" className="pl-10 bg-zinc-950 border-zinc-800 focus-visible:ring-amber-600" />
                </div>
                <Button className="bg-amber-600 hover:bg-amber-700 font-bold px-8 rounded-full">Search</Button>
             </div>
          </Card>

          <Card className="bg-zinc-900 border-zinc-800">
             <CardHeader className="p-4 border-b border-zinc-800">
                <CardTitle className="text-lg font-bold text-zinc-100 italic underline text-amber-500 underline-offset-4">Recommended Happy Hours for you</CardTitle>
             </CardHeader>
             <CardContent className="p-0">
                <JobItem 
                  title="50% Off Craft IPAs" 
                  company="The Rusty Barrel" 
                  location="Shoreditch, London" 
                  time="Starts in 2h"
                />
                <JobItem 
                  title="Open Bar Mixer" 
                  company="Tech Sips Inc." 
                  location="Remote (BYOB)" 
                  time="Today • 6 PM"
                />
                <JobItem 
                  title="Whisky Tasting Seminar" 
                  company="Old Scotsman Pub" 
                  location="Edinburgh, UK" 
                  time="3 days ago"
                />
             </CardContent>
          </Card>
        </div>

        <div className="hidden lg:block lg:col-span-3.5">
           <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-4 space-y-4">
                 <h3 className="font-bold text-zinc-100">Round Preferences</h3>
                 <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-zinc-400 hover:bg-zinc-800 p-2 rounded cursor-pointer transition-colors">
                       <BookmarkSimple size={18} />
                       <span>Saved Happy Hours</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-zinc-400 hover:bg-zinc-800 p-2 rounded cursor-pointer transition-colors">
                       <List size={18} />
                       <span>My Sip Score</span>
                    </div>
                 </div>
              </CardContent>
           </Card>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}

function JobItem({ title, company, location, time }: { title: string, company: string, location: string, time: string }) {
  return (
    <div className="p-4 border-b border-zinc-800 hover:bg-zinc-800/50 cursor-pointer transition-colors last:border-0 flex gap-3">
       <div className="bg-zinc-800 p-2 rounded h-fit">
          <BeerBottle size={32} className="text-amber-500" />
       </div>
       <div className="flex-1">
          <h3 className="font-bold text-zinc-100 hover:underline">{title}</h3>
          <p className="text-sm text-zinc-300">{company}</p>
          <div className="flex items-center gap-1 text-xs text-zinc-500 mt-1">
             <span>{location}</span>
             <span>•</span>
             <span className="text-emerald-500 font-medium italic">Actively pouring</span>
          </div>
          <span className="text-[10px] text-zinc-600 mt-2 block">{time}</span>
       </div>
    </div>
  )
}
