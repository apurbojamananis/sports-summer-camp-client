import { useQuery } from "react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: allApprovedClasses = [], refetch } = useQuery(
    ["users"],
    async () => {
      const res = await axiosSecure.get("/allApprovedClasses");
      refetch();
      return res.data;
    }
  );

  return [allApprovedClasses, refetch];
};

export default useAllClasses;
