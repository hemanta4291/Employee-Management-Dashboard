import TitleWithBreadcrumb from "@/components/title-with-breadcrumb";
import React from "react";

const Dashboard = () => {
  const data = [
    { id: 1, link: "/", title: "Main" },
    { id: 2, link: "/", title: "Dashboard" },
  ];
  return (
    <div>
      <TitleWithBreadcrumb title="Dashboard" bCrumbData={data} />
      <h2 className="text-2xl">Greetings! You’ve arrived at the Dashboard</h2>
    </div>
  );
};

export default Dashboard;
