import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Dashboard = lazy(() => import("../pages/dashboard"));
const Employee = lazy(() => import("../pages/employee"));
// const ComingSoon = lazy(() => import("../components/ComingSoon"));

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Employee</div>}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/employee" element={<Employee />} />
        {/* <Route path="*" element={<ComingSoon />} /> */}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
