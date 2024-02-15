"use client";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import InputField from "@/components/Form/InputField";
import TextAreaField from "@/components/Form/TextAreaField";
import { Button } from "@/components/Button";
import { Spinner } from "@/components/Spinner";
import { ContactProps, contactSchema } from "@/schemas/contactSchema";
import { API_URL } from "@/config";

function ContactForm() {
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
        noValidate
        className="space-y-7 mt-16 lg:mx-[75px] bg-custom-gray px-5 lg:px-[77px] py-[55px] rounded-xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-8">
          <InputField
            name="name"
            label="Name"
            placeholder="Enter your name"
            type="text"
            className="py-4 border-gray-400 focus:border-gray-700 placeholder-gray-500"
          />
          <InputField
            label="Email"
            name="email"
            placeholder="Enter your email"
            type="email"
            className="py-4 border-gray-400 focus:border-gray-700 placeholder-gray-500"
          />
          <InputField
            label="Phone Number"
            name="phoneNumber"
            placeholder="Enter your phone number"
            type="tel"
            className="py-4 border-gray-400 focus:border-gray-700 placeholder-gray-500"
          />

          <InputField
            label="Subject"
            name="subject"
            placeholder="Enter subject"
            type="text"
            className="py-4 border-gray-400 focus:border-gray-700 placeholder-gray-500"
          />
        </div>
        <TextAreaField
          label="Message"
          name="message"
          placeholder="Write your question here"
          className="py-4 border-gray-400 focus:border-gray-700 placeholder-gray-500"
        />

        <Button
          type="submit"
          aria-label="send message"
          className="relative rounded-full w-[240px] px-8 bg-dark-blue text-custom-gray font-medium p-4 text-base lg:text-lg active:scale-95 transition-transform duration-200"
          disabled={isSubmitting}
        >
          {isSubmitting && (
            <span className="absolute flex items-center inset-y-0 left-[8%]">
              <Spinner className="border-custom-gray border-r-custom-gray/30 border-b-custom-gray/30" />
            </span>
          )}
          Send message
        </Button>
      </form>
    </FormProvider>
  );
}

export default ContactForm;

// // without react-hook-form
// "use client";

// import { useRef, useState } from "react";
// import { toast } from "sonner";
// import InputField from "@/components/Form/InputField";
// import TextAreaField from "@/components/Form/TextAreaField";
// import SubmitContactButton from "./SubmitContactButton";

// function ContactForm() {
//   const formRef = useRef<HTMLFormElement | null>(null);
//   // const [validationError, setValidationError] = useState(null);

//   const handleFormAction = async (formData: FormData) => {
//     const { name, email, subject, message } = Object.fromEntries(
//       formData.entries()
//     );

//     const data = {
//       name,
//       email,
//       subject,
//       message,
//     };

//     console.log("data", data);

//     toast.success("Form submitted successfully");

//     formRef.current?.reset();
//   };

//   return (
//     <form
//       ref={formRef}
//       action={handleFormAction}
//       className="space-y-7 mt-16 lg:mx-[75px] bg-custom-gray px-5 lg:px-[77px] py-[55px] rounded-xl"
//       // noValidate
//     >
//       <div className="flex flex-col lg:flex-row lg:justify-between gap-7 lg:gap-8">
//         <InputField
//           name="name"
//           label="Name"
//           placeholder="Enter your name"
//           type="text"
//           required
//           className="py-4 border-gray-400 focus:border-gray-700 placeholder-gray-500"
//         />
//         <InputField
//           label="Email"
//           name="email"
//           placeholder="Enter your email"
//           type="email"
//           required
//           className="py-4 border-gray-400 focus:border-gray-700 placeholder-gray-500"
//         />
//       </div>

//       <InputField
//         label="Subject"
//         name="subject"
//         placeholder="Enter subject"
//         type="text"
//         required
//         className="py-4 border-gray-400 focus:border-gray-700 placeholder-gray-500"
//       />

//       <TextAreaField
//         label="Message"
//         name="message"
//         placeholder="Write your question here"
//         required
//         className="py-4 border-gray-400 focus:border-gray-700 placeholder-gray-500"
//       />

//       <SubmitContactButton />
//     </form>
//   );
// }

// export default ContactForm;
