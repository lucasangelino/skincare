// const baseURL = process.env.REACT_APP_API_BASE_URL;
const baseURL = "http://localhost:8080/api/";

export const authRequest = async (url, method, data) => {};

export const Request = async (endpoint, method = "GET", data) => {
  const url = `${baseURL}${endpoint}`;
  if (method === "GET") {
    return await fetch(url);
  }
  const resp = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await resp.json();
};
