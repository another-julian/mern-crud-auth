import { z } from "zod";

export const registerScheme = z.object({
  username: z.string({
    required_error: "username is required",
  }),
  email: z
    .string({
      required_error: "email is required",
    })
    .email({
      message: "invalid email",
    }),
  password: z
    .string({
      required_error: "password required",
    })
    .min(8, {
      message: "password must be at least 8 characters",
    }),
});

export const loginSchema = z.object({
  email: z
    .string({
      required_error: "email is required",
    })
    .email({
      message: "invalid email",
    }),
  password: z.string({
    required_error: "password is required",
  }),
});
