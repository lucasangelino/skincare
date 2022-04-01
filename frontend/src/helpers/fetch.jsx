// const baseURL = process.env.REACT_APP_API_BASE_URL;
const baseURL = "http://localhost:8080/api/";

export const Request = async (endpoint, data, method = "GET") => {
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

export const AuthRequest = async (endpoint, data, method = "GET") => {
  const url = `${baseURL}${endpoint}`;
  const token = localStorage.getItem("token") || "";
  if (method === "GET") {
    const resp = await fetch(url, {
      headers: {
        "x-token": token,
      },
    });
    return await resp.json();
  }
  const resp = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      "x-token": localStorage.getItem("token"),
    },
  });
  return await resp.json();
};
