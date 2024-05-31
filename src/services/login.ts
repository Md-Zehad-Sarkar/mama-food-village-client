"use server";

import { FieldValues } from "react-hook-form";
import { setTokenCookies } from "./cookies";

export const userLogin = async (values: FieldValues) => {
  console.log(values);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/login`,
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(values),
      credentials: "include",
    }
  );
  if (!res.ok) {
    throw new Error("Login failed. Please try again");
  }
  const userInfo = await res.json();
  console.log("server userInfo", userInfo);
  const { accessToken } = userInfo.data;
  
  if (accessToken) {
    setTokenCookies(accessToken, { redirect: "/" });
    return userInfo;
  }

  return userInfo;
};
