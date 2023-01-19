import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

const SingleResult = ({result}:any) => {
  return (
    <>
      <Box className="single-result-wrapper">
        <Box className="result-img">
          <img className="result-img-rwd" src="/assets/img/dog.svg" loading="lazy" />
        </Box>
        <Box display={"flex"} flexDirection={"column"}>
          <Box>
            <Typography
              fontWeight={"400"}
              fontSize={"0.931rem"}
              lineHeight={"150%"}
              letterSpacing={"0.009rem"}
            >
              This is a title
            </Typography>
          </Box>
          <Box>
            <Typography
              fontWeight={"400"}
              fontSize={"0.698rem"}
              lineHeight={"150%"}
              letterSpacing={"0.023rem"}
              color={"#B2B2B2"}
            >
              by {result.username}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SingleResult;
