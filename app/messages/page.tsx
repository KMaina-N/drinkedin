'use client';
import { Navbar } from "@/components/drinkedin/Navbar";
import { Sidebar } from "@/components/drinkedin/Sidebar";
import { RightSidebar } from "@/components/drinkedin/RightSidebar";
import { BottomNav } from "@/components/drinkedin/BottomNav";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { MagnifyingGlass, NotePencil, List } from "@phosphor-icons/react";

export default function MessagesPage() {
  return (
    <div className="flex flex-col min-h-screen pb-14 md:pb-0">
      <Navbar />
      <main className="container mx-auto px-0 sm:px-4 md:px-6 py-0 sm:py-4 md:py-6 grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-4 lg:gap-6">
        <div className="hidden md:block md:col-span-3 lg:col-span-4">
          <Card className="bg-zinc-900 border-zinc-800 h-[calc(100vh-140px)] flex flex-col overflow-hidden">
             <CardHeader className="p-4 flex flex-row items-center justify-between border-b border-zinc-800 shrink-0">
                <CardTitle className="text-lg font-bold text-zinc-100 italic">Toasts</CardTitle>
                <div className="flex gap-2">
                   <List size={20} className="text-zinc-400 cursor-pointer" />
                   <NotePencil size={20} className="text-zinc-400 cursor-pointer" />
                </div>
             </CardHeader>
             <div className="p-3 border-b border-zinc-800 shrink-0">
                <div className="relative">
                   <MagnifyingGlass className="absolute left-3 top-2.5 h-4 w-4 text-zinc-500" />
                   <Input placeholder="Search messages..." className="pl-10 h-9 bg-zinc-950 border-zinc-800 text-sm" />
                </div>
             </div>
             <div className="flex-1 overflow-y-auto no-scrollbar">
                <ChatItem 
                  name="Bourbon Bill" 
                  msg="Meet you at the usual spot at 8? Don't forget the flask." 
                  time="12m" 
                  unread
                />
                <ChatItem 
                  name="Ginny Tonic" 
                  msg="The cucumber was a mistake. Next time we go with lime." 
                  time="2h" 
                />
                <ChatItem 
                  name="Captain Morgan (Admin)" 
                  msg="Your subscription to Drinkedin Gold is about to expire." 
                  time="1d" 
                />
                <ChatItem 
                  name="Drafty Dave" 
                  msg="Did you see that post about the 0% beer? Blasphemy." 
                  time="2d" 
                />
             </div>
          </Card>
        </div>

        <div className="col-span-1 md:col-span-9 lg:col-span-8">
           <Card className="bg-zinc-900 border-zinc-800 h-[calc(100vh-140px)] flex flex-col hidden md:flex">
              <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                 <div className="bg-zinc-800 p-6 rounded-full mb-4">
                    <NotePencil size={48} className="text-zinc-500" />
                 </div>
                 <h2 className="text-xl font-bold text-zinc-100">Select a toast to start drinking</h2>
                 <p className="text-sm text-zinc-500 mt-2 max-w-xs">Connecting after a long night has never been easier. Send a message to your round buddies.</p>
              </div>
           </Card>
           
           {/* Mobile view placeholder */}
           <div className="md:hidden space-y-1">
              <ChatItem 
                name="Bourbon Bill" 
                msg="Meet you at the usual spot at 8? Don't forget the flask." 
                time="12m" 
                unread
              />
              <ChatItem 
                name="Ginny Tonic" 
                msg="The cucumber was a mistake. Next time we go with lime." 
                time="2h" 
              />
           </div>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}

function ChatItem({ name, msg, time, unread = false }: { name: string, msg: string, time: string, unread?: boolean }) {
  return (
    <div className={`p-3 flex gap-3 border-b border-zinc-800/50 hover:bg-zinc-800 cursor-pointer transition-colors ${unread ? 'border-l-4 border-l-amber-600' : ''}`}>
       <Avatar className="h-12 w-12 border border-zinc-800">
          <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`} />
          <AvatarFallback>{name[0]}</AvatarFallback>
       </Avatar>
       <div className="flex-1 min-w-0">
          <div className="flex justify-between items-center mb-0.5">
             <span className={`text-sm ${unread ? 'font-bold text-zinc-100' : 'text-zinc-300'}`}>{name}</span>
             <span className="text-[10px] text-zinc-500">{time}</span>
          </div>
          <p className={`text-xs truncate ${unread ? 'text-zinc-100 font-medium' : 'text-zinc-500'}`}>{msg}</p>
       </div>
    </div>
  )
}
