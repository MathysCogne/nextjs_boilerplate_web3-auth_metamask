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
  transaction: {
    recipient: string;
    amount: string;
    max: string;
    send: string;
    confirming_wallet: string;
    confirming_transaction: string;
    confirmed: string;
    view_etherscan: string;
    error: string;
    error_confirming: string;
    testnet_warning: string;
    native_token: string;
    balance: string;
    address: string;
    status: string;
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
  },
  transaction: {
    recipient: "Recipient Address",
    amount: "Amount",
    max: "Max",
    send: "Send",
    confirming_wallet: "Confirming in wallet...",
    confirming_transaction: "Confirming transaction...",
    confirmed: "Transaction confirmed!",
    view_etherscan: "View on Etherscan",
    error: "Error",
    error_confirming: "Error confirming",
    testnet_warning: "Transactions on {network} use test {symbol}.",
    native_token: "Native Token",
    balance: "Balance",
    address: "Address",
    status: "Status"
  }
}; 