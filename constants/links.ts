export const PERSONAL_WEBSITE = "https://www.mathys-cognefoucault.fr/";
export const GITHUB_PROFILE = "https://github.com/MathysCogne/nextjs_boilerplate_web3-auth_metamask";
export const LINKEDIN_PROFILE = "https://www.linkedin.com/in/mathys-cogne-foucault/";

export const AUTHOR_NAME = "Mathys Cogne-Foucault";

export interface SocialLink {
  href: string;
  icon: string;
  alt: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: PERSONAL_WEBSITE,
    icon: "/icons/web.svg",
    alt: "Website"
  },
  {
    href: GITHUB_PROFILE,
    icon: "/icons/github.svg",
    alt: "GitHub"
  },
  {
    href: LINKEDIN_PROFILE,
    icon: "/icons/linkedin.svg",
    alt: "LinkedIn"
  }
]; 