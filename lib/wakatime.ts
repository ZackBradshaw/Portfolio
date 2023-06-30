import axios from 'axios';

const WAKATIME_API_KEY = 'waka_9d79cebd-fc24-4b6f-8d7d-280b1225acaf';
const WAKATIME_API_URL = 'https://wakatime.com/api/v1/users/current/stats/last_7_days';

export async function getWakatimeStats() {
  try {
    const response = await axios.get(WAKATIME_API_URL, {
      headers: {
        'Authorization': `Basic ${Buffer.from(WAKATIME_API_KEY).toString('base64')}`
      }
    });

    if (response.status === 200) {
      return response.data.data;
    } else {
      throw new Error('Unable to fetch Wakatime stats');
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}