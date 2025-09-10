import { Metadata } from "next";
import DigitalMarketingPageClient from "./DigitalMarketingPageClient";

export const metadata: Metadata = {
  title: "Digital Marketing Services | Sayvai",
  description: "Transform your online presence with our comprehensive digital marketing solutions. Drive growth, engagement, and conversions with our expert strategies.",
};

export default function DigitalMarketingPage() {
  return <DigitalMarketingPageClient />;
}
