import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

import { useQuery } from "react-query";
import useAxiosSecure from "./useAxiosSecure";

const useSelectedClasses = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const { refetch, data: mySelectedClasses = [] } = useQuery({
    queryKey: ["mySelectedClasses", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/mySelectedClasses?email=${user?.email}`);
      // console.log("res from axios", res);
      return res.data;
    },
  });

  return [mySelectedClasses, refetch];
};

export default useSelectedClasses;
