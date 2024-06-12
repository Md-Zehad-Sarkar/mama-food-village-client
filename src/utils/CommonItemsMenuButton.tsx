import { Button, Stack } from "@mui/material";

type TCommonItemsMenuButtonProps = {
  allButton: string[];
  onSelect: (category: string) => void;
};

const CommonItemsMenuButton = ({
  allButton,
  onSelect,
}: TCommonItemsMenuButtonProps) => {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={3}
      my={4}
      justifyContent="center"
      alignItems={"center"}
    >
      {allButton.map((button: string, i: any) => (
        <Button
          key={i}
          variant="outlined"
          sx={{
            borderRadius: "20px",
            padding: "15px",
            width: "120px",
            fontWeight: 400,
            letterSpacing: 2,
            color: "black",
            ":hover": { bgcolor: "primary.main" },
          }}
          onClick={() => onSelect(button)}
        >
          {button}
          {/* <Link href={`/menu/${button.toLowerCase()}`}>{button}</Link> */}
        </Button>
      ))}
    </Stack>
  );
};

export default CommonItemsMenuButton;
