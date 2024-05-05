import { Box, Button, Card, Stack, Typography } from "@mui/material";
import Image from "next/image";
import burger from "@/assets/images/categories/category-1.png";

const OffersCard = () => {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      justifyContent="space-between"
      spacing={2}
    >
      <Box>
        <Card>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: 4,
              gap: 4,
            }}
          >
            <Box>
              <Typography variant="h5" sx={{ font: "22px", fontWeight: 600 }}>
                Any day offers
              </Typography>
              <Typography sx={{ font: "18px", mt: 2, mb: 1 }}>
                NEW PHENOMENON <br /> BURGER TASTE
              </Typography>
              <Typography variant="h6" component="h6" color={'primary.main'}>
                $12.90
              </Typography>
            </Box>
            <Image src={burger} alt="burger image" width={100} height={80} />
          </Box>
        </Card>
      </Box>
      <Box>
        <Card sx={{ backgroundColor: "green" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: 4,
              gap: 4,
            }}
          >
            <Box>
              <Typography
                variant="h5"
                sx={{ font: "22px", fontWeight: 600, color: "white" }}
              >
                Other flavors
              </Typography>
              <Typography sx={{ font: "18px", mt: 2, mb: 1, color: "white" }}>
                SAVE ROOM. <br /> WE MADE SALATS
              </Typography>
              <Typography variant="h6" component="h6" color="primary.main">
                $15.99
              </Typography>
            </Box>
            <Image src={burger} alt="burger image" width={100} height={80} />
          </Box>
        </Card>
      </Box>
      <Box>
        <Card>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: 4,
              gap: 4,
            }}
          >
            <Box>
              <Typography variant="h5" sx={{ font: "22px", fontWeight: 600 }}>
                Find a mama <br /> store <br /> near you
              </Typography>
              <Button
                sx={{
                  color: "primary.main",
                  fontWeight: 600,
                  ":hover": { color: "black" },
                }}
              >
                CONTACT US
              </Button>
            </Box>
            <Image src={burger} alt="burger image" width={100} height={80} />
          </Box>
        </Card>
      </Box>
    </Stack>
  );
};

export default OffersCard;
