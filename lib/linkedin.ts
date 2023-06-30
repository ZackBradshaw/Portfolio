import axios from 'axios';

const LINKEDIN_URL = 'https://www.linkedin.com/in/zack-bradshaw-54898b18a/';

export async function getLinkedinProfile() {
  try {
    const response = await axios.get(LINKEDIN_URL);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch Linkedin profile: ${error}`);
  }
}