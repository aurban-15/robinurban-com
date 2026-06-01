import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Robin Urban. Questions about the book, speaking requests, church resources, or media inquiries.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Robin Urban",
    description:
      "Questions, speaking requests, church resources, or media inquiries.",
    url: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
