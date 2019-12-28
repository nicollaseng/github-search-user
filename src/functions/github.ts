import api from "../api";

import { setUser } from "../actions/github";
import { endpoints } from "../api/endpoints";

const searchGitHubUser = async (user: string) => {
  const response = await api.get(`${endpoints.github}/${user}`);
  setUser(response.data);
};

export { searchGitHubUser };
