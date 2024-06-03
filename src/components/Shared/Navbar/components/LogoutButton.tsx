import { removeUserInfo } from "@/redux/features/userSlice";
import { useAppDispatch } from "@/redux/hooks";
import { deleteTokenCookies } from "@/services/cookies";
import { Button } from "@mui/material";

const LogoutButton = () => {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    deleteTokenCookies();
    dispatch(removeUserInfo());
  };
  return <Button onClick={handleLogout}>Logout</Button>;
};

export default LogoutButton;
