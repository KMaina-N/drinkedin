'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info, Plus, ArrowRight, BeerBottle, Martini, Wine, Flask } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function RightSidebar() {
  return (
    <div className="flex flex-col gap-2">
      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader className="p-3 pb-0 flex-row items-center justify-between space-y-0">
          <CardTitle className="text-sm font-bold text-zinc-100">Add to your rounds</CardTitle>
          <Info size={16} className="text-zinc-500 cursor-help" />
        </CardHeader>
        <CardContent className="p-3 space-y-4">
          <Recommendation 
             name="The Drunken Monocle" 
             desc="Boutique Gin Bar • London" 
             avatar="https://api.dicebear.com/7.x/initials/svg?seed=DM"
          />
          <Recommendation 
             name="Sarah Shaker" 
             desc="Master Mixologist at Ritz" 
             avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
          />
          <Recommendation 
             name="Hop Heads United" 
             desc="Global IPAs community" 
             avatar="https://api.dicebear.com/7.x/initials/svg?seed=HH"
          />
          
          <Button variant="ghost" className="w-full text-zinc-400 hover:text-zinc-100 font-bold flex items-center justify-start h-8 px-2 gap-1 group">
            View all recommendations <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-zinc-900 border-zinc-800 sticky top-20">
         <CardHeader className="p-3 pb-2 flex-row items-center justify-between space-y-0">
            <CardTitle className="text-sm font-bold text-zinc-100 italic">Promoted</CardTitle>
            <DotsThreeVertical />
         </CardHeader>
         <CardContent className="p-3 pt-0">
            <div className="group cursor-pointer">
               <img 
                 src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=600&auto=format&fit=crop" 
                 alt="Ad" 
                 className="rounded-md w-full aspect-[4/3] object-cover mb-2 filter grayscale group-hover:grayscale-0 transition-[filter]" 
               />
               <h4 className="text-xs font-bold text-zinc-300 group-hover:text-amber-500 group-hover:underline">The Perfect Old Fashioned Set</h4>
               <p className="text-[10px] text-zinc-500 mt-0.5 underline">Shop Premium Glassware</p>
            </div>
         </CardContent>
         <div className="p-3 text-[10px] text-zinc-500 flex flex-wrap gap-x-3 gap-y-2 justify-center border-t border-zinc-800">
            <span className="hover:underline cursor-pointer">About</span>
            <span className="hover:underline cursor-pointer">Accessibility</span>
            <span className="hover:underline cursor-pointer">Drink Responsibly</span>
            <span className="hover:underline cursor-pointer">Privacy & Terms</span>
            <span className="hover:underline cursor-pointer">Ad Choices</span>
            <span className="hover:underline cursor-pointer">Careers</span>
            <span className="hover:underline cursor-pointer">Business Services</span>
            <div className="flex items-center gap-1 w-full justify-center mt-1">
               <span className="text-amber-600 font-bold text-xs leading-none">Drinkedin</span>
               <span>Drinkedin Corporation © 2024</span>
            </div>
         </div>
      </Card>
    </div>
  );
}

function Recommendation({ name, desc, avatar }: { name: string, desc: string, avatar: string }) {
  return (
    <div className="flex gap-2">
      <Avatar className="h-10 w-10">
        <AvatarImage src={avatar} />
        <AvatarFallback>{name[0]}</AvatarFallback>
      </Avatar>
      <div className="flex-1 flex flex-col min-w-0">
        <span className="text-xs font-bold text-zinc-100 truncate hover:underline cursor-pointer">{name}</span>
        <span className="text-[10px] text-zinc-500 truncate">{desc}</span>
        <Button variant="outline" className="mt-1 h-7 rounded-full border-zinc-500 text-zinc-300 hover:bg-zinc-800 hover:border-zinc-100 font-bold text-xs py-0 w-fit px-3">
          <Plus size={14} className="mr-1" /> Cheers
        </Button>
      </div>
    </div>
  );
}

function DotsThreeVertical() {
   return (
      <div className="flex flex-col gap-0.5 cursor-pointer">
         <div className="w-0.5 h-0.5 bg-zinc-500 rounded-full" />
         <div className="w-0.5 h-0.5 bg-zinc-500 rounded-full" />
         <div className="w-0.5 h-0.5 bg-zinc-500 rounded-full" />
      </div>
   )
}
