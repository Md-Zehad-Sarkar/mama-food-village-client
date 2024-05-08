import MenuData from "@/components/UI/menu/MenuData";
import { menuItemsCommonButton as menusItem } from "@/constant/popularDishesButton";
import CommonItemsMenuButton from "@/utils/CommonItemsMenuButton";
import { Box, Container, Typography } from "@mui/material";

const MenuPage = () => {
  return (
    <Container>
      <Box>
        <Typography
          variant="h4"
          component="h2"
          fontWeight={600}
          textAlign={"center"}
        >
          Menus Of The Day
        </Typography>
        <CommonItemsMenuButton allButton={menusItem} />
        <MenuData />
      </Box>
    </Container>
  );
};

export default MenuPage;
