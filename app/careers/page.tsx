import React from "react";
import CareersMain from "../components/CareersMain";
import Divider from "../components/Divider";
import CareersRoles from "../components/CareersRoles";

const CareersPage = (): React.ReactNode => {
  return (
    <main className="flex min-h-screen flex-col">
      <CareersMain></CareersMain>
      <Divider></Divider>
      <CareersRoles></CareersRoles>
    </main>
  );
};

export default CareersPage;
