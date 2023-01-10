import { Divider, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { Helmet } from "react-helmet-async";
import TextField from "@mui/material/TextField";
import NavBar from "../components/NavBar";
import Slider, {
  SliderThumb,
  SliderValueLabelProps,
} from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

const Home = () => {
  const PageSize = styled(Slider)({
    color: "rgba(255, 255, 255, 0.3)",
    height: 8,
    "& .MuiSlider-track": {
      border: "none",
      background: "linear-gradient(270deg, #FFD25F 0.13%, #FF5C01 100%)",
    },
    "& .MuiSlider-thumb": {
      height: 24,
      width: 24,
      backgroundColor: "#1B1B1B",
      border: "6px solid #FFD25F",
      "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
        boxShadow: "inherit",
      },
      "&:before": {
        display: "none",
      },
    },
    "& .MuiSlider-valueLabel": {
      lineHeight: 1.2,
      fontSize: 12,
      background: "unset",
      padding: 0,
      width: 32,
      height: 32,
      borderRadius: "50% 50% 50% 0",
      backgroundColor: "#52af77",
      transformOrigin: "bottom left",
      transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
      "&:before": { display: "none" },
      "&.MuiSlider-valueLabelOpen": {
        transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
      },
      "& > *": {
        transform: "rotate(45deg)",
      },
    },
  });

  const marks = [
    {
      value: 3,
      label: "3",
    },
    {
      value: 6,
      label: "6",
    },
    {
      value: 9,
      label: "9",
    },
    {
      value: 12,
      label: "12",
    },
    {
      value: 15,
      label: "15",
    },
    {
      value: 50,
      label: "50",
    },
  ];

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
        className={"homepage-wrapper"}
      >
        {/* Homepage Left Section */}
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={"1.875rem"}
          className="homepage-left-section"
        >
          <Box display={"flex"} flexDirection={"column"} gap={"1.875rem"}>
            <Box display={"flex"} flexDirection={"column"} gap={"1.25rem"}>
              <Box className="search-field">
                <Typography
                  variant="h1"
                  fontSize={"1.5rem"}
                  fontWeight={"400"}
                  lineHeight={"150%"}
                >
                  Search
                </Typography>
              </Box>
              <Box>
                <TextField
                  sx={{
                    "&:hover fieldset": {
                      borderColor: "rgba(255, 255, 255, 0.5) !important",
                    },
                  }}
                  className="search-input"
                  fullWidth
                  placeholder="Keyword"
                  id="fullWidth"
                />
              </Box>
            </Box>
            <Box>
              <Divider sx={{ border: "1px solid rgba(255, 255, 255, 0.1)" }} />
            </Box>
          </Box>

          <Box display={"flex"} flexDirection={"column"} gap={"1.875rem"}>
            <Box display={"flex"} flexDirection={"column"} gap={"1.25rem"}>
              <Box>
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: "1.5rem",
                    lineHeight: "150%",
                  }}
                >
                  # Of results Per Page
                </Typography>
              </Box>
              <Box display={"flex"} gap={"0.625rem"}>
                <Box
                  display={"flex"}
                  alignItems={"flex-end"}
                  sx={{
                    fontWeight: "700",
                    fontSize: "3rem",
                    lineHeight: "150%",
                  }}
                >
                  30
                </Box>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  paddingTop={"1.4rem"}
                >
                  <Typography>results</Typography>
                </Box>
              </Box>
            </Box>
            <Box>
              <PageSize
                //valueLabelDisplay="false"
                aria-label="pretto slider"
                defaultValue={6}
                max={50}
                min={3}
                step={3}
              />
              <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
                  {marks.map((item, index)=> (
                    <Typography>
                      {item.value}
                    </Typography>
                  ))}
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Homepage Right Section */}
        <Box className="homepage-right-section"></Box>
      </Box>
      <NavBar />
    </>
  );
};

export default Home;
