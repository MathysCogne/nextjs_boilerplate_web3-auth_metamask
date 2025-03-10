'use client';

import { StarryBackground } from "@/components";
import { Button } from "@/components";
import Link from "next/link";
import { TEXT } from "@/constants/text";

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <StarryBackground />
      
      <div className="relative z-10 text-center px-4">
        <div className="mb-4 font-mono">
          <span className="text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-purple-600">
            {TEXT.notFound.title}
          </span>
        </div>
        <h2 className="text-4xl font-semibold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-purple-600">
          {TEXT.notFound.subtitle}
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          {TEXT.notFound.description}
        </p>
        <Link href="/">
          <Button>
            {TEXT.notFound.backHome}
          </Button>
        </Link>
      </div>
    </section>
  );
} 