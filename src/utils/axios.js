import axios from "axios";

// const axiosConfig = {
//   baseURL: "http://localhost:3001",
//   timeout: 30000,
// }

axios.defaults.baseURL = "http://localhost:3001";

axios.interceptors.request.use((config) => {
    // const { token } = store.getState().todos;
    const token = "someToken";
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default axios;
