import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import GirdView from "@/components/gird-view";
import ListView from "@/components/list-view";
import TitleWithBreadcrumb from "@/components/title-with-breadcrumb";
import { Grid, List, LoaderIcon, Plus } from "lucide-react";
import EmployeeDialog from "@/components/employee-dialog";
import { useGetEmployeesQuery } from "@/features/employeesApi";

const Employee = () => {
  const { data, error, isLoading } = useGetEmployeesQuery(null);

  const dataBread = [
    { id: 1, link: "/employee", title: "Pages" },
    { id: 2, link: "/employee", title: "Employee" },
    { id: 3, link: "/employee", title: "Employees List" },
  ];

  if (isLoading)
    return (
      <p className="flex justify-center items-center pt-40">
        <LoaderIcon size={100} className=" animate-spin " />
      </p>
    );
  if (error)
    return (
      <p className="flex justify-center items-center pt-40">
        Error fetching users
      </p>
    );

  return (
    <div>
      <TitleWithBreadcrumb title="Employees List" bCrumbData={dataBread} />
      <Tabs defaultValue="gridview">
        <div className="flex justify-between items-center w-full pt-4 pb-8">
          <EmployeeDialog mEditingEmployee={false} />
          <TabsList className="text-center  flex gap-2 bg-gray-100 p-0 rounded-lg">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <TabsTrigger
                    value="gridview"
                    className="px-3 py-2 rounded-md transition-all duration-300 
                 bg-white text-gray-700
                 data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                    <Grid size={20} />
                  </TabsTrigger>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Grid View</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <TabsTrigger
                    value="listview"
                    className="px-3 py-2 rounded-md transition-all duration-300 
                 bg-white text-gray-700 
                 data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                    <List size={20} />
                  </TabsTrigger>
                </TooltipTrigger>
                <TooltipContent>
                  <p>List View</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </TabsList>
        </div>
        <TabsContent value="gridview">
          <GirdView data={data} />
        </TabsContent>
        <TabsContent value="listview">
          <ListView data={data} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Employee;
