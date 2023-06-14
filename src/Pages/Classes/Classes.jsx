import { useLocation, useNavigate } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";
import useAllApprovedClasses from "../../Hooks/useAllApprovedClasses";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";

const Classes = () => {
  const { user } = useContext(AuthContext);
  const [role] = useAdmin();

  const [allApprovedClasses, refetch] = useAllApprovedClasses();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSelectClass = (classes) => {
    if (!user) {
      navigate("/login", { state: { from: location }, replace: true });
    } else {
      const classInfo = {
        classId: classes._id,
        imageUrl: classes.imageUrl,
        email: user.email,
        className: classes.className,
        instructor: classes.name,
        price: classes.price,
      };

      fetch(
        "https://sports-summer-camp-server-apurbojamananis.vercel.app/selectedClasses",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(classInfo),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your Class has been added to bookmarked",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    }
  };
  return (
    <div className="container mx-auto min-h-screen pb-20 pt-10">
      <div>
        <h2 className="text-3xl font-semibold mb-12 ">
          See All the Available Classes{" "}
        </h2>
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3 justify-center ">
        {allApprovedClasses.map((classes) => (
          <div
            key={classes._id}
            className={`max-w-xs overflow-hidden rounded-lg shadow-lg  flex flex-col ${
              classes.availableSeats === 0 ? "bg-red-500 text-white" : ""
            }`}
          >
            <img
              className="object-cover w-full h-48 rounded-tl-lg rounded-tr-lg"
              src={classes.imageUrl}
              alt={classes.className}
            />

            <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
              <h1 className={`text-lg font-bold text-white `}>
                ${classes.price}
              </h1>
              <button className="px-2 py-1 text-xs font-semibold text-gray-900 transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
                {classes.availableSeats} Available
              </button>
            </div>
            <div className="px-4 py-2 flex-grow">
              <h3
                className={`mt-1 text-sm text-gray-800 ${
                  classes.availableSeats === 0 ? " text-white" : ""
                }`}
              >
                {classes.name}
              </h3>
              <h1
                className={`text-xl font-bold  Capitalize text-gray-900 mt-2 ${
                  classes.availableSeats === 0 ? " text-white" : ""
                }`}
              >
                {classes.className}
              </h1>
            </div>
            <div className="px-4 py-2">
              <button
                className={`w-full py-2 rounded-lg font-semibold
                ${
                  classes.availableSeats === 0
                    ? "bg-red-500 cursor-not-allowed outline outline-white"
                    : ""
                }
                ${
                  role === "Admin" || role === "Instructor"
                    ? "bg-gray-400 cursor-not-allowed text-gray-600"
                    : "bg-neutral hover:transparent hover:outline hover:outline-white text-white"
                } `}
                disabled={
                  role === "Admin" ||
                  role === "Instructor" ||
                  classes.availableSeats === 0
                }
                onClick={() => handleSelectClass(classes)}
              >
                {classes.availableSeats === 0
                  ? "No Seat Available"
                  : "Select Class"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
