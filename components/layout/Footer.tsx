'use client';

import Link from "next/link";
import Image from "next/image";
import { SOCIAL_LINKS, GITHUB_PROFILE } from "@/constants/links";

export const Footer = () => {
  return (
    <footer className="w-full py-6 px-4 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <Link 
          href={GITHUB_PROFILE}
          className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium flex items-center space-x-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Enjoying my boilerplate ? Show your love with a star in my GitHub repo ! 🌟</span>
        </Link>

        <div className="flex items-center space-x-6">
          {SOCIAL_LINKS.map((link) => (
            <Link
              key={link.alt}
              href={link.href}
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={link.icon}
                alt={link.alt}
                width={24}
                height={24}
                className="w-5 h-5"
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};