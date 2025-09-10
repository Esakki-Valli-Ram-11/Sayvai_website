import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Phone Call Solutions | Sayvai",
  description: "Enhance your business communication with our advanced phone call solutions.",
  robots: "noindex, nofollow"
};

export default function PhoneCallSolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
