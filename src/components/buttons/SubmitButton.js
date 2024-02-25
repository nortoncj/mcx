import { useFormState } from "react-dom";

const SubmitButton = ({ children }) => {
  const { pending } = useFormState();
  return (
    <button
      disabled={pending}
      className="bg-[#2b192e] disabled:text-gray-300 disabled:bg-stone-600 text-white py-2 px-4 block mx-auto w-full flex gap-2 items-center justify-center"
      type="submit"
    >
      {children}
    </button>
  );
};
export default SubmitButton;
