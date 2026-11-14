import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UGC Work | Maddie Brass",
  description: "Home and lifestyle UGC by Maddie Brass: product demos, cozy routines, and bookish lifestyle content for brands.",
  alternates: { canonical: "/ugc" },
};

export default function UgcLayout({ children }: { children: React.ReactNode }) {
  return children;
}
