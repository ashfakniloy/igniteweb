import { useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";

type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label?: string;
  className?: string;
};

function InputField({ name, label, className, ...props }: InputFieldProps) {
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
      <input
        id={label}
        {...props}
        {...register(name)}
        className={cn(
          "w-full outline-none px-6 py-3 rounded-lg bg-transparent border-2 border-gray-700 focus:border-gray-400",
          className,
          errors[name] && "border-red-400"
        )}
      />
      {errors[name] && (
        <p className="absolute mt-0.5 text-sm text-red-600">
          {errors[name]?.message?.toString()}
        </p>
      )}
    </div>
  );
}

export default InputField;
