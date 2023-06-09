const ManageUsers = () => {
  return (
    <div className="container mx-auto min-h-screen">
      <div>
        <section className="container px-4 mx-auto mt-20">
          <div className="flex items-center gap-x-3 justify-center">
            <h2 className="text-lg font-medium text-gray-800 dark:text-white">
              Team members
            </h2>

            <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
              100 users
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
                          Photo
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-lg font-semibold text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Name
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-lg font-semibold text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Email address
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-lg font-semibold text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <button className="flex items-center gap-x-2">
                            <span>Role</span>
                          </button>
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-lg font-semibold text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Make Admin
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-lg font-semibold text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Make Instructor
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                      <tr>
                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <span>1</span>
                        </td>
                        <td>
                          <div className="flex items-center gap-x-2">
                            <img
                              className="object-cover w-10 h-10 rounded-full"
                              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                              alt=""
                            />
                          </div>
                        </td>
                        <td>
                          <h2 className="font-medium text-gray-800 dark:text-white ">
                            Arthur Melo
                          </h2>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          authurmelo@example.com
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          Student
                        </td>

                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <button className="px-3 py-1 text-xs text-indigo-500 rounded-full dark:bg-gray-800 bg-indigo-100/60">
                            Admin
                          </button>
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <button className="px-3 py-1 text-xs text-indigo-500 rounded-full dark:bg-gray-800 bg-indigo-100/60">
                            Instructor
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ManageUsers;
