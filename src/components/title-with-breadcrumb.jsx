import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { NavLink } from "react-router-dom";

const TitleWithBreadcrumb = ({
  title = "Title",
  bCrumbData = [
    { id: 1, link: "/employee", title: "Employees" },
    { id: 2, link: "/employee/list", title: "Employee List" },
  ],
}) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between py-6">
      <h2 className="text-base sm:text-xl pb-2 sm:pb-0 font-semibold">
        {title}
      </h2>
      <Breadcrumb>
        <BreadcrumbList>
          {bCrumbData.map((item, index) => (
            <div key={item.id} className="flex items-center gap-2">
              <BreadcrumbItem>
                {index === bCrumbData.length - 1 ? (
                  <BreadcrumbPage>{item.title}</BreadcrumbPage>
                ) : (
                  <NavLink
                    to={item.link}
                    className="text-blue-500 hover:underline">
                    {item.title}
                  </NavLink>
                )}
              </BreadcrumbItem>
              {index !== bCrumbData.length - 1 && <BreadcrumbSeparator />}
            </div>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default TitleWithBreadcrumb;
