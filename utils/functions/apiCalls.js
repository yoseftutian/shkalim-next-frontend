import axios from "axios";
const SERVER_URL = "http://localhost:3001";
export async function getAllSpeakers(token) {
  try {
    const response = await fetch(`${SERVER_URL}/products`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function createNewProduct(body, token) {
  try {
    const response = await axios.post(`${SERVER_URL}/products`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
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

export async function deleteProduct(_id, token) {
  try {
    const response = await axios.delete(`${SERVER_URL}/products/${_id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getProductById(_id, token) {
  try {
    const response = await fetch(`${SERVER_URL}/products/${_id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function createTodo(_id, body, token) {
  try {
    const response = await axios.post(`${SERVER_URL}/todos/${_id}`, body, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getAlUserTodos(_id, token) {
  try {
    const response = await fetch(`${SERVER_URL}/todos/${_id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function updateTodoById(_id, token) {
  try {
    const response = await axios.patch(
      `${SERVER_URL}/todos/${_id}`,
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function deleteTodoById(_id, token) {
  try {
    const response = await axios.delete(`${SERVER_URL}/todos/${_id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
