import React from "react";

const LayoutLoader = ({ children }) => {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-160px)]">
      {children}
    </div>
  );
};

export default LayoutLoader;
