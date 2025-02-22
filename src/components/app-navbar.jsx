import React from "react";
import { SidebarTrigger, useSidebar } from "./ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import ThemeToggle from "./theme-toggle";
import { Menu } from "lucide-react";

const AppNavbar = () => {
  const { open, toggleSidebar } = useSidebar();
  return (
    <div
      className={`${
        open ? "pl-4 md:pl-[230px]" : "pl-14"
      } h-[80px] fixed z-[4] left-0 top-0 w-full transition-all duration-300  bg-white dark:bg-zinc-900 border-b border-gray-300 dark:border-gray-800 flex justify-between pr-4  items-center`}>
      <div className="flex gap-2 sm:gap-4 items-center">
        <span className="cursor-pointer" onClick={toggleSidebar}>
          <Menu size={20} className="text-gray-700 dark:text-gray-100" />
        </span>
        <h2 className="font-semibold">Employee Management</h2>
      </div>

      <div className="flex items-center gap-1 sm:gap-2">
        <ThemeToggle />

        <DropdownMenu>
          <DropdownMenuTrigger className="outline-none">
            <Avatar className="w-8 h-8">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="px-0">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Setting</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default AppNavbar;
