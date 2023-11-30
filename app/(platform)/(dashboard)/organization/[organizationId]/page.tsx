import { OrganizationSwitcher, auth } from "@clerk/nextjs";
import React from "react";

type Props = {};

const OrganizationPage = (props: Props) => {
  const { userId, orgId } = auth();
  return (
    <div>
      {/* <OrganizationSwitcher hidePersonal /> */}
      Organization page
    </div>
  );
};

export default OrganizationPage;
