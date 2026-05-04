'use client';
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Image, PlayCircle, Calendar, Article } from "@phosphor-icons/react";

export function CreatePost() {
  return (
    /* 
       RESPONSIVE FIX: 
       - Removed 'mb-2' to let the parent handle spacing.
       - Removed rounded corners on mobile (rounded-none) for a native feel, 
         switching to 'sm:rounded-xl' for tablet/desktop.
    */
    <Card className="bg-zinc-900 border-x-0 sm:border-x border-zinc-800 rounded-none sm:rounded-xl p-3 sm:p-4">
      <div className="flex gap-3 items-center mb-3">
        {/* Responsive Avatar: Slightly smaller on tiny phones */}
        <Avatar className="h-10 w-10 sm:h-12 sm:w-12 shrink-0">
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" />
            <AvatarFallback className="bg-zinc-800 text-zinc-400">FK</AvatarFallback>
        </Avatar>

        {/* Input Trigger: Ensure it doesn't shrink and handles long text via truncate */}
        <Button 
          variant="outline" 
          className="flex-1 justify-start h-10 sm:h-12 rounded-full border-zinc-800 bg-transparent text-zinc-500 hover:bg-zinc-800 font-medium px-4 transition-colors overflow-hidden"
        >
          <span className="truncate text-sm sm:text-base">
            Share a drink discovery...
          </span>
        </Button>
      </div>

      {/* 
          ACTION BUTTONS FIX:
          - 'overflow-x-auto' allows swiping if the screen is too narrow.
          - 'scrollbar-hide' prevents ugly scrollbars on mobile.
          - 'justify-between' on desktop, 'flex-start' on mobile.
      */}
      <div className="flex items-center justify-start sm:justify-between gap-1 overflow-x-auto no-scrollbar -mx-1 px-1">
         <ActionButton icon={<Image size={20} weight="fill" className="text-blue-400" />} label="Media" />
         <ActionButton icon={<PlayCircle size={20} weight="fill" className="text-emerald-400" />} label="Reel" />
         <ActionButton icon={<Calendar size={20} weight="fill" className="text-amber-500" />} label="Event" />
         <ActionButton icon={<Article size={20} weight="fill" className="text-rose-400" />} label="Review" />
      </div>
    </Card>
  );
}

function ActionButton({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    /* 
       RESPONSIVE FIX:
       - 'flex-1' and 'min-w-fit' ensure buttons take equal space but don't squash text.
       - Smaller icons (size 20) fit mobile better than size 24.
    */
    <Button 
      variant="ghost" 
      className="text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-100 flex items-center gap-2 h-9 sm:h-10 px-3 shrink-0 sm:shrink"
    >
       <span className="shrink-0">{icon}</span>
       <span className="text-xs sm:text-sm font-semibold whitespace-nowrap">{label}</span>
    </Button>
  )
}