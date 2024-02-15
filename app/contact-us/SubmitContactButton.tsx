import { useFormStatus } from "react-dom";
import { Spinner } from "@/components/Spinner";

function SubmitContactButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      aria-label="send message"
      className="relative rounded-full w-[240px] px-8 bg-dark-blue text-custom-gray font-medium p-4 text-base lg:text-lg  disabled:opacity-50 disabled:cursor-not-allowed"
      disabled={pending}
    >
      {pending && (
        <span className="absolute flex items-center inset-y-0 left-[8%]">
          <Spinner className="border-custom-gray border-r-custom-gray/30 border-b-custom-gray/30" />
        </span>
      )}
      Send message
    </button>
  );
}

export default SubmitContactButton;
