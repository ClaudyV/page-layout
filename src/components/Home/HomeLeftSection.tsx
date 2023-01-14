import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import SingleResult from "../Ui/SingleResult";
import Skeleton from "@mui/material/Skeleton";
import { apiFriends } from "../../services/users";

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

const HomeLeftSection = ({ totalPageSize }: any) => {
  const [pageSize, setPageSize] = useState<number>(30);
  const [isResultPage, setIsResultPage] = useState(false);
  const [allResults, setAllResults] = useState([]);
  const [resultsLaoding, setResultLoading] = useState(false);
  const [keyword, setKeyword] = useState("");

  // Measurements for the Slider
  const measurements = (total: number) => {
    let sliderNumbers = [];
    for (let i = 0; i <= total; i += 10) {
      sliderNumbers.push({ value: i === 0 ? 1 : i });
    }
    return sliderNumbers;
  };

  // Event on Slider Change
  const handlePageSizeChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      setPageSize(newValue);
    }
  };

  // Event on keyword typing
  const handleKeywordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  // Search Results
  const searchResults = () => {
    getAllResults("1", pageSize.toString(), keyword);
  };

  // Get all results
  const getAllResults = async (
    page: string,
    pageSize: string,
    keyword: string
  ) => {
    setAllResults([]);
    setResultLoading(true);
    apiFriends
      .getAllFollowersAndResultsService(page, pageSize, keyword)
      .then((response: any) => {
        if (response && response.data) {
          setAllResults(response.data);
        } else {
          return response;
        }
        setResultLoading(false);
      });
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
                    value={keyword}
                    onChange={handleKeywordChange}
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

              {totalPageSize === 1 ? (
                <Skeleton
                  variant="rounded"
                  width={"100%"}
                  height={"4.044rem"}
                />
              ) : (
                <Box>
                  <PageSize
                    value={pageSize}
                    onChange={handlePageSizeChange}
                    aria-label="pretto slider"
                    max={totalPageSize}
                    min={1}
                  />

                  <Box
                    display={"flex"}
                    flexDirection={"row"}
                    justifyContent={"space-between"}
                  >
                    {measurements(totalPageSize).map((item: any, index) => (
                      <Typography key={index}>{item.value}</Typography>
                    ))}
                  </Box>
                </Box>
              )}

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
              onClick={() => {
                setIsResultPage(true);
                searchResults();
              }}
            >
              Search
            </Box>
          </Box>
        </Box>
      ) : (
        <>
          <Box className="homepage-left-section result-wrapper">
            <Box className="result-top" onClick={() => setIsResultPage(false)}>
              <Box display={"flex"} alignItems={"center"}>
                <img src="/assets/img/arrow-back.svg" />
              </Box>
              <Box>
                <Typography className="results-title">Results</Typography>
              </Box>
            </Box>
            {!resultsLaoding ? (
              <Box
                className={
                  allResults.length > 9
                    ? "result-overflow result-layout"
                    : "result-layout"
                }
              >
                {allResults.map((result, index) => (
                  <SingleResult key={index} result={result} />
                ))}
              </Box>
            ) : (
              <>
                <Box className="result-layout">
                  {Array.from(new Array(9)).map((item, index) => (
                    <Box key={index}>
                      <Skeleton
                     
                        variant="rectangular"
                        width={"13.688rem"}
                        height={"9.125rem"}
                      />{" "}
                      <Box sx={{ pt: 0.5 }}>
                        <Skeleton width={"13.688rem"}/>
                        <Skeleton width="60%" />
                      </Box>
                    </Box>
                  ))}
                </Box>
              </>
            )}
          </Box>
        </>
      )}
    </>
  );
};

export default HomeLeftSection;
