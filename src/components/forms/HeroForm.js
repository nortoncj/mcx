"use client";
import { signIn } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function HeroForm({ user }) {
    const router = useRouter()
  useEffect(() => {
    if (
      "localStorage" in window &&
      window.localStorage.getItem("desiredUsername")
    ) {
      const username = window.localStorage.getItem("desiredUsername");
      window.localStorage.removeItem("desiredUsername");
      redirect("/account?desiredUsername=" + username);
    }
  }, []);
  //   const [username, setUsername] = useState("");
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const input = form.querySelector("input");
    const username = input.value;
    if (username.length > 0) {
      if (user) {
        router.push("/account?desiredUsername=" + username);
      } else {
        window.localStorage.setItem("desiredUsername", username);
        await signIn("google");
      }
    }

    // console.log({username});
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="inline-flex items-center shadow-lg shadow-stone-700/20"
      action=""
    >
      <span className="bg-white py-4 pl-4">MCX.com/</span>
      <input
        // value={username}
        // onChange={(ev) => setUsername(ev.target.value)}
        className="py-4"
        type="text"
        placeholder="username"
      />
      <button type="submit" className="bg-[#65272c] text-white py-4 px-6">
        Start for Free
      </button>
    </form>
  );
}
