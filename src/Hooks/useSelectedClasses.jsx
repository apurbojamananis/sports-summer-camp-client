import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

import { useQuery } from "react-query";
import axios from "axios";

const useSelectedClasses = () => {
  //   const { user } = useContext(AuthContext);
  //   const [axiosSecure] = useAxiosSecure();

  //   const { data: mySelectedClasses = [], refetch } = useQuery(
  //     [user?.email],
  //     async () => {
  //       const res = await axiosSecure.get(`/mySelectedClasses/${user?.email}`);

  //       return res.data;
  //     }
  //   );

  //   return [mySelectedClasses, refetch];

  const { user } = useContext(AuthContext);

  const { data: allData = [], refetch } = useQuery([user?.email], async () => {
    const res = await axios.get(
      `http://localhost:5000/mySelectedClasses/${user?.email}`
    );
    refetch();
    return res.data;
  });

  return [allData, refetch];
};

export default useSelectedClasses;
