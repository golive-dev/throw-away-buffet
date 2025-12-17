import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// Minimal definition for WithElementRef to satisfy Button import
export type WithElementRef<T = HTMLElement> = {
    ref?: T | null;
} & Record<string, unknown>;
