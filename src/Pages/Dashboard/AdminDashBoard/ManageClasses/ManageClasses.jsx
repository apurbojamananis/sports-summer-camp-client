// import { useQuery } from "react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useRef, useState } from "react";
import useAllClasses from "../../../../Hooks/useAllClasses";

const ManageClasses = () => {
  const [allClasses, refetch] = useAllClasses();
  console.log(allClasses);
  const [selectedClassId, setSelectedClassId] = useState(null);
  const [axiosSecure] = useAxiosSecure();
  // const { data: allClasses = [], refetch } = useQuery(["users"], async () => {
  //   const res = await axiosSecure.get("/allClasses");
  //   return res.data;
  // });
  // console.log(allClasses);

  const handleStatus = async (id, status) => {
    console.log(id, status);
    try {
      const response = await axiosSecure.patch(`/allClasses/status/${id}`, {
        status,
      });
      console.log(response.data);

      if (response.data.modifiedCount) {
        refetch();
        if (status === "Approved") {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `WOW! Class has been Approved`,
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            position: "Denied",
            icon: "success",
            title: `Opps! Class has been denied`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const modalRef = useRef(null);
  const openModal = (id) => {
    if (modalRef.current) {
      modalRef.current.showModal();
      setSelectedClassId(id);
    }
  };

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  const handleModal = async (event) => {
    event.preventDefault();
    const feedback = event.target.feedback.value;
    closeModal();
    console.log(feedback, selectedClassId);

    try {
      const response = await axiosSecure.patch(
        `/allClasses/feedback/${selectedClassId}`,
        {
          feedback,
        }
      );
      console.log(response.data);

      if (response.data.modifiedCount) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Feedback has been Sent!`,
          showConfirmButton: false,
          timer: 1500,
        });
        event.target.reset();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="container mx-auto min-h-screen">
        <div>
          <section className="container px-4 mx-auto mt-20">
            <div className="flex items-center gap-x-3 justify-center">
              <h2 className="text-lg font-medium text-gray-800 dark:text-white">
                Total Class
              </h2>

              <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
                {allClasses.length}
              </span>
            </div>

            <div className="flex flex-col mt-6">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                      <thead className="bg-gray-50 dark:bg-gray-800">
                        <tr>
                          <th
                            scope="col"
                            className="py-3.5 px-4 text-lg font-semibold text-left rtl:text-right text-gray-500 dark:text-gray-400"
                          >
                            <span>#</span>
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-3.5 text-lg font-semibold text-left rtl:text-right text-gray-500 dark:text-gray-400"
                          >
                            Class Image
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-3.5 text-lg font-semibold text-left rtl:text-right text-gray-500 dark:text-gray-400"
                          >
                            Class Name
                          </th>

                          <th
                            scope="col"
                            className="px-4 py-3.5 text-lg font-semibold text-left rtl:text-right text-gray-500 dark:text-gray-400"
                          >
                            Instructor Name
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-3.5 text-lg font-semibold text-left rtl:text-right text-gray-500 dark:text-gray-400"
                          >
                            Instructor Email
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-3.5 text-lg font-semibold text-left rtl:text-right text-gray-500 dark:text-gray-400"
                          >
                            Available Seats
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-3.5 text-lg font-semibold text-left rtl:text-right text-gray-500 dark:text-gray-400"
                          >
                            Price
                          </th>

                          <th
                            scope="col"
                            className="px-4 py-3.5 text-lg font-semibold text-left rtl:text-right text-gray-500 dark:text-gray-400"
                          >
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                        {allClasses.map((cls, index) => (
                          <tr key={cls._id}>
                            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                              <span>{index + 1}</span>
                            </td>
                            <td>
                              <div className="flex items-center gap-x-2">
                                <img
                                  className="object-cover w-10 h-10 rounded-full"
                                  src={cls.imageUrl}
                                  alt=""
                                />
                              </div>
                            </td>
                            <td>
                              <h2 className="font-medium text-gray-800 dark:text-white ">
                                {cls.className}
                              </h2>
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                              {cls.name}
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                              {cls.email}
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                              {cls.availableSeats}
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                              ${cls.price}
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                              <div className="space-x-2">
                                <span>{cls.status}</span>
                                <button
                                  className={`btn btn-xs btn-success capitalize ${
                                    cls.status === "Approved" ||
                                    cls.status === "Denied"
                                      ? "bg-gray-500 text-white"
                                      : ""
                                  }`}
                                  onClick={() =>
                                    handleStatus(cls._id, "Approved")
                                  }
                                  disabled={
                                    cls.status === "Approved" ||
                                    cls.status === "Denied"
                                  }
                                >
                                  Approved
                                </button>
                                <button
                                  className={`btn btn-xs btn-error capitalize ${
                                    cls.status === "Approved" ||
                                    cls.status === "Denied"
                                      ? "bg-gray-500 text-white"
                                      : ""
                                  }`}
                                  onClick={() =>
                                    handleStatus(cls._id, "Denied")
                                  }
                                  disabled={
                                    cls.status === "Approved" ||
                                    cls.status === "Denied"
                                  }
                                >
                                  Deny
                                </button>
                                <button
                                  className={`btn btn-xs btn-neutral capitalize ${
                                    cls.feedback ? "bg-gray-500 text-white" : ""
                                  }`}
                                  disabled={cls.feedback}
                                  onClick={() => openModal(cls._id)}
                                  // onClick={() => window.my_modal_5.showModal()}
                                >
                                  Send Feedback
                                </button>

                                {/* Open the modal using ID.showModal() method */}
                                <dialog
                                  id="my_modal_5"
                                  className="modal modal-bottom sm:modal-middle"
                                  ref={modalRef}
                                >
                                  <form
                                    method="dialog"
                                    className="modal-box"
                                    onSubmit={handleModal}
                                  >
                                    <h3 className="font-bold text-lg">
                                      Your Feedback
                                    </h3>
                                    <textarea
                                      name="feedback"
                                      cols="30"
                                      rows="5"
                                      required
                                      className="w-full border outline-none mt-5  p-3"
                                    ></textarea>
                                    <div className="modal-action">
                                      <button
                                        className="btn"
                                        type="button"
                                        onClick={closeModal}
                                      >
                                        Close
                                      </button>
                                      <input
                                        type="submit"
                                        value="Send"
                                        className="btn"
                                      />
                                    </div>
                                  </form>
                                </dialog>

                                {/*  */}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ManageClasses;
