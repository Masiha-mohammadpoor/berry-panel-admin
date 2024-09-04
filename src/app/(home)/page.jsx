"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Home = () => {
  const router = useRouter();
  useEffect(() => {
    router.replace("/dashboard/default");
  });
  return <main>Home</main>;
};

export default Home;
