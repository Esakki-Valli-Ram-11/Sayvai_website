import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page ",
  // description: "",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="We&apos;re here to help with any questions or support you need. Reach out to us for inquiries, feedback, or assistance, and we&apos;ll get back to you as soon as possible."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
