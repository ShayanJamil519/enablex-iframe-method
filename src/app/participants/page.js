"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Participants = dynamic(() => import("@/components/Participants"), {
  ssr: false,
});

const page = () => {
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
          <Participants />
        </div>
      )}
    </>
  );
};

export default page;
