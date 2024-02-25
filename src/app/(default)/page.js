import HeroForm from "@/components/forms/HeroForm";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";


export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
    <main>
      <section className="p-8 pt-32 mx-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl font-bold max-w-[600px] ">
            Link your Brand
            <br />
            Share your Story
          </h1>
          <h2 className="text-stone-500 text-xl mt-6 max-w-sm">
            Share your links, social profiles and networking info all in on
            place
          </h2>
        </div>
        
        <HeroForm user={session?.user} />
      
      </section>
    </main>
  );
}
