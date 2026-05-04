'use client';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ThumbsUp, ChatCircle, ShareFat, Repeat, DotsThree, GlobeHemisphereWest, BeerStein, Martini, Wine, Flask } from "@phosphor-icons/react";
import { Badge } from "@/components/ui/badge";

export interface PostProps {
  author: {
    name: string;
    avatar: string;
    headline: string;
  };
  content: string;
  image?: string;
  time: string;
  stats: {
    cheers: number;
    toasts: number;
    reholds: number;
  };
  drinkType?: 'beer' | 'martini' | 'wine' | 'cocktail';
}

export function PostCard({ author, content, image, time, stats, drinkType }: PostProps) {
  const DrinkIcon = {
    beer: <BeerStein size={16} weight="fill" className="text-amber-500" />,
    martini: <Martini size={16} weight="fill" className="text-zinc-300" />,
    wine: <Wine size={16} weight="fill" className="text-red-500" />,
    cocktail: <Flask size={16} weight="fill" className="text-emerald-400" />,
  }[drinkType || 'beer'];

  return (
    <Card className="bg-zinc-900 border-zinc-800 mb-2 overflow-hidden">
      <CardHeader className="p-3 pb-0 flex-row items-start justify-between space-y-0">
        <div className="flex gap-2">
          <Avatar className="h-12 w-12 cursor-pointer">
            <AvatarImage src={author.avatar} />
            <AvatarFallback>{author.name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="text-sm font-bold text-zinc-100 hover:underline hover:text-amber-500 cursor-pointer">{author.name}</span>
              <span className="text-zinc-500 text-xs text-nowrap mt-0.5">• 1st</span>
            </div>
            <p className="text-[11px] text-zinc-400 leading-tight line-clamp-1">{author.headline}</p>
            <div className="flex items-center gap-1 text-[11px] text-zinc-500 mt-0.5">
               <span>{time}</span>
               <span>•</span>
               <GlobeHemisphereWest size={12} weight="fill" />
            </div>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-400">
           <DotsThree size={24} weight="bold" />
        </Button>
      </CardHeader>
      
      <CardContent className="p-3 pt-2 text-sm text-zinc-200">
         <p className="whitespace-pre-wrap">{content}</p>
      </CardContent>

      {image && (
        <div className="relative aspect-video w-full">
           <img 
            src={image} 
            alt="Post content" 
            className="object-cover w-full h-full border-y border-zinc-800"
            referrerPolicy="no-referrer"
          />
        </div>
      )}

      <div className="px-3 py-1.5 flex items-center justify-between border-b border-zinc-800/50">
         <div className="flex items-center gap-1 text-[11px] text-zinc-500 hover:text-amber-500 hover:underline cursor-pointer">
            <div className="flex -space-x-1">
               <div className="z-20 bg-amber-600 rounded-full p-0.5 border border-zinc-900">
                  <BeerStein size={8} weight="fill" color="white" />
               </div>
               <div className="z-10 bg-red-600 rounded-full p-0.5 border border-zinc-900">
                  <Martini size={8} weight="fill" color="white" />
               </div>
            </div>
            <span>{stats.cheers} Cheers</span>
         </div>
         <div className="flex gap-2 text-[11px] text-zinc-500">
            <span className="hover:text-amber-500 hover:underline cursor-pointer">{stats.toasts} toasts</span>
            <span>•</span>
            <span className="hover:text-amber-500 hover:underline cursor-pointer">{stats.reholds} re-holds</span>
         </div>
      </div>

      <CardFooter className="p-1 px-3 grid grid-cols-4 gap-1">
         <FeedButton icon={<ThumbsUp size={20} />} label="Cheers" />
         <FeedButton icon={<ChatCircle size={20} />} label="Toast" />
         <FeedButton icon={<Repeat size={20} />} label="Re-hold" />
         <FeedButton icon={<ShareFat size={20} />} label="Pour" />
      </CardFooter>
    </Card>
  );
}

function FeedButton({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <Button variant="ghost" className="flex items-center gap-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 py-6 h-10 px-1 sm:px-3">
       {icon}
       <span className="text-[13px] font-bold hidden sm:inline">{label}</span>
    </Button>
  );
}
