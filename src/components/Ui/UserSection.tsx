import { Avatar, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { User } from "../../shared/interfaces/user.interface";

interface UserChild {
  follower: User;
}

const UserSection = ({ follower }: UserChild) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"space-between"}
    >
      <Box display={"flex"} flexDirection={"row"} gap={"0.938rem"}>
        <Box>
          <Avatar
            sx={{
              background: "transparent",
              color: "#ffffff",
              border: "0.063rem solid #F8F8F8",
              borderRadius: "0.313rem",
              width: "2.5rem",
              height: "2.5rem",
            }}
            alt={follower.name}
            src={follower.avater}
          />
        </Box>
        <Box display={"flex"} flexDirection={"column"}>
          <Box display={"flex"} justifyContent={"flex-start"}>
            <Typography
              fontWeight={"400"}
              fontSize={"1rem"}
              lineHeight={"150%"}
              letterSpacing={"0.009rem"}
              marginTop={"-0.25px"}
              marginBottom={"-0.25px"}
            >
              {follower.name}
            </Typography>
          </Box>
          <Box>
            <Typography
              fontWeight={"400"}
              fontSize={"0.875rem"}
              lineHeight={"150%"}
              letterSpacing={"0.016rem"}
              color={"rgba(255, 255, 255, 0.5)"}
            >
              @{follower.username}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box display={"flex"} alignItems={"center"}>
        <Box>
          <Box
            component={"button"}
            className={
              follower.isFollowing ? "following-button" : "follow-button"
            }
          >
            {follower.isFollowing ? "Following" : "Follow"}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default UserSection;
