import { Box, Container, Grid, Typography } from "@mui/material";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import PlaceIcon from "@mui/icons-material/Place";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Link from "next/link";

const ContactPage = () => {
  return (
    <Container>
      <Box sx={{ marginTop: "30px", marginBottom: "20px" }}>
        <Box>
          <Typography variant="h4" component={"h5"} fontWeight={500}>
            Call us or visit place
          </Typography>
          <Typography variant="h6" component={"h6"} fontWeight={400}>
            Contact with our please call or visit our location/place
          </Typography>
        </Box>

        <Box sx={{ marginTop: "50px" }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box>
                <PhoneIphoneIcon fontSize="large" />
                <Typography fontWeight={600} mt={3}>
                  Phone
                </Typography>
                <Typography>+88012345678</Typography>
                <Typography>+88012345679</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box>
                <PlaceIcon fontSize="large" />
                <Typography fontWeight={600} mt={3}>
                  Location
                </Typography>
                <Typography>Jamuna Future Park,</Typography>
                <Typography>3rd Floor, Dhaka</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box>
                <EmailOutlinedIcon fontSize="large" />
                <Typography fontWeight={600} mt={3}>
                  Email
                </Typography>
                <Typography
                  href={"mailto:mama@food-village.com"}
                  component={Link}
                >
                  mama@food-village.com
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ marginTop: "50px" }}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={12} lg={6}>
              Geo location
            </Grid>
            <Grid item xs={12} md={12} lg={6}>
              <Box>
                <Typography variant="h4" component="h4" fontWeight={600}>
                  Send us a message
                  
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default ContactPage;
