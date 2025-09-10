

import Financeaccount from "@/components/Solutions/Finance&Accounts/Finance&Accounts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sayvai",
  // description: "",
  // other metadata
};

const Finance = () => {
  return (
    <>
     <Financeaccount />
    </>
  );
};

export default Finance;
