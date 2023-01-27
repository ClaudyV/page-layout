import axios from "axios";
import { handleError, handleResponse } from "./responseHandler";

// Get all followers and Results
const getAllFollowersAndResultsService = async (
  page: string,
  pageSize: string,
  keyword: string
) => {
  const headers = {
    Accept: "application/json",
  };
  return axios
    .get(
      process.env.REACT_APP_API_ENDPOINT +
        "/api/users/all?page=" +
        page +
        "&pageSize=" +
        pageSize +
        "&keyword=" +
        keyword,
      {
        headers,
      }
    )
    .then(handleResponse)
    .catch(handleError);
};

// Get all following
const getAllFollowingService = async (page: string, pageSize: string) => {
  const headers = {
    Accept: "application/json",
  };
  return axios
    .get(
      process.env.REACT_APP_API_ENDPOINT +
        "/api/users/friends?page=" +
        page +
        "&pageSize=" +
        pageSize,
      {
        headers,
      }
    )
    .then(handleResponse)
    .catch(handleError);
};

export const apiFriends = {
  getAllFollowersAndResultsService,
  getAllFollowingService,
};
