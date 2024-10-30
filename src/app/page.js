"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {isMounted && (
        <div className="w-full min-h-screen flex flex-col gap-10 justify-center items-center">
          <h1 className="text-2xl font-bold">Choose a View</h1>
          <div className="space-x-4">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded"
              onClick={() => router.push("/moderator")}
            >
              Moderator
            </button>
            <button
              className="px-4 py-2 bg-green-500 text-white rounded"
              onClick={() => router.push("/participants")}
            >
              Participant
            </button>
          </div>
        </div>
      )}
    </>
  );
}
