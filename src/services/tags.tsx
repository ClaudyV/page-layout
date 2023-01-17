import axios from "axios";
import { handleError, handleResponse } from "./responseHandler";

// Get all tags
const getTagsService = async () => {
  const headers = {
    Accept: "application/json",
  };
  return axios
    .get(process.env.REACT_APP_API_ENDPOINT + "/api/tags", {
      headers,
    })
    .then(handleResponse)
    .catch(handleError);
};

export const apiTags = {
  getTagsService,
};
