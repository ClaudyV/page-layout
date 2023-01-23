import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import UserSection from "../Ui/UserSection";
import { apiFriends } from "../../services/users";
import Skeleton from "@mui/material/Skeleton";
import useInfiniteLoading from "../../utils/infiniteLoading";

const HomeRightSection = ({ setTotalPageSize }: any) => {
  const [tab, setTab] = useState("followers");
  const [allFollowing, setAllFollowing] = useState([]);
  const [followersLoading, setFollowersLoading] = useState(false);
  const [followingLoading, setFollowigLoading] = useState(false);

  const { items, hasMore, loadItems } = useInfiniteLoading({
    getItems: async ({ page }: any) => {
      /* API call */
      setFollowersLoading(true);
      const response = await apiFriends.getAllFollowersAndResultsService(
        page,
        "14",
        ""
      );
      if (response && response.data) {
        setFollowersLoading(false);
        if (response.total) {
          setTotalPageSize(response.total);
        }
        return response;
      } else {
        setFollowersLoading(true);
        return response;
      }
    },
  });

  // Get all following data
  const getAllFollowing = async (page: string, pageSize: string) => {
    setAllFollowing([]);
    setFollowigLoading(true);
    apiFriends.getAllFollowingService(page, pageSize).then((response: any) => {
      if (response && response.data) {
        setAllFollowing(response.data);
      } else {
        return response;
      }
      setFollowigLoading(false);
    });
  };

  useEffect(() => {
    getAllFollowing("1", "14");
  }, []);

  return (
    <Box className="homepage-right-section">
      <Box display={"flex"} flexDirection={"row"}>
        <Box
          className={
            tab === "followers"
              ? "active-tab tab-section"
              : "inactive-tab tab-section"
          }
          onClick={() => setTab("followers")}
        >
          <Typography
            className={tab === "followers" ? "active-title" : "inactive-title"}
          >
            Followers
          </Typography>
        </Box>
        <Box
          className={
            tab === "following"
              ? "active-tab tab-section"
              : "inactive-tab tab-section"
          }
          onClick={() => setTab("following")}
        >
          <Typography
            className={tab === "following" ? "active-title" : "inactive-title"}
          >
            Following
          </Typography>
        </Box>
      </Box>
      <Box
        padding={"2.188rem 1rem"}
        display={"flex"}
        flexDirection={"column"}
        gap={"1.313rem"}
      >
        {tab === "followers" ? (
          <>
            {!followersLoading ? (
              <>
                {items.map((followers: any) => (
                  <UserSection key={followers.id} follower={followers} />
                ))}
              </>
            ) : (
              <>
                {Array.from(new Array(12)).map((item: any, index: number) => (
                  <Skeleton
                    key={index}
                    variant="rounded"
                    width={"100%"}
                    height={"2.812rem"}
                  />
                ))}
              </>
            )}
            {hasMore && (
              <Box
                component={"button"}
                className={"custom-button"}
                onClick={() => loadItems()}
              >
                More
              </Box>
            )}
          </>
        ) : (
          <>
            {!followingLoading ? (
              <>
                {allFollowing.map((following: any) => (
                  <UserSection key={following.id} follower={following} />
                ))}
              </>
            ) : (
              <>
                {Array.from(new Array(12)).map((item: any, index: number) => (
                  <Skeleton
                    key={index}
                    variant="rounded"
                    width={"100%"}
                    height={"2.812rem"}
                  />
                ))}
              </>
            )}
          </>
        )}
      </Box>
    </Box>
  );
};

export default HomeRightSection;
