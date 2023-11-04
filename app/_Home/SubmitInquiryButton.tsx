import { useFormStatus } from "react-dom";
import Spinner from "@/components/Icons/Spinner";
import { Button } from "@/components/Button";

function SubmitInquiryButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      aria-label="send an inquiry"
      className="relative w-full py-3.5 text-base lg:text-lg font-semibold"
      disabled={pending}
    >
      {pending && (
        <span className="absolute flex items-center inset-y-0 left-[20%]">
          <Spinner />
        </span>
      )}
      Send an inquiry
    </Button>
  );
}

export default SubmitInquiryButton;
