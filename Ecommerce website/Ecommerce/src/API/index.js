const API_URL = "https://fakestoreapi.com";

export const login = async (username, password) => {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const result = await response.json();
    console.log(result);
    return result.token;
  } catch (error) {
    console.error("Error /Login User", error);
  }
};

export const getAllProducts = async () => {
  try {
    const response = await fetch(`${API_URL}/products`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error /GET all products", error);
    throw error;
  }
};

export const getSingleProduct = async (id) => {
  try {
    const response = await fetch(`${API_URL}/products/${id}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("There was an error /GET single product", error);
  }
};

export const getAllUsers = async (username) => {
  try {
    const response = await fetch(`${API_URL}/users`);
    const result = await response.json();
    const userData = result.find((user) => user.username === username);
    return userData;
  } catch (error) {
    console.error("Error fetching all users:", error);
  }
};

export const getUserCart = async(id) => {
  try{
    const response = await fetch(`${API_URL}/carts/${id}`);
    const result = await response.json();
    return result.products;
  } catch (error) {
    console.error("Error /GET Single User", error)
  }
};