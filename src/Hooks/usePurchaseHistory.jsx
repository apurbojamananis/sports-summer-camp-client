import { useQuery } from "react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const usePurchaseHistory = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data: myPaymentHistory = [], refetch } = useQuery({
    queryKey: ["paymentHistory", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/paymentHistory?email=${user?.email}`);
      refetch();
      return res.data;
    },
  });

  return [myPaymentHistory, refetch];
};

export default usePurchaseHistory;
