"use client";
import { Input, SxProps, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
  name: string;
  type: string;
  label?: string;
  size?: "small" | "medium";
  variant?: "outlined" | "standard" | "filled";
  fullWidth: boolean;
  sx?: SxProps;
  placeholder?: string;
  required?: boolean;
};

const MamaInput = ({
  name,
  type = "text",
  label,
  variant = "outlined",
  size = "small",
  fullWidth,
  required = false,
  sx,
}: TInputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <>
         
          <TextField
            {...field}
            type={type}
            size={size}
            label={label}
            variant={variant}
            fullWidth={fullWidth}
            required={required}
            placeholder={label}
            sx={sx}
          />
        </>
      )}
    />
  );
};

export default MamaInput;
