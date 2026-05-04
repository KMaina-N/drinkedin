'use client';
import { Navbar } from "@/components/drinkedin/Navbar";
import { Sidebar } from "@/components/drinkedin/Sidebar";
import { RightSidebar } from "@/components/drinkedin/RightSidebar";
import { BottomNav } from "@/components/drinkedin/BottomNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { UserPlus, DotsThree } from "@phosphor-icons/react";

export default function NetworkPage() {
  return (
    <div className="flex flex-col min-h-screen pb-14 md:pb-0">
      <Navbar />
      <main className="container mx-auto px-0 sm:px-4 md:px-6 py-0 sm:py-4 md:py-6 grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6">
        <div className="hidden md:block md:col-span-3 lg:col-span-2.5">
          <Sidebar />
        </div>

        <div className="md:col-span-9 lg:col-span-6 space-y-4">
          <Card className="bg-zinc-900 border-zinc-800">
             <CardHeader className="p-4 flex flex-row items-center justify-between">
                <CardTitle className="text-lg font-bold text-zinc-100">Manage my rounds</CardTitle>
                <Button variant="ghost" className="text-zinc-400">Manage</Button>
             </CardHeader>
          </Card>

          <Card className="bg-zinc-900 border-zinc-800 p-4">
             <h2 className="text-md font-bold text-zinc-100 mb-4">People you may want to drink with</h2>
             <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <ConnectionCard key={i} />
                ))}
             </div>
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

function ConnectionCard() {
  const seeds = ["Aria", "Ben", "Chloe", "Dan", "Eva", "Finn"];
  const seed = seeds[Math.floor(Math.random() * seeds.length)] + Math.random();
  
  return (
    <Card className="bg-zinc-950 border-zinc-800 flex flex-col items-center p-3 text-center group">
       <div className="relative w-full">
          <div className="h-12 bg-zinc-800 rounded-t-lg -mx-3 -mt-3" />
          <div className="flex justify-center -mt-6">
             <Avatar className="h-16 w-16 border-2 border-zinc-900">
                <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}`} />
                <AvatarFallback>U</AvatarFallback>
             </Avatar>
          </div>
       </div>
       <div className="mt-2 flex flex-col items-center">
          <span className="font-bold text-sm text-zinc-100 truncate w-full">Drinking Buddy {Math.floor(Math.random() * 100)}</span>
          <span className="text-[10px] text-zinc-500 line-clamp-2 mt-1">Professional Happy Hour Attendee | IPA Expert</span>
          <span className="text-[10px] text-zinc-600 mt-1">42 mutual toasts</span>
       </div>
       <Button variant="outline" className="mt-4 w-full rounded-full border-amber-600 text-amber-500 hover:bg-amber-600/10 font-bold h-8">
          <UserPlus size={16} className="mr-2" /> Connect
       </Button>
    </Card>
  );
}
