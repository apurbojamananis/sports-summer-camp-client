const Testimonial = () => {
  return (
    <section className="bg-gray-900 ">
      <hr />
      <div className="container px-6  mx-auto py-40">
        <h1 className="text-2xl font-semibold text-center capitalize lg:text-3xl text-white">
          What our <span className="text-blue-500 ">clients</span> say
        </h1>

        <p className="max-w-2xl mx-auto mt-6 text-center  text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt
          ex placeat modi magni quia error alias, adipisci rem similique, at
          omnis eligendi optio eos harum.
        </p>

        <div className="grid grid-cols-1 gap-8 mx-auto mt-8 lg:grid-cols-2 xl:mt-10 max-w-7xl">
          <div className="p-6 rounded-lg bg-gray-800 md:p-8">
            <p className="leading-loose  text-gray-300">
              “I cannot express enough how grateful I am for the sports academy.
              The training sessions are exceptional, providing a perfect balance
              of technical skills, tactical understanding, and physical
              conditioning. The coaches are not only highly knowledgeable but
              also incredibly supportive and dedicated to helping us achieve our
              goals. ”.
            </p>

            <div className="flex items-center mt-6">
              <img
                className="object-cover rounded-full w-14 h-14"
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt=""
              />

              <div className="mx-4">
                <h1 className="font-semibold text-blue-500">Robbert</h1>
                <span className="text-sm  text-gray-300">
                  CTO, Robert Consultency
                </span>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg bg-gray-800 md:p-8">
            <p className="leading-loose text-gray-300">
              “Words cannot describe the transformative impact the sports
              academy has had on my tennis career. The coaches are exceptional
              mentors who not only possess a wealth of technical knowledge but
              also genuinely care about their students progress. ”.
            </p>

            <div className="flex items-center mt-6">
              <img
                className="object-cover rounded-full w-14 h-14"
                src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />

              <div className="mx-4">
                <h1 className="font-semibold text-blue-500">Mia Brown</h1>
                <span className="text-sm  text-gray-300">
                  Marketing Manager at Stech
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
