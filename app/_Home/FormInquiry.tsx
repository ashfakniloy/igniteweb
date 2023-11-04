"use client";

import { toast } from "sonner";
import InputField from "@/components/Form/InputField";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/Button";
import Spinner from "@/components/Icons/Spinner";
import { InquiryProps, inquirySchema } from "@/schemas/InquirySchema";

function FormInquiry() {
  const defaultValues = {
    name: "",
    email: "",
    figma_url: "",
  };

  const form = useForm<InquiryProps>({
    defaultValues,
    resolver: zodResolver(inquirySchema),
  });

  const {
    reset,
    handleSubmit,
    formState: { isLoading },
  } = form;

  const inquirySubmit = (values: InquiryProps) => {
    console.log("values", values);
    reset();
    toast.success("Inquiry submitted successfully");
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={handleSubmit(inquirySubmit)}
        className="space-y-8"
        noValidate
      >
        <InputField name="name" placeholder="Your Name" type="text" required />
        <InputField name="email" placeholder="Email" type="email" required />
        <InputField
          name="figma_url"
          placeholder="Paste your Figma design URL"
          type="url"
          required
        />

        <div>
          <Button
            type="submit"
            aria-label="send an inquiry"
            className="mt-2 relative w-full py-3.5 text-base lg:text-lg font-semibold active:scale-95 transition-transform duration-200"
            disabled={isLoading}
          >
            {isLoading && (
              <span className="absolute flex items-center inset-y-0 left-[20%]">
                <Spinner />
              </span>
            )}
            Send an inquiry
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}

export default FormInquiry;

// // without react-hook-form
// "use client";

// import { useRef, useState } from "react";
// import { toast } from "sonner";
// import InputField from "@/components/Form/InputField";
// import SubmitInquiryButton from "./SubmitInquiryButton";

// function FormInquiry() {
//   const formRef = useRef<HTMLFormElement | null>(null);
//   // const [validationError, setValidationError] = useState(null);

//   const handleFormAction = async (formData: FormData) => {
//     const { name, email, figma_url } = Object.fromEntries(formData.entries());

//     const data = {
//       name,
//       email,
//       figma_url,
//     };

//     console.log("data", data);

//     toast.success("Form submitted successfully");

//     formRef.current?.reset();
//   };

//   return (
//     <div>
//       <form
//         ref={formRef}
//         action={handleFormAction}
//         className="space-y-7"
//         // noValidate
//       >
//         <InputField name="name" placeholder="Your Name" type="text" required />
//         <InputField name="email" placeholder="Email" type="email" required />
//         <InputField
//           name="figma_url"
//           placeholder="Paste your Figma design URL"
//           type="url"
//           required
//         />

//         <div className="!mt-10">
//           <SubmitInquiryButton />
//         </div>
//       </form>
//     </div>
//   );
// }

// export default FormInquiry;
