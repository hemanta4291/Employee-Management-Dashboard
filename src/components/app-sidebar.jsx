import { Home, Users } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "@/assets/logo.png";
import LightLogo from "@/assets/logo.jpg";
import { useTheme } from "./theme-provider";

// Menu items.
const items = [
  {
    id: 1,
    title: "Main",
    childs: [
      {
        id: 2,
        title: "Dashboard",
        url: "/",
        icon: Home,
      },
    ],
  },
  {
    id: 3,
    title: "Pages",
    childs: [
      {
        id: 4,
        title: "Employee",
        url: "/employee",
        icon: Users,
      },
    ],
  },
];

export function AppSidebar() {
  const location = useLocation();
  const { open } = useSidebar();
  const { theme } = useTheme();

  return (
    <Sidebar collapsible="icon" className="z-[5]">
      <SidebarHeader className="border-b border-gray-300 dark:border-gray-800 flex justify-center items-center h-20">
        <Link to="/" className="flex items-center gap-2">
          {theme === "light" ? (
            <Avatar>
              <AvatarImage src={Logo} />
              <AvatarFallback>Logo</AvatarFallback>
            </Avatar>
          ) : (
            <Avatar>
              <AvatarImage src={LightLogo} />
              <AvatarFallback>Logo</AvatarFallback>
            </Avatar>
          )}

          {open && <h2 className="font-semibold">Employee</h2>}
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          {items.map((item) => (
            <div key={item.id} className="pb-3">
              <SidebarGroupLabel className="text-base ">
                {item.title}
              </SidebarGroupLabel>
              <SidebarGroupContent className="pt-4">
                <SidebarMenu>
                  {item.childs?.map((sub) => {
                    const isActive = location.pathname === sub.url;

                    return (
                      <SidebarMenuItem key={sub.id}>
                        <SidebarMenuButton asChild>
                          <NavLink
                            to={sub.url}
                            end
                            className={`flex items-center gap-2 !px-4 !py-5 rounded-md ${
                              isActive ? "bg-gray-100 dark:bg-zinc-800" : ""
                            }`}>
                            <sub.icon />
                            <span className="inline-flex">{sub.title}</span>
                          </NavLink>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </div>
          ))}
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
