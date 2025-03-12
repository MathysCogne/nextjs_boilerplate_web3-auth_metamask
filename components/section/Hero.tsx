'use client';

import React, { useEffect } from "react";
import { Button } from "@/components";
import { StarryBackground } from "../";
import { TEXT } from "@/constants/text";
import Link from "next/link";
import { useAccount } from "wagmi";
import { useRouter } from "next/navigation";

export const Hero = () => {
  const router = useRouter();
  const { isConnected } = useAccount();

  useEffect(() => {
    if (isConnected) {
      router.push("/account");
    }
  }, [isConnected, router]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <StarryBackground />
      
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-purple-600">
          {TEXT.hero.title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
          {TEXT.hero.subtitle}
        </p>
        <div>
        <Link href="https://github.com/MathysCogne/nextjs_boilerplate_web3-auth_metamask" target="_blank">
          <Button variant="secondary" size="md">
            Repo GitHub
          </Button>
        </Link>
        </div>
      </div>
    </section>
  );
};