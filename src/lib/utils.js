import { toast } from "@/hooks/use-toast";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const fLname = (fullName = "Jon Deo") => {
  return fullName
    .split(" ")
    .map((n) => n[0])
    .join("");
};

export const showToast = (message, type = "success") => {
  toast({
    description: message,
    className: `fixed top-4 w-[250px] right-4 ${
      type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"
    }`,
  });
};
