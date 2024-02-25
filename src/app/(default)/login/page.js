import LoginWithGoogle from "@/components/buttons/LoginWithGoogle";

export default function LoginPage() {
  return (
    <div className="">
      <div className="  p-4 max-w-xs mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">Login</h1>
        <p className=" text-center mb-6 text-stone-500">
          Login to your account using one of the methods below
        </p>
        <LoginWithGoogle />
      </div>
    </div>
  );
}
