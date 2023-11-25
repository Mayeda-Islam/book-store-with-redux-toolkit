import axios from "../../utilities/axios";

export const getVideos = async () => {
  const response = await axios.get("/videos");
  console.log(response);
  return response.data;
};
