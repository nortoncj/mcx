"use client";
import RightIcon from "@/components/icons/RightIcon";
import grabUsername from "@/actions/grabUsername";
import { useState } from "react";
import { redirect } from "next/navigation";
import SubmitButton from "../buttons/SubmitButton";

const UsernameForm = ({ desiredUsername }) => {
  const [taken, setTaken] = useState(false);
 
  async function handleSubmit(formData) {
     
     const result = await grabUsername(formData);
   
    setTaken(result === false);
    if (result) {
      redirect("/account?created=" + formData.get("username"));
    }
  }
  return (
    <form action={handleSubmit}>
      <h1 className="text-4xl font-bold text-center mb-2">Reserve your name</h1>
      <p className="text-center mb-6 text-stone-500">Choose your username</p>
      <div className="max-w-xs mx-auto">
        <input
          name="username"
          className="block p-2  mx-auto border w-full mb-2 text-center"
          type="text"
          defaultValue={desiredUsername}
          placeholder="username"
        />
        {taken && (
          <div className="bg-red-200 border border-red-500 p-2 mb-2 text-center text-bold text-xl">
            This username is already taken
          </div>
        )}
        
        <SubmitButton>
          <span>Claim your username </span> <RightIcon />
        </SubmitButton>
      </div>
    </form>
  );
};

export default UsernameForm;
