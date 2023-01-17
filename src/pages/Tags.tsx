import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import SingleTags from "../components/Ui/SingleTags";
import { apiTags } from "../services/tags";
import Skeleton from "@mui/material/Skeleton";

const Tags = () => {
  const [tagsList, setTagsList] = useState([]);
  const [loading, setLoading] = useState(false);

  // Get all tags
  const getAllTags = async () => {
    setTagsList([]);
    setLoading(true);
    apiTags.getTagsService().then((response: any) => {
      if (response) {
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
        <Box className="tags-wrapper">
          <Box>
            <Typography className="tags-title">Tags</Typography>
          </Box>
          {!loading ? (
            <Box className="tags-list">
              {tagsList.map((tag: any) => (
                <SingleTags key={tag.id} tag={tag} />
              ))}
            </Box>
          ) : (
            <Box className="tags-list">
              {Array.from(new Array(15)).map((item, index) => (
                <Box key={index}>
                  <Skeleton
                    variant="rectangular"
                    width={"9.375rem"}
                    height={"9.375rem"}
                    sx={{
                      borderRadius: "0.625rem",
                    }}
                  />
                  <Box sx={{ pt: 0.5 }}>
                    <Skeleton width={"9.375rem"} />
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
