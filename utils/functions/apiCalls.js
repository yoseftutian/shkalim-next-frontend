import axios from "axios";
const SERVER_URL = "http://localhost:3001";
export async function getAllSpeakers() {
  try {
    const response = await axios.get(`${SERVER_URL}/products`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWYxYjRiYzM0ZGU3MDFkZTQ1ZmI0NWIiLCJpYXQiOjE3MTA4NDg5Njh9.7LB90G1SGP6T4-q9lWU9Tz2Md2QHOzxFtNB10kUfNU0",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function createNewProduct(body) {
  try {
    const response = await axios.post(`${SERVER_URL}/products`, body, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWYxYjRiYzM0ZGU3MDFkZTQ1ZmI0NWIiLCJpYXQiOjE3MTA4NDg5Njh9.7LB90G1SGP6T4-q9lWU9Tz2Md2QHOzxFtNB10kUfNU0",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function login(body) {
  try {
    const response = await axios.post(`${SERVER_URL}/users/login`, body);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function register(body) {
  try {
    const response = await axios.post(`${SERVER_URL}/users/register`, body);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getNews() {
  try {
    const response = await axios.get(
      "https://newsapi.org/v2/everything?q=tesla&from=2024-02-27&sortBy=publishedAt&apiKey=d89bfd384373433c8b801c63ac4f3180"
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}
