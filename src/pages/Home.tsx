import Box from "@mui/material/Box";
import { Helmet } from "react-helmet-async";
import NavBar from "../components/Ui/NavBar";
import HomeLeftSection from "../components/Home/HomeLeftSection";
import HomeRightSection from "../components/Home/HomeRightSection";
import { useState } from "react";

const Home = () => {
  const [totalPageSize, setTotalPageSize] = useState(1)
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Homepage</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      {/* Logo */}
      <Box
        sx={{
          fontWeight: 700,
          fontSize: "0.813rem",
          lineHeight: "0.938rem",
          letterSpacing: "-0.05em",
          background: "linear-gradient(270deg, #FFD25F 82%, #FF5C01 93%)",
          webkitBackgroundClip: "text",
          webkitTextFillColor: "transparent",
          backgroundClip: "text",
          textFillColor: "transparent",
          paddingTop: "1.75rem",
          paddingBottom: "1.688rem",
          paddingLeft: "1.313rem",
          paddingRight: "1.313rem",
          width: "100%",
          mr: 2,
          display: { sm: "none" },
        }}
      >
        LOGO
      </Box>

      {/* Homepage Wrapper */}
      <Box
        display={"flex"}
        flexDirection={"row"}
        gap={"8.125rem"}
        
      >
        {/* Homepage Left Section */}
        <HomeLeftSection totalPageSize={totalPageSize}/>

        {/* Homepage Right Section */}
        <HomeRightSection getTotalPageSize={setTotalPageSize}/>
      </Box>
      <NavBar />
    </>
  );
};

export default Home;
