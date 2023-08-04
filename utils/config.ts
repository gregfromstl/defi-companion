import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, mainnet } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

export const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [
    publicProvider(),
    alchemyProvider({
      apiKey: String(process.env.NEXT_PUBLIC_ALCHEMY_API_KEY),
    }),
  ],
);

const { connectors } = getDefaultWallets({
  appName: "Chakra UI Rainbow Kit NextJS Starter",
  projectId: `${process.env.NEXT_PUBLIC_APP_PROJECT_ID}`,
  chains,
});

const config = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

export default config;
