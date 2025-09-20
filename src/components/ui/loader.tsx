import React from "react";

type PageLoaderProps = {
  message?: string;
};

export function PageLoader({ message = "Chargement..." }: PageLoaderProps) {
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-background/60 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 rounded-full border-2 border-border border-t-primary animate-spin" />
        <p className="text-sm text-muted-foreground font-mono">{message}</p>
      </div>
    </div>
  );
}