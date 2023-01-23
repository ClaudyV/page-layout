import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import SingleTags from "../components/Ui/SingleTags";
import { apiTags } from "../services/tags";
import Skeleton from "@mui/material/Skeleton";
import { useNavigate } from "react-router-dom";

const Tags = () => {
  const [tagsList, setTagsList]: any = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Get all tags
  const getAllTags = async () => {
    setTagsList([]);
    setLoading(true);
    apiTags.getTagsService().then((response: any) => {
      if (response && Array.isArray(response)) {
        setTagsList(response);
      } else {
        return response;
      }
      setLoading(false);
    });
  };

  useEffect(() => {
    getAllTags();
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Tags</title>
      </Helmet>
      <Box className="tags">
        <Box
          className="mobile-top-rwd"
          onClick={() => {
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
        <Box className="tags-wrapper">
          <Box>
            <Typography className="tags-title">Tags</Typography>
          </Box>
          {!loading ? (
            <Box className="tags-list">
              {tagsList?.map((tag: any) => (
                <SingleTags key={tag.id} tag={tag} />
              ))}
            </Box>
          ) : (
            <Box className="tags-list">
              {Array.from(new Array(15)).map((item, index) => (
                <Box key={index}>
                  <Skeleton
                    variant="rectangular"
                    width={"100%"}
                    height={"9.375rem"}
                    sx={{
                      borderRadius: "0.625rem",
                    }}
                  />
                  <Box sx={{ pt: 0.5 }}>
                    <Skeleton width={"100%"} />
                    <Skeleton width="60%" />
                  </Box>
                </Box>
              ))}
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Tags;
