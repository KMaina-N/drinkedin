import { NextResponse } from 'next/server';

export async function GET() {
  const mockPosts = [
    {
      id: 1,
      author: "Marcus Vine",
      content: "Wine is the only way.",
      cheers: 150
    },
    {
      id: 2,
      author: "Brenda Brew",
      content: "IPAs for life.",
      cheers: 230
    }
  ];

  return NextResponse.json({
    success: true,
    data: mockPosts,
    timestamp: new Date().toISOString()
  });
}
