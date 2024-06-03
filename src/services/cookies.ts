"use server";
import { cookies } from "next/headers";

export const setTokenCookies = (token: string) => {
  cookies().set("accessToken", token);
};
