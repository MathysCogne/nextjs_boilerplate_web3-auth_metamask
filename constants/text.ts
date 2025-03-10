interface TextContent {
  metadata: {
    title: string;
    description: string;
    lang: string;
  };
  hero: {
    title: string;
    subtitle: string;
  };
  navigation: {
    logo: string;
  };
  connect: {
    connect: string;
    connected: string;
    disconnect: string;
    select_wallet: string;
    address_start: string;
    cancel: string;
    wrong_network: string;
    switch_network: string;
  };
  notFound: {
    title: string;
    subtitle: string;
    description: string;
    backHome: string;
  };
}

export const TEXT: TextContent = {
  metadata: {
    title: "Next.js Boilerplate - Auth Metamask | wagmi | viem",
    description: "Start developing your Web3 application with Next.js, Wagmi, and Viem.",
    lang: "en"
  },
  hero: {
    title: "Next.js Boilerplate",
    subtitle: "Start developing your Web3 application with Next.js, Wagmi, and Viem."
  },
  navigation: {
    logo: "Next.js Boilerplate"
  },
  connect: {
    connect: "Login",
    connected: "Connected",
    disconnect: "Disconnect",
    select_wallet: "Select wallet",
    address_start: "Connected with",
    cancel: "Cancel",
    wrong_network: "Wrong network",
    switch_network: "Switch network"
  },
  notFound: {
    title: "404",
    subtitle: "Error: Not Found",
    description: "Oops ! This page doesn't exist.",
    backHome: "Back to Home"
  }
}; 