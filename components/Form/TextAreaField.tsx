import { useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  className?: string;
  name: string;
};

function TextAreaField({ label, name, className, ...props }: TextAreaProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="relative w-full">
      {label && (
        <label
          htmlFor={label}
          className="inline-block font-medium mb-2 text-black"
        >
          {label}
        </label>
      )}
      <textarea
        id={label}
        {...props}
        {...register(name)}
        className={cn(
          "w-full outline-none px-6 py-3 rounded-lg bg-transparent border-2 border-gray-700 focus:border-gray-400",
          className,
          errors[name] && "border-red-400"
        )}
        rows={4}
      />

      {errors[name] && (
        <p className="absolute -mt-1.5 text-sm text-red-600">
          {errors[name]?.message?.toString()}
        </p>
      )}
    </div>
  );
}

export default TextAreaField;
