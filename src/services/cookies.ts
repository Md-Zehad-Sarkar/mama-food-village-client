"use server";
import { cookies } from "next/headers";

export const setTokenCookies = (token: string) => {
  cookies().set("accessToken", token);
};

export const getTokenCookies = async () => {
  const accessToken = cookies().get("accessToken");
  return accessToken;
};

export const deleteTokenCookies = () => {
  cookies().delete("accessToken");
};
