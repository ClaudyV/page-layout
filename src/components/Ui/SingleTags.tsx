import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { Tag } from "../../shared/interfaces/tags.interface";

interface TagChild {
  tag: Tag
}

const SingleTags = ({ tag }: TagChild) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={"0.625rem"}
      width={"150px"}
    >
      <Box
        sx={{
          display: "flex",
          background: "rgba(255, 255, 255, 0.06)",
          width: "9.375rem",
          height: "9.375rem",
          borderRadius: "0.625rem",
          padding: "0.75rem",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <Box>
          <Typography
            component={"span"}
            sx={{ fontWeight: "700", fontSize: "1.5rem", lineHeight: "150%" }}
            borderColor={"#ffffff"}
            borderRadius={"0.5rem"}
            border={"0.25rem solid"}
            padding={"6px 12px"}
            display={"block"}
            width={"max-content"}
          >
            {tag.name.length > 9
              ? tag.name.substring(0, 5).concat("...")
              : tag.name}
          </Typography>
        </Box>
      </Box>
      <Box width={"100%"}>
        <Box>
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: "0.931rem",
              lineHeight: "150%",
              letterSpacing: "0.009rem",
            }}
          >
            {tag.name.length > 10
              ? tag.name.substring(0, 16).concat("...")
              : tag.name}
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: "0.698rem",
              lineHeight: "150%",
              letterSpacing: "0.023rem",
              color: "#B2B2B2",
            }}
          >
            {tag.count + " " + (tag.count === 1 ? "Result" : "Results")}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SingleTags;
