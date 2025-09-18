import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom AI Solutions | Sayvai",
  description: "Tailored AI solutions designed specifically for your business needs and workflows.",
  robots: ""
};

export default function CustomAISolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
