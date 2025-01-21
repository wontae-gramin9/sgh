"use client";

import dynamic from "next/dynamic";

const ClientOnlyDarkModeProvider = dynamic(
  () => import("./DarkModeContext").then((module) => module.DarkModeProvider),
  {
    ssr: false,
  }
);

type ProviderWrapperProps = {
  children: React.ReactNode;
};

export default function ProviderWrapper({ children }: ProviderWrapperProps) {
  return <ClientOnlyDarkModeProvider>{children}</ClientOnlyDarkModeProvider>;
}
