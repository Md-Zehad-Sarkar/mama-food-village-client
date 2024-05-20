"use client";
import MamaForm from "@/components/form/MamaForm";
import MamaInput from "@/components/form/MamaInput";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { FieldValues } from "react-hook-form";
import { loginBgImage } from "@/constant/popularDishesButton";
import registerImage from "@/assets/register.png";

const SignUpPage = () => {
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: { xs: "none", md: "none", lg: "block" } }}>
            <Image
              src={registerImage}
              alt="Register Image"
              width={500}
              height={500}
              style={{
                width: "500px",
                height: "500px",
                margin: "auto",
              }}
            />
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box>
            <Image
              src={loginBgImage}
              alt="Food Image"
              width={500}
              height={600}
              style={{
                width: "800px",
                height: "500px",
                margin: "auto",
                position: "relative",
                color: "white",
                borderRadius: "10px",
              }}
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "60px",
              right: { xs: "50px", lg: "120px" },
              color: "white",
              margin: "auto",
            }}
          >
            <Typography
              variant="h4"
              component={"h4"}
              textAlign={"center"}
              sx={{ marginTop: "20px", marginBottom: "30px" }}
            >
              Sign Up{" "}
              <Typography
                variant="h4"
                component={"span"}
                sx={{ color: "primary.main" }}
              >
                Mama Food Village!
              </Typography>
            </Typography>
            <MamaForm
              onSubmit={onSubmit}
              style={{
                maxWidth: "350px",
                width: "100%",
                margin: "auto",
              }}
            >
              <MamaInput
                type="text"
                name="name"
                label="Full Name"
                placeholder="Type Your Full Name"
                fullWidth={true}
                variant="outlined"
                sx={{ marginBottom: 2 }}
              />
              <MamaInput
                type="email"
                name="email"
                label="Email Address"
                placeholder="Type Your Email Address"
                fullWidth={true}
                sx={{ marginBottom: 2 }}
              />
              <MamaInput
                type="text"
                name="password"
                label="Password"
                placeholder="Type Password"
                fullWidth={true}
                sx={{ marginBottom: 2 }}
              />
              <MamaInput
                type="text"
                name="contact"
                label="Contact No"
                placeholder="Type Valid Contact No"
                fullWidth={true}
                sx={{ marginBottom: 2 }}
              />
              <Button type="submit" variant="contained" sx={{ color: "white" }}>
                Sign Up
              </Button>
            </MamaForm>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignUpPage;
