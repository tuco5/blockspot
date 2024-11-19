import {
  Sidebar,
  SidebarFooter,
  SidebarGroupContent,
  SidebarHeader,
} from "../ui/sidebar";

export function SidebarMenu() {
  return (
    <Sidebar>
      <SidebarHeader>Header</SidebarHeader>
      <SidebarGroupContent>Content</SidebarGroupContent>
      <SidebarFooter>Footer</SidebarFooter>
    </Sidebar>
  );
}
