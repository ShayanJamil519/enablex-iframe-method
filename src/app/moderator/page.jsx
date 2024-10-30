"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Moderator = dynamic(() => import("@/components/Moderator"), {
  ssr: false,
});

export default function ModeratorPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {isMounted && (
        <div
          suppressHydrationWarning
          className="flex justify-center items-center w-full min-h-screen"
        >
          <Moderator />
        </div>
      )}
    </>
  );
}
