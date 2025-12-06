"use client";
import { FilterProvider } from "@/context/FilterContext";

export default function ClientLayout({ children }) {
  return (
    <FilterProvider>
      {children}
    </FilterProvider>
  );
}
