import Box from "@mui/material/Box";
import { Helmet } from "react-helmet-async";
import HomeLeftSection from "../components/Home/HomeLeftSection";
import HomeRightSection from "../components/Home/HomeRightSection";
import { useState } from "react";

const Home = () => {
  const [totalPageSize, setTotalPageSize] = useState(1);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Homepage</title>
      </Helmet>

      {/* Homepage Wrapper */}
      <Box display={"flex"} flexDirection={"row"} gap={"8.125rem"}>
        {/* Homepage Left Section */}
        <HomeLeftSection totalPageSize={totalPageSize} />

        {/* Homepage Right Section */}
        <HomeRightSection setTotalPageSize={setTotalPageSize} />
      </Box>
    </>
  );
};

export default Home;
