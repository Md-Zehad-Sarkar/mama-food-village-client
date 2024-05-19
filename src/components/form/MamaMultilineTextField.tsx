"use client";
import { Box, SxProps, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TMultilineTextProps = {
  name: string;
  label?: string;
  fullWidth?: boolean;
  placeholder?: string;
  maxRows: number;
  sx?: SxProps;
};

const MamaMultilineTextField = ({
  name,
  label,
  fullWidth = false,
  maxRows = 10,
  sx,
}: TMultilineTextProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          fullWidth={fullWidth}
          label={label}
          placeholder={label}
          multiline
          maxRows={maxRows}
          style={{ maxWidth: "100%" }}
          sx={sx}
        />
      )}
    />
  );
};

export default MamaMultilineTextField;
