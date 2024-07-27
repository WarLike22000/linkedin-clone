import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "./button";
import { Loader2 } from "lucide-react";

const LoadingButton = ({ disabled, className, ...props }: ButtonProps) => {
  return (
    <Button
      disabled={disabled}
      className={cn("flex items-center gap-2", className)}
    >
      {disabled && <Loader2 className="size-5 animate-spin" />}
      {props.children}
    </Button>
  );
};

export default LoadingButton;
