import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Phone Call Solutions | Sayvai",
  description: "Enhance your business communication with our advanced phone call solutions.",
  robots: ""
};

export default function PhoneCallSolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
