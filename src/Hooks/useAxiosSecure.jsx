import axios from "axios";

const axiosSecure = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "https://sports-summer-camp-server-two.vercel.app/",
});

const useAxiosSecure = () => {
  return [axiosSecure];
};

export default useAxiosSecure;
