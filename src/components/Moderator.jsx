"use client";

const Moderator = () => {
  return (
    <div className="w-full min-h-screen">
      <iframe
        className="w-full min-h-[100vh]"
        allow="camera; microphone; fullscreen; speaker; display-capture"
        src={process.env.NEXT_PUBLIC_MODERATOR_SRC}
      ></iframe>
    </div>
  );
};

export default Moderator;
