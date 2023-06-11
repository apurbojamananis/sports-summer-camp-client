import { useQuery } from "react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: allClasses = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/allClasses");
    refetch();
    return res.data;
  });

  return [allClasses, refetch];
};

export default useAllClasses;
