import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

import UsernameForm from "@/components/forms/UsernameForm";
import { Page } from "@/models/Page";

export default async function AccountPage({ searchParams }) {
  const session = await getServerSession(authOptions);
  const desiredUsername = searchParams?.desiredUsername;
  if (!session) {
    redirect("/");
  }
  const page = await Page.findOne({ owner: session?.user?.email });

  if (page) {
    return <div className="">your page is: /{page.uri}</div>;
  }
  async function handleFormSubmit(formData) {
    console.log({ formData });
  }

  return (
    <div className="">
      <UsernameForm desiredUsername={desiredUsername} />
    </div>
  );
}
