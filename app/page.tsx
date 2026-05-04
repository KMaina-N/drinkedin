'use client';
import { Navbar } from "@/components/drinkedin/Navbar";
import { Sidebar } from "@/components/drinkedin/Sidebar";
import { CreatePost } from "@/components/drinkedin/CreatePost";
import { PostCard, PostProps } from "@/components/drinkedin/PostCard";
import { RightSidebar } from "@/components/drinkedin/RightSidebar";
import { BottomNav } from "@/components/drinkedin/BottomNav";
import { motion } from "framer-motion";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const MOCK_POSTS: PostProps[] = [
  {
    author: {
      name: "Marcus Vine",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
      headline: "Ex-Google | Founder of SipSafe | Professional Wine Taster"
    },
    content: "Thrilled to announce that I've finally achieved my level 3 WSET certification! 🍷✨\n\nAfter 480 tastings and a few too many hangovers, it's official. Passion pays off. Remember, high quality grapes lead to high quality business. Let's grab a glass and talk strategy!",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1200&auto=format&fit=crop",
    time: "4h",
    stats: {
      cheers: 842,
      toasts: 34,
      reholds: 12
    },
    drinkType: 'wine'
  },
  {
    author: {
      name: "Brenda Brew",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Brenda",
      headline: "Brewmaster at Hops & Glory | Podcast Host"
    },
    content: "Why do we always talk about output without talking about input? You can't brew a great double IPA with subpar hops. Same goes for your career. Feed your mind with the right influences.\n\nToday's inspo: This 9% Imperial Stout I found in a hidden basement in Brussels. Thoughts on barrel-aging?",
    time: "2h",
    stats: {
      cheers: 312,
      toasts: 112,
      reholds: 45
    },
    drinkType: 'beer'
  },
  {
    author: {
      name: "James Bond (Parody)",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bond",
      headline: "Risk Management Specialist | Frequent Traveler"
    },
    content: "Shaken. Never stirred. If your mixologist doesn't understand the kinetic energy required for a proper chill, they're not fit for the job.\n\n#Mixology #Standards #Vesper",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1200&auto=format&fit=crop",
    time: "15m",
    stats: {
      cheers: 5643,
      toasts: 201,
      reholds: 890
    },
    drinkType: 'martini'
  }
];

export default function DrinkedinPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-zinc-100">
      {/* Fixed Top Navbar */}
      <Navbar />
      {/* <div className="hidden md:block">
        <Navbar />
      </div> */}
      
      {/* 
          Grid System Breakdown:
          - Mobile: 1 Column (Sidebars hidden)
          - Tablet (md): 2 Columns (Sidebar + Feed)
          - Desktop (lg): 3 Columns (Sidebar + Feed + RightSidebar)
      */}
      <main className="container mx-auto px-0 sm:px-4 lg:px-8 xl:px-12  sm:mt-20 pb-20 md:pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Left Sidebar: Hidden on mobile, visible from md up */}
          <aside className="hidden md:block md:col-span-4 lg:col-span-3 xl:col-span-2.5">
            <div className="sticky top-20">
              <Sidebar />
            </div>
          </aside>

          {/* Main Feed: Full width on mobile, scales on desktop */}
          <div className="col-span-1 md:col-span-8 lg:col-span-6 xl:col-span-6 space-y-4">
            
            {/* Mobile Story Bar: Only visible on smallest screens */}
            <div className=" bg-zinc-950 border-b border-zinc-900 py-4 flex gap-4 overflow-x-auto no-scrollbar px-4 ">
               <Story avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Story1" active />
               <Story avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Story2" />
               <Story avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Story3" />
               <Story avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Story4" />
               <Story avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Story5" />
            </div>
            
            {/* Post Creation Area */}
            <div className="px-4 sm:px-0">
               <CreatePost />
            </div>
            
            {/* Feed Sort Header */}
            <div className="flex items-center gap-2 px-4 sm:px-0 my-2">
               <div className="h-[1px] flex-1 bg-zinc-800" />
               <span className="text-[10px] text-zinc-500 font-bold tracking-wider shrink-0">
                 SORT BY: <span className="text-zinc-100 hover:underline cursor-pointer uppercase">Highest Proof</span>
               </span>
            </div>

            {/* Posts List */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-3 sm:gap-4 mx-4"
            >
              {MOCK_POSTS.map((post, idx) => (
                <div key={idx} className="px-0 sm:px-0">
                   <PostCard {...post} />
                </div>
              ))}
            </motion.div>
            
            {/* Footer Placeholder */}
            <div className="py-12 text-center text-zinc-600 text-sm">
               <p className="italic">"One more for the road?"</p>
               <p className="mt-1">No more posts. Check back after happy hour.</p>
            </div>
          </div>

          {/* Right Sidebar: Hidden until lg desktop screens */}
          <aside className="hidden lg:block lg:col-span-3 xl:col-span-3.5">
            <div className="sticky top-20">
              <RightSidebar />
            </div>
          </aside>
          
        </div>
      </main>

      {/* Bottom Nav: Only visible on mobile devices */}
      <div className="md:hidden">
        <BottomNav />
      </div>
    </div>
  );
}

function Story({ avatar, active = false }: { avatar: string, active?: boolean }) {
  console.log('Rendering Story with avatar:', avatar, 'Active:', active);
  return (
    <div className="flex flex-col items-center gap-1.5 shrink-0 cursor-pointer group">
       <div className={`p-[2px] rounded-full transition-transform active:scale-95 ${active ? 'bg-gradient-to-tr from-amber-600 to-yellow-400' : 'bg-zinc-800'}`}>
          <div className="rounded-full p-0.5 bg-black">
            <Avatar className="h-14 w-14 border border-zinc-800">
               <AvatarImage src={avatar} className="object-cover" />
            </Avatar>
          </div>
       </div>
       <span className="text-[10px] text-zinc-500 group-hover:text-zinc-300">User</span>
    </div>
  )
}