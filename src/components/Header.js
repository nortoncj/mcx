import React from "react";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LogoutButton from "./buttons/LogoutBtn";

export default async function Header() {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <header className=" bg-white border-b py-4 ">
      <div className="m-w-4xl flex items-center justify-between mx-auto px-6">
        <div className="flex gap-6 ">
          <Link
            className="items-center flex gap- text-lg text-stone-700"
            href={"/"}
          >
            <span className="text-bold">MCX</span>
          </Link>
          <nav className="flex gap-4 text-stone-500 items-center text-sm">
            <Link href={"/about"}>About</Link>
            <Link href={"/pricing"}>Pricing</Link>
            <Link href={"/contact"}>Contact</Link>
          </nav>
        </div>

        <nav className="flex gap-4 text-sm text-stone-500 justify-center items-center">
          {!!session && (
            <>
              <Link href={"/account"}>
                Hello, <strong>{session.user?.name} </strong>{" "}
              </Link>
              <LogoutButton />
            </>
          )}
          {!session && (
            <>
              <Link href={"/login"}>Login</Link>
              <Link href={"/login"}>Sign Up</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
