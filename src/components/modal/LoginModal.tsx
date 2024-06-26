"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Typography } from "@mui/material";
import Link from "next/link";
import { FieldValues } from "react-hook-form";
import MamaForm from "../form/MamaForm";
import MamaInput from "../form/MamaInput";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { userLogin } from "@/services/login";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { decodedUser } from "@/utils/decodedUser";
import { addUserInfo } from "@/redux/features/userSlice";

export default function LoginModal() {
  const [open, setOpen] = React.useState(false);
  const [showPass, setShowPass] = React.useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //  Show Password handler
  const HandleShow = () => {
    setShowPass(!showPass);
  };

  // user login function
  const onSubmit = async (data: FieldValues) => {
    const res = await userLogin(data);
    if (res.success) {
      const userData = decodedUser(res.data.accessToken);
      const { iat, exp, ...users } = userData;
      dispatch(addUserInfo(users));
      router.push("/");
    }
    handleClose();
  };

  return (
    <React.Fragment>
      <Button variant="text" onClick={handleClickOpen}>
        <AccountCircleIcon />
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <MamaForm onSubmit={onSubmit}>
          <DialogTitle>
            <Typography variant="h4" component={"h4"}>
              Please Login <VpnKeyIcon />
            </Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Don&apos;t Have An Account?{" "}
              <Typography
                href={"/sign-up"}
                component={Link}
                sx={{ color: "primary.main" }}
              >
                Sign Up
              </Typography>
            </DialogContentText>

            <MamaInput
              // type="email"
              name="email"
              label="Email Address"
              placeholder="Type Your Email"
              fullWidth={true}
              sx={{ marginTop: "15px" }}
            />
            <MamaInput
              type={showPass ? "text" : "password"}
              name="password"
              label="Password"
              placeholder="Type Your Password"
              fullWidth={true}
              sx={{ marginTop: "15px" }}
            />
            <Typography onClick={HandleShow} component={Button} mt={2}>
              <VpnKeyIcon sx={{ marginRight: 1 }} />{" "}
              {showPass ? "Hide" : "Show"} Password
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Login</Button>
          </DialogActions>
        </MamaForm>
      </Dialog>
    </React.Fragment>
  );
}
