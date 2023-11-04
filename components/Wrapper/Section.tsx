import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("py-20 lg:py-32", className)}>
      <div className="container">{children}</div>
    </section>
  );
}

export function Heading1({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1 className={cn("text-3xl lg:text-5xl font-semibold", className)}>
      {children}
    </h1>
  );
}

export function Heading2({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "text-3xl lg:text-[38px] font-semibold leading-10 lg:leading-[56px]",
        className
      )}
    >
      {children}
    </h2>
  );
}
