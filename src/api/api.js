import axios from "axios";

const BASE_URL = "https://api.stackexchange.com/2.2/tags";
const SITE = "stackoverflow";

export const fetchTags = async (page, pageSize, sort) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        site: SITE,
        sort,
        page,
        pagesize: pageSize,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
