import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "react-query";

const useAdmin = () => {
  const { user } = useContext(AuthContext);

  const [axiosSecure] = useAxiosSecure();

  const {
    data: role,
    isLoading: isRoleLoading,
    refetch,
  } = useQuery({
    queryKey: [user?.email],

    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user?.email}`);


      return res.data.role;
    },
  });
  return [role, isRoleLoading, refetch];
};

export default useAdmin;
