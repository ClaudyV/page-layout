import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SingleResult from "../components/Ui/SingleResult";
import { apiFriends } from "../services/users";
import { useLocation } from "react-router-dom";
import useInfiniteLoading from "../utils/infiniteLoading";
import { useDispatch } from "react-redux";
import useMediaQuery from "@mui/material/useMediaQuery";
import { setResultPage } from "../features/resultLayout";

const Results = () => {
  const dispatch = useDispatch();
  const matches = useMediaQuery("(max-width:599px)");
  const navigate = useNavigate();
  const location = useLocation();
  const [resultsLaoding, setResultLoading] = useState(false);
  const { items, hasMore, loadItems } = useInfiniteLoading({
    getItems: async ({ page }: any) => {
      /* API call */
      setResultLoading(true);
      const response = await apiFriends.getAllFollowersAndResultsService(
        page,
        location.state?.pageSize ? location.state?.pageSize : '9',
        location.state?.keyword ? location.state?.keyword : ''
      );
      if (response && response.data) {
        setResultLoading(false);
        return response;
      } else {
        setResultLoading(false);
        return response;
      }
    },
  });

  return (
    <>
      <Box className="homepage-left-section result-wrapper">
        <Box
          className="mobile-top-rwd"
          onClick={() => {
            dispatch(setResultPage({ showResultPage: false }));
            navigate("/");
          }}
        >
          <Box display={"flex"} alignItems={"center"}>
            <img
              className="mobile-top-rwd-img"
              src="/assets/img/arrow-back.svg"
            />
          </Box>
          <Box>
            <Typography className="mobile-top-rwd-title">Home Page</Typography>
          </Box>
        </Box>
        <Box
          className="result-top"
          onClick={() => {
            dispatch(setResultPage({ showResultPage: false }));
            navigate("/");
          }}
        >
          {!matches && (
            <Box display={"flex"} alignItems={"center"}>
              <img src="/assets/img/arrow-back.svg" />
            </Box>
          )}
          <Box>
            <Typography className="results-title">Results</Typography>
          </Box>
        </Box>
        {!resultsLaoding ? (
          <Box className={"result-layout"}>
            <Box className="result-list">
              {items.map((result: any, index: any) => (
                <SingleResult key={index} result={result} />
              ))}
            </Box>
            <Box className={"more-section"}>
              {hasMore && (
                <Box
                  component={"button"}
                  className={"custom-button"}
                  onClick={() => loadItems()}
                >
                  More
                </Box>
              )}
            </Box>
          </Box>
        ) : (
          <>
            <Box className="result-layout result-list">
              {Array.from(new Array(9)).map((item, index) => (
                <Box key={index}>
                  <Skeleton
                    variant="rectangular"
                    width={"100%"}
                    height={"9.125rem"}
                  />{" "}
                  <Box sx={{ pt: 0.5 }}>
                    <Skeleton width={"100%"} />
                    <Skeleton width="60%" />
                  </Box>
                </Box>
              ))}
            </Box>
          </>
        )}
      </Box>
    </>
  );
};

export default Results;
