"use server";

import { FieldValues } from "react-hook-form";

export const signUpUser = async (values: FieldValues) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/sign-up-user`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(values),
      }
    );
    if (!res?.ok) {
      throw new Error("Something went wrong");
    }
    const result = await res.json();
    if (!result?.success) {
      throw new Error("Sign up failed");
    }
    console.log("result result....", result);
    const { data, ...restData } = result;
    return restData;
  
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      return { success: false, message: error.message };
    } else {
      return { success: false, message: "An unknown error occurred" };
    }
  }
};
