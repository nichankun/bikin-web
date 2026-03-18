"use client";

import * as React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  Archive,
  Users,
  Command,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarRail,
} from "@/components/ui/sidebar";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  // Ambil tab aktif langsung dari URL (?tab=...)
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("tab") || "dashboard";

  const menuItems = [
    { id: "dashboard", title: "Dashboard", icon: LayoutDashboard },
    { id: "notulen", title: "Daftar Notulen", icon: FileText },
    { id: "arsip", title: "Arsip Digital", icon: Archive },
    { id: "users", title: "Manajemen User", icon: Users },
  ];

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="h-16 border-b border-sidebar-border">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/demo/demo-instansi">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-indigo-600 text-white font-bold">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-bold tracking-tight">
                    E-NOTULEN
                  </span>
                  <span className="truncate text-[10px] text-slate-500 uppercase tracking-widest">
                    Bapenda Sultra
                  </span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu Utama</SidebarGroupLabel>
          <SidebarMenu>
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.id}>
                <SidebarMenuButton
                  asChild
                  tooltip={item.title}
                  isActive={activeTab === item.id}
                  className="py-6"
                >
                  <Link href={`?tab=${item.id}`}>
                    <item.icon />
                    <span className="font-medium">{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t p-4">
        <div className="flex items-center gap-3">
          <div className="size-8 rounded-full bg-slate-200 flex items-center justify-center font-bold text-xs">
            IH
          </div>
          <div className="flex-1 overflow-hidden group-data-[collapsible=icon]:hidden">
            <p className="text-sm font-bold truncate">Imam Hayatul</p>
            <p className="text-[10px] text-slate-500 truncate">Admin Utama</p>
          </div>
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
