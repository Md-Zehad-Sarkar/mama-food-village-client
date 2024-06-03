import { z } from "zod";
const phoneRegex = new RegExp(/^[+]?[0-9]{10,14}$/);

export const signUpValidation = z.object({
  name: z
    .string({ message: "Name is required" })
    .min(3)
    .max(26, "name can't more then 26 character"),
  email: z
    .string({
      required_error:
        "This is not a valid email.Please try with gmail/yahoo/outlook",
      invalid_type_error:
        "This is not a valid email.Please try with gmail/yahoo/outlook",
    })
    .email("This is not a valid email.Please try with gmail/yahoo/outlook")
    .refine(
      (email) =>
        email.endsWith("@gmail.com") ||
        email.endsWith("@outlook.com") ||
        email.endsWith("@yahoo.com"),
      {
        message: "Email must end with @gmail.com, @outlook.com, or @yahoo.com",
      }
    ),
  password: z
    .string()
    .min(6, "Password must be at least 6 character")
    .max(12, "Password must be at most 12 characters long")
    .regex(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must include at least one special character"
    ),
  contact: z.string().max(11).regex(phoneRegex, "invalid contact number"),
});
