import { FaAddressCard, FaEnvelope, FaLink, FaUser } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ImageUploadKey = import.meta.env.VITE_Image_Upload_Key;

const AddClasses = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const imageHostingUrl = `https://api.imgbb.com/1/upload?key=${ImageUploadKey}`;

  const onSubmit = (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("image", data.imageUrl[0]);

    fetch(imageHostingUrl, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imageUrl = imgResponse.data.display_url;
          const { className, availableSeats, price } = data;
          const newClass = {
            className,
            imageUrl,
            name: user.displayName,
            email: user.email,
            totalSeats: parseInt(availableSeats),
            availableSeats: parseInt(availableSeats),
            price: parseFloat(price),
            status: "Pending",
          };
          console.log(newClass);

          axiosSecure.post("/allClasses", newClass).then((data) => {
            console.log("after posting new menu item", data.data);
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Item added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };

  return (
    <div className="bg-black">
      <section className="bg-white dark:bg-gray-900 min-h-screen">
        <div className="container flex  justify-center min-h-screen px-6 mx-auto pb-20">
          <div className="w-full max-w-md">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex items-center justify-center mt-6">
                <span className="w-2/4 pb-2 text-2xl font-medium text-center text-gray-800  border-b-2 border-blue-500 dark:border-blue-400 dark:text-white mb-8">
                  Add a Class
                </span>
              </div>
              {/*  */}

              <div className="relative flex items-center mt-5">
                <span className="absolute">
                  <FaUser className="text-gray-300 text-2xl ml-3"></FaUser>
                </span>

                <input
                  type="text"
                  {...register("className", { required: true })}
                  className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Class Name"
                />
              </div>

              {/* Error messages */}
              {errors.className?.type === "required" && (
                <span className="text-red-500 text-sm mt-1 ml-1">
                  Class Name is required.
                </span>
              )}

              {/*  */}

              <label
                htmlFor="dropzone-file"
                className="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer dark:border-gray-600 dark:bg-gray-900"
              >
                <FaLink className="text-gray-300 text-2xl mr-3"></FaLink>

                <input
                  id="dropzone-file"
                  type="file"
                  {...register("imageUrl", { required: true })}
                />
              </label>

              {errors.imageUrl?.type === "required" && (
                <span className="text-red-500 text-sm mt-1 ml-1">
                  ImageUrl is required.
                </span>
              )}

              {/*  */}

              <div className="relative flex items-center mt-5">
                <span className="absolute">
                  <FaUser className="text-gray-300 text-2xl ml-3"></FaUser>
                </span>

                <input
                  type="text"
                  defaultValue={user?.displayName}
                  readOnly
                  {...register("name")}
                  className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Instructor Name"
                />
              </div>

              {/* Error messages */}
              {/* {errors.name?.type === "required" && (
                <span className="text-red-500 text-sm mt-1 ml-1">
                  Name is required.
                </span>
              )} */}

              {/*  */}

              <div className="relative flex items-center mt-6">
                <span className="absolute">
                  <FaEnvelope className="text-gray-300 text-2xl ml-3"></FaEnvelope>
                </span>

                <input
                  type="email"
                  defaultValue={user?.email}
                  readOnly
                  {...register("email")}
                  className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Instructor Email "
                />
              </div>

              {/* {errors.email?.type === "required" && (
                <span className="text-red-500 text-sm mt-1 ml-1">
                  Email is required.
                </span>
              )} */}

              {/*  */}

              <div className="relative flex items-center mt-8">
                <span className="absolute">
                  <FaAddressCard className="text-gray-300 text-2xl ml-3"></FaAddressCard>
                </span>

                <input
                  type="text"
                  {...register("availableSeats")}
                  className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Available Seats"
                />
              </div>

              <div className="relative flex items-center mt-8">
                <span className="absolute">
                  <FaAddressCard className="text-gray-300 text-2xl ml-3"></FaAddressCard>
                </span>

                <input
                  type="text"
                  {...register("price")}
                  className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Price $"
                />
              </div>

              {/*  */}

              <div className="mt-6">
                <input
                  type="submit"
                  value="Add Class"
                  className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50 text-center cursor-pointer"
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddClasses;
