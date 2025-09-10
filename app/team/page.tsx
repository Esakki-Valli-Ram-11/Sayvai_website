import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import TeamSection from "@/components/Team/TeamSection";

export const metadata: Metadata = {
  title: "Our Team | Sayvai",
  description:
    "Meet the people behind Sayvai — a multidisciplinary team building delightful, AI-powered experiences.",
};

export default function TeamPage() {
  return (
    <>
      <Breadcrumb
        pageName="Our Team"
        description="A passionate team of builders, designers, and researchers crafting human‑centered AI solutions."
      />

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <TeamSection />
        </div>
      </section>
    </>
  );
}
