import { z } from "zod";

const requiresString = z.string().trim().min(1, "Required")

export const signUpSchema = z.object({
    email: requiresString.email("invalid email address"), 
    username: requiresString.regex(
        /^[a-zA-Z0-9_-]+$/,
        "Only letters, numbers, - and _ allows"
    ), 
    password: requiresString.min(8, "Must be ad least 8 characters"),
});

export type TSignUpValues = z.infer<typeof signUpSchema>

export const loginSchema = z.object({
    username: requiresString,
    password: requiresString,
}); 

export type TLoginValues = z.infer<typeof loginSchema>