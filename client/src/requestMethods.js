import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDJhZTBhMmFmZGE2Nzc0MDJlNzY4YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NTUwODU5OCwiZXhwIjoxNjY1NzY3Nzk4fQ.znL3aAcXAZpeHjGOkD3GIveKVP-KHhnimZeSOk5fdWo";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
