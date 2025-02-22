import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import AppRouter from "./router/app-router";
import AppNavbar from "./components/app-navbar";

export default function Layout() {
  return (
    <SidebarProvider
      style={{
        "--sidebar-width": "14rem",
        "--sidebar-width-mobile": "14rem",
      }}>
      <AppSidebar />
      <div className="w-full">
        <AppNavbar />
        <main className="px-4 pt-24 pb-14">
          <AppRouter />
        </main>
      </div>
    </SidebarProvider>
  );
}
