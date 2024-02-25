"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faChartLine,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";
import LogoutButton from "@/components/buttons/LogoutBtn";
import { usePathname } from "next/navigation";

export default function AsideBar() {
  const path = usePathname();
  return (
    <nav className="inline-flex mx-auto flex-col text-center mt-12 gap-6 ">
      <Link
        href={"/analytics"}
        className={
          "flex gap-2  hover:text-[var(--camel)]  " +
          (path === "/analytics"
            ? "text-[var(--camel)] font-bold"
            : "text-[var(--roman)]")
        }
      >
        <FontAwesomeIcon
          fixedWidth={1}
          icon={faChartLine}
          className="h-6 w-6"
        />{" "}
        <span>Analytics</span>
      </Link>
      <Link
        href={"/account"}
        className={
          "flex gap-2  hover:text-[var(--camel)] " +
          (path === "/account"
            ? "text-[var(--camel)] font-bold "
            : "text-[var(--roman)]")
        }
      >
        <FontAwesomeIcon
          fixedWidth={1}
          icon={faFileLines}
          className="h-6 w-6"
        />
        <span>My Page</span>
      </Link>
      <Link
        href={"/settings"}
        className={
          "flex gap-2  hover:text-[var(--camel)] " +
          (path === "/settings"
            ? "text-[var(--camel)] font-bold "
            : "text-[var(--roman)]")
        }
      >
        <FontAwesomeIcon fixedWidth={1} icon={faGear} className="h-6 w-6" />
        <span>Settings</span>
      </Link>

      <LogoutButton
        iconLeft="true"
        className=" flex gap-4 items-cente hover:text-[var(--camel)] text-[var(--roman)]"
        iconClasses=" w-6 h-6"
      />
      <Link
        href={"/"}
        className="flex gap-2 items-center  hover:text-[var(--camel)] text-[var(--indigo)] text-xs border-t border-[var(--camel)] pt-4"
      >
        <FontAwesomeIcon
          fixedWidth={1}
          icon={faArrowLeft}
          className="h-3 w-3"
        />
        <span>Back to Website</span>
      </Link>
    </nav>
  );
}
