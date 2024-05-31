"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const setTokenCookies = (token: string, option?: any) => {
  cookies().set("accessToken", token);
  if (option && option.redirect) {
    redirect(option.redirect);
  }
};
