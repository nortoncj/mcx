import { Inter } from "next/font/google";
import "../globals.css";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Image from "next/image";
import mongoose from "mongoose";

import AsideBar from "@/components/layout/AsideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MCX",
  description: "Rebrand Yourself!",
};

export default async function AppTemplate({ children, ...rest }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect("/");
  }
  mongoose.connect(process.env.MONGO_URI);
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen">
          <aside className="max-w-lg w-48 bg-[var(--cream)] p-4 shadow">
            <div className="rounded-full overflow-hidden aspect-square w-24 mx-auto">
              <Image
                src={session.user.image}
                alt={"avatar"}
                width={256}
                height={256}
              />
            </div>
            <div className="text-center">
              <AsideBar />
            </div>
          </aside>
          <div className="grow">
            <div className="bg-white m-8 p-4 shadow ">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
