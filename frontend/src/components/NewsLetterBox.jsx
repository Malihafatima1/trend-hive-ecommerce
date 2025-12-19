import React from "react";

const NewsLetterBox = () => {
  const onSubmitHandler = () => {
    event.preventDefault();
  };
  return (
<div className="text-center">
  <p className="text-2xl font-medium text-gray-800">
    Subscribe now & get 20% off
  </p>

  <p className="text-gray-400 mt-3 max-w-xl mx-auto">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error rerum quo
    nemo soluta eum est, quam, quod repellendus officia ea at fuga quisquam
    similique, impedit suscipit ipsam recusandae possimus atque!
  </p>

  <form
    onSubmit={onSubmitHandler}
    className="w-full sm:w-1/2 flex items-center gap-2 mx-auto bg-white shadow-md rounded-xl p-2 border mt-6 border-none"
  >
    <input
      className="w-full outline-none px-4 py-3 text-sm rounded-lg border focus:ring-2 focus:ring-black/50 transition-all"
      type="email"
      placeholder="Enter your email"
      required
    />

    <button
      type="submit"
      className="bg-black text-white text-xs font-semibold px-6 py-3 rounded-lg hover:bg-gray-900 transition-all"
    >
      SUBSCRIBE
    </button>
  </form>
</div>

  );
};

export default NewsLetterBox;
