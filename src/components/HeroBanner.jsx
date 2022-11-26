import React from "react";
import { Box, Typography, Button } from "@mui/material";
import hbi from "../assets/images/banner.png";
const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="28px">
        Flex Brawn
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontsize: { lg: "44px", xs: "40px" } }}
        mt="30px"
        mb="23px"
      >
        Sweat, Smile <br />
        and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" fontFamily="Alegreya">
        Check out the most effective exercises
      </Typography>
      {/* <Button
        variant="contained"
        color="error"
        href="#excercises"
        sx={{ backgroundColor: "#ff2625", padding: "10px" }}
      >
        Explore Exercises
      </Button> */}
      <Typography
        fontWeight={600}
        color="#FF2625"
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
        fontSize="200px"
      >
        Exercise
      </Typography>
      <img src={hbi} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
