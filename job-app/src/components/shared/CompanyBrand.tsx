"use client";

import { CompanyConfig } from "@/data/types";

export function CompanyBrand({
  config,
  children,
}: {
  config: CompanyConfig;
  children: React.ReactNode;
}) {
  return (
    <div
      style={
        {
          "--accent": config.accentColor,
          "--accent-light": config.accentLight,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
