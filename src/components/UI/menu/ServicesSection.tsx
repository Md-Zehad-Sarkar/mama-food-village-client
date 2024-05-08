import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import MopedIcon from "@mui/icons-material/Moped";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const ServicesSection = () => {
  return (
    <Box sx={{ marginTop: 16 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={4} sx={{ height: "200px" }}>
          <Box
            sx={{
              display: "flex",
              gap: 1,
              padding: 1,
              border: "3px solid #D3D3D3",
              borderStyle: "dashed",
              borderRadius: 2,
              ":hover": { border: "3px solid #EEAC00", borderStyle: "dashed" },
              height: "150px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MopedIcon fontSize="large" />
            <Box>
              <Typography component={"h4"} fontWeight={600}>
                Free Shipping
              </Typography>
              <Typography>
                Sign up for updates and get free <br /> shipping
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} lg={4} sx={{ height: "200px" }}>
          <Box
            sx={{
              display: "flex",
              gap: 1,
              padding: 1,
              border: "3px solid #D3D3D3",
              borderStyle: "dashed",
              borderRadius: 2,
              ":hover": { border: "3px solid #EEAC00", borderStyle: "dashed" },
              height: "150px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AccessAlarmIcon fontSize="large" />
            <Box>
              <Typography component={"h4"} fontWeight={600}>
                30 Minutes Delivery
              </Typography>
              <Typography>
                Everything you order will quickly <br /> delivered to your door.
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Box
            sx={{
              display: "flex",
              gap: 1,
              padding: 1,
              border: "3px solid #D3D3D3",
              borderStyle: "dashed",
              borderRadius: 2,
              ":hover": { border: "3px solid #EEAC00", borderStyle: "dashed" },
              height: "150px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TrendingUpIcon fontSize="large" />
            <Box>
              <Typography component={"h4"} fontWeight={600}>
                Best Quality Guarantee
              </Typography>
              <Typography>
                Mama Food Village is an international chain of <br /> family
                restaurants.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ServicesSection;
