import useAllClasses from "../../Hooks/useAllClasses";

const Classes = () => {
  const [allClasses] = useAllClasses();
  return (
    <div className="container mx-auto min-h-screen pb-20 pt-10">
      <div>
        <h2 className="text-3xl font-semibold mb-12 ">
          See All the Available Classes{" "}
        </h2>
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3 justify-center">
        {allClasses.map((classes) => (
          <div
            key={classes._id}
            className=" max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800  "
          >
            <img
              className="object-cover w-full h-48 mt-2 rounded-tl-lg rounded-tr-lg"
              src={classes.imageUrl}
              alt={classes.className}
            />

            <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
              <h1 className="text-lg font-bold text-white">${classes.price}</h1>
              <button className="px-2 py-1 text-xs font-semibold text-gray-900  transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
                {classes.availableSeats} Available
              </button>
            </div>
            <div className="px-4 py-2">
              <h3 className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                {classes.name}
              </h3>
              <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white mt-2">
                {classes.className}
              </h1>
            </div>
            <div className="px-4 py-2 mb-0">
              <button className="w-full bg-neutral py-2 text-white rounded-lg hover:transparent hover:outline hover:outline-white font-semibold">
                Select Class
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
