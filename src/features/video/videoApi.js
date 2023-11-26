import axios from "../../utilities/axios";

export const getVideo = async (id) => {
  const response = await axios.get(`/videos/${id}`);
  console.log(response);
  return response.data;
};
