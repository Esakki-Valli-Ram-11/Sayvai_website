import LegalCompliance from "@/components/Solutions/Legal&Compliance/Legal&Compliance";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing | Sayvai",
  description: "AI-driven Digital Marketing solutions by Sayvai: strategy, automation, analytics, and optimization.",
};

const LegalCompliancePage = () => {
  return (
    <>
      <LegalCompliance />
    </>
  );
};

export default LegalCompliancePage;
