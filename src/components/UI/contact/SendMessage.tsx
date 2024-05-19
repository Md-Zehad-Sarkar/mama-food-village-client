"use client";
// import MamaForm from "@/components/form/MamaForm";
// import MamaInput from "@/components/form/MamaInput";
import { Button } from "@mui/material";
import dynamic from "next/dynamic";
// import MamaMultilineTextField from "@/components/form/MamaMultilineTextField";
import { FieldValues } from "react-hook-form";

const MamaMultilineTextField = dynamic(
  () => import("@/components/form/MamaMultilineTextField")
);
const MamaForm = dynamic(() => import("@/components/form/MamaForm"));
const MamaInput = dynamic(() => import("@/components/form/MamaInput"));

const SendMessage = () => {
  const onSubmit = (data: FieldValues) => {
    console.log("data", data);
  };
  return (
    <MamaForm onSubmit={onSubmit}>
      <MamaInput
        name="name"
        type="text"
        label="Name"
        fullWidth={true}
        sx={{ marginBottom: "10px", padding: "5px" }}
      />
      <MamaInput
        name="email"
        type="email"
        label="Email"
        fullWidth={true}
        sx={{ marginBottom: "10px", padding: "5px" }}
      />
      <MamaInput
        name="subject"
        type="text"
        label="Subject"
        fullWidth={true}
        sx={{ marginBottom: "10px", padding: "5px" }}
      />
      <MamaMultilineTextField
        name="message"
        label={"Message"}
        fullWidth={true}
        maxRows={20}
      />
      <Button type="submit" sx={{ marginTop: "10px", marginLeft: "1px" }}>
        Submit
      </Button>
    </MamaForm>
  );
};

export default SendMessage;
