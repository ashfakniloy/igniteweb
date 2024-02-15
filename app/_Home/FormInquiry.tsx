"use client";

import { toast } from "sonner";
import InputField from "@/components/Form/InputField";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/Button";
import { Spinner } from "@/components/Spinner";
import { ContactProps, contactSchema } from "@/schemas/contactSchema";
import TextAreaField from "@/components/Form/TextAreaField";
import { API_URL } from "@/config";

function FormInquiry() {
  const defaultValues = {
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  };

  const form = useForm<ContactProps>({
    defaultValues,
    resolver: zodResolver(contactSchema),
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = form;

  const contactSubmit = async (values: ContactProps) => {
    // console.log("values", values);

    const url = `${API_URL}/messages`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const data = await res.json();

    console.log("data", data);

    if (res.ok) {
      toast.success("Contact submitted successfully");
      reset();
    } else {
      toast.error("Something went wrong");
    }
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={handleSubmit(contactSubmit)}
        className="space-y-8"
        noValidate
      >
        <InputField name="name" placeholder="Your Name" type="text" />
        <InputField name="email" placeholder="Email" type="email" />
        <InputField name="phoneNumber" placeholder="Phone Number" type="tel" />
        <InputField name="subject" placeholder="Subject" type="subject" />
        <TextAreaField
          name="message"
          placeholder="Write your question here"
          // className="py-4 border-gray-400 focus:border-gray-700 placeholder-gray-500"
        />

        <div>
          <Button
            type="submit"
            aria-label="send an inquiry"
            className="relative w-full py-3.5 text-base lg:text-lg font-semibold active:scale-95 transition-transform duration-200"
            disabled={isSubmitting}
          >
            {isSubmitting && (
              <span className="absolute flex items-center inset-y-0 left-[20%]">
                <Spinner />
              </span>
            )}
            Send message
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
