import { Box, Container, Typography } from "@mui/material";

const AboutUsPage = () => {
  return (
    <Container>
      <Box>
        <Typography variant="h4" component={"h4"} color={"primary.main"}>
          Welcome!
        </Typography>
        <Typography variant="h3" component={"h3"} fontWeight={600}>
          Best burger ideas <br /> & traditions from <br /> the whole world
        </Typography>
        <Typography variant="h4" component={"p"}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </Typography>
        <Typography variant="h4" component={"p"}>
          Mauris tempus erat laoreet turpis lobortis, eu tincidunt erat
          fermentum. Aliquam non tincidunt urna. Integer tincidunt nec nisl
          vitae ullamcorper. Proin sed ultrices erat.
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutUsPage;
