import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Skeleton from "@mui/material/Skeleton";
import { useNavigate } from "react-router-dom";
import Results from "../../pages/Results";
import useMediaQuery from "@mui/material/useMediaQuery";
import NavBar from "../Ui/NavBar";
import { setResultPage } from "../../features/ResultLayout";
import { PageSize } from "../Ui/PageSize";
import { useAppSelector, useAppDispatch } from "../../hooks/Hook";

interface HomeLeftSectionProps {
  totalPageSize: number;
}

const HomeLeftSection = ({ totalPageSize }: HomeLeftSectionProps) => {
  const isShowResultPage = useAppSelector((state) => state.layout.value);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [pageSize, setPageSize] = useState<number>(30);
  const [keyword, setKeyword] = useState("");
  const matches = useMediaQuery("(max-width:399px)");

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
    navigate(`/?page=1&keyword=${keyword}&pageSize=${pageSize}`, {
      state: { keyword, pageSize },
    });
  };

  return (
    <>
      {!isShowResultPage ? (
        <>
          <Box
            display={"flex"}
            flexDirection={"column"}
            className="homepage-left-section"
          >
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
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={"1.875rem"}
              className="homepage-left homepage-wrapper"
              justifyContent={"space-between"}
            >
              <Box
                display={"flex"}
                flexDirection={"column"}
                className={"search-wrapper-rwd"}
              >
                <Box display={"flex"} flexDirection={"column"} gap={"1.875rem"}>
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    className={"search-rwd"}
                  >
                    <Box className="search-field">
                      <Typography
                        variant="h1"
                        fontWeight={"400"}
                        lineHeight={"150%"}
                        className="search-title"
                      >
                        Search
                      </Typography>
                    </Box>
                    <Box>
                      <TextField
                        InputProps={{
                          style: {
                            height: matches ? "3rem" : "3.73rem",
                          },
                        }}
                        sx={{
                          "&:hover fieldset": {
                            borderColor: "rgba(255, 255, 255, 0.5) !important",
                          },
                          "&:-webkit-autofill": {
                            WebkitBoxShadow: "0 0 0 1000px red inset",
                            backgroundColor: "#fafafa !important;",
                            backgroundClip: "content-box !important",
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

                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  className={"results-perpagewrapper-rwd"}
                >
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    className={"results-perpage-rwd"}
                  >
                    <Box>
                      <Typography
                        sx={{
                          fontWeight: "400",
                          fontSize: matches ? "1rem" : "1.5rem",
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
                          fontSize: matches ? "2rem" : "3rem",
                          lineHeight: "150%",
                        }}
                      >
                        {pageSize}
                      </Box>
                      <Box
                        display={"flex"}
                        alignItems={"center"}
                        paddingTop={matches ? "0.6rem" : "1.4rem"}
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
                        {measurements(totalPageSize).map((item) => (
                          <Typography key={item.value}>{item.value}</Typography>
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
                <Box className="mobile-divider-rwd">
                  <Divider
                    sx={{ border: "1px solid rgba(255, 255, 255, 0.1)" }}
                  />
                </Box>
                <Box
                  component={"button"}
                  className={"custom-button"}
                  onClick={() => {
                    dispatch(setResultPage(true));
                    searchResults();
                  }}
                >
                  Search
                </Box>
              </Box>
            </Box>
          </Box>
          <NavBar />
        </>
      ) : (
        <Results />
      )}
    </>
  );
};

export default HomeLeftSection;
