import { useQuery } from "react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useAllClasses = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data: myAllAddedClasses = [], refetch } = useQuery(
    [user?.email],
    async () => {
      const res = await axiosSecure.get(`/allClasses/${user?.email}`);
      return res.data;
    }
  );

  return [myAllAddedClasses, refetch];
};

export default useAllClasses;
