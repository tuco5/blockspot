"use client";
import { Fragment } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";

type Breadcrumb = {
  name: string;
  href: string;
};
export function BreadcrumbMenu() {
  const pathname = usePathname();

  const paths = pathname.split("/").filter(Boolean);

  const breadcrumbs: Breadcrumb[] = paths.map((s, i) => ({
    name: s,
    href: `/${paths.slice(0, i + 1).join("/")}`,
  }));

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.map(({ name, href }, i) => {
          if (i < breadcrumbs.length - 1)
            return (
              <Fragment key={name}>
                <BreadcrumbItem>
                  <BreadcrumbLink href={href}>{name}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </Fragment>
            );
          else return <BreadcrumbPage key={name}>{name}</BreadcrumbPage>;
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
