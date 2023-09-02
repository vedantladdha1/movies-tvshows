import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3"; // Remove the extra space at the end

const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
  Authorization: "Bearer " + TMDB_TOKEN, // Add a space after "Bearer"
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
