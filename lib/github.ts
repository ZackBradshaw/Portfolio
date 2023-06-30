import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/users/ZackBradshaw/repos';

export async function getGithubProjects() {
  try {
    const response = await axios.get(GITHUB_API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching Github projects:', error);
    return null;
  }
}