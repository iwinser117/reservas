'use client'
import HomeView from "./pages/homeuser/HomeView";
import {NextUIProvider} from "@nextui-org/react";
export default function Home() {
  return (
    <NextUIProvider>
      <main className="">
        <HomeView />
      </main>
    </NextUIProvider>
  );
}
