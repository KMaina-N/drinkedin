'use client';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BeerStein, BookmarkSimple, Plus } from "@phosphor-icons/react";
import { Badge } from "@/components/ui/badge";

export function Sidebar() {
  return (
    <div className="flex flex-col gap-2">
      <Card className="overflow-hidden bg-zinc-900 border-zinc-800">
        <div className="h-14 bg-gradient-to-r from-amber-900 to-amber-600" />
        <CardContent className="px-3 pb-4">
          <div className="relative -mt-8 mb-3 flex justify-center">
            <Avatar className="h-16 w-16 border-4 border-zinc-900 ring-2 ring-zinc-800">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" />
              <AvatarFallback>FK</AvatarFallback>
            </Avatar>
          </div>
          <div className="text-center group">
            <h3 className="font-bold text-zinc-100 group-hover:underline cursor-pointer">Felix Kegger</h3>
            <p className="text-xs text-zinc-400 mt-1 leading-tight">Chief Sommelier at The Rusty Bucket | Craft Beer Evangelist</p>
          </div>
          
          <div className="mt-4 border-t border-zinc-800 pt-4 space-y-3">
             <div className="flex justify-between items-center text-xs">
                <span className="text-zinc-400 font-medium hover:underline cursor-pointer">Rounds bought</span>
                <span className="text-amber-500 font-bold">42</span>
             </div>
             <div className="flex justify-between items-center text-xs">
                <span className="text-zinc-400 font-medium hover:underline cursor-pointer">Post views (Tonight)</span>
                <span className="text-amber-500 font-bold">1.2k</span>
             </div>
          </div>
          
          <div className="mt-4 border-t border-zinc-800 pt-4">
             <div className="flex flex-col gap-1">
                <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider">Premium Access</span>
                <div className="flex items-center gap-1 text-xs hover:text-amber-500 cursor-pointer transition-colors">
                   <div className="bg-amber-600/20 p-0.5 rounded">
                     <BeerStein size={14} className="text-amber-500" />
                   </div>
                   <span className="underline font-medium">Try Gold Membership</span>
                </div>
             </div>
          </div>

          <div className="mt-4 border-t border-zinc-800 pt-3">
             <div className="flex items-center gap-2 text-xs font-bold text-zinc-300 hover:bg-zinc-800 p-1 rounded transition-colors cursor-pointer">
                <BookmarkSimple size={14} weight="fill" />
                <span>Saved Pubs</span>
             </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-zinc-900 border-zinc-800 sticky top-20">
         <CardContent className="p-3 text-xs">
            <div className="flex justify-between items-center mb-3">
               <span className="font-bold text-zinc-100">Recent Happy Hours</span>
            </div>
            <div className="space-y-3 text-zinc-400">
               <div className="flex items-center gap-2 group cursor-pointer hover:text-zinc-100">
                  <span className="bg-zinc-800 p-1 rounded">#</span>
                  <span className="truncate">whisky_tasting_2024</span>
               </div>
               <div className="flex items-center gap-2 group cursor-pointer hover:text-zinc-100">
                  <span className="bg-zinc-800 p-1 rounded">#</span>
                  <span className="truncate">craft_beerrrrr</span>
               </div>
               <div className="flex items-center gap-2 group cursor-pointer hover:text-zinc-100">
                  <span className="bg-zinc-800 p-1 rounded text-amber-500">
                     <Plus size={12} weight="bold" />
                  </span>
                  <span className="text-amber-600 font-bold">Groups</span>
               </div>
            </div>
            <div className="mt-4 pt-4 border-t border-zinc-800 text-center">
                <button className="text-zinc-500 hover:text-zinc-100 font-bold transition-colors">Discover more</button>
            </div>
         </CardContent>
      </Card>
    </div>
  );
}
