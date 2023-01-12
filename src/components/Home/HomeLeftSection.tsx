import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

// Custom style for Page size Slider
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

const HomeLeftSection = () => {
  const [pageSize, setPageSize] = useState<number>(30);
  const [isResultPage, setIsResultPage] = useState(false);

  // Measurements for the Slider
  const measurements = [
    {
      value: 1,
      label: "1",
    },
    {
      value: 10,
      label: "10",
    },
    {
      value: 20,
      label: "20",
    },
    {
      value: 30,
      label: "30",
    },
    {
      value: 40,
      label: "40",
    },
    {
      value: 50,
      label: "50",
    },
  ];

  // Event on Slider Change
  const handlePageSizeChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      setPageSize(newValue);
    }
  };

  return (
    <>
      {!isResultPage ? (
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={"1.875rem"}
          className="homepage-left-section homepage-wrapper"
          justifyContent={"space-between"}
        >
          <Box display={"flex"} flexDirection={"column"} gap={"1.875rem"}>
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
                    InputProps={{
                      style: {
                        height: "3.73rem",
                      },
                    }}
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
              <Box className="mobile-divider">
                <Divider
                  sx={{ border: "1px solid rgba(255, 255, 255, 0.1)" }}
                />
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
                    # Of Results Per Page
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
                    {pageSize}
                  </Box>
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    paddingTop={"1.4rem"}
                  >
                    <Typography>
                      {pageSize === 1 ? "result" : "results"}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box>
                <PageSize
                  value={pageSize}
                  onChange={handlePageSizeChange}
                  aria-label="pretto slider"
                  max={50}
                  min={1}
                />

                <Box
                  display={"flex"}
                  flexDirection={"row"}
                  justifyContent={"space-between"}
                >
                  {measurements.map((item, index) => (
                    <Typography key={index}>{item.value}</Typography>
                  ))}
                </Box>
              </Box>
              <Box className="mobile-divider">
                <Divider
                  sx={{ border: "1px solid rgba(255, 255, 255, 0.1)" }}
                />
              </Box>
            </Box>
          </Box>

          <Box className={"search-section"}>
            <Box
              component={"button"}
              className={"custom-button"}
              onClick={() => setIsResultPage(true)}
            >
              Search
            </Box>
          </Box>
        </Box>
      ) : (
        <>
          <Box className="homepage-left-section result-wrapper">
            <Box className="result-top" onClick={() => setIsResultPage(false)}>
                <Box display={'flex'} alignItems={'center'}>
                <img src="/assets/img/arrow-back.svg" />
                </Box>
                <Box>
                    <Typography className="results-title">
                        Results
                    </Typography>
                </Box>
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

export default HomeLeftSection;
