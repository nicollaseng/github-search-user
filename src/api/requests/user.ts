import api from "../";

import { endpoints } from "../endpoints";

const searchGitHubUser = async (user: string) => {
  const response = await api.get(`${endpoints.github}/${user}`);
  return response.data;
};

export { searchGitHubUser };
