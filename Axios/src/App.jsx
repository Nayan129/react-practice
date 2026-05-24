import React, { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  // -----fucntion to fetch api data-----
  async function fetchData() {
    const response = await axios.get("https://picsum.photos/v2/list", {
      params: {
        page: page,
        limit: 10,
      },
    });
    setData(response.data);
  }

  // ------ useEffect to run on page render and calling data ------

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div className="flex flex-col items-start p-2 bg-neutral-600 h-full">
      {/* <button
        onClick={() => fetchData()}
        className="bg-blue-600 p-2 rounded-lg cursor-pointer active:scale-95 hover:bg-blue-500 text-white font-semibold"
      >
        FetchData
      </button> */}

      <div className="flex flex-wrap gap-1">
        {data.map((item, index) => {
          return (
            <div
              key={item.id}
              className=" border-2 p-2 mt-2 rounded-lg bg-white w-60 hover:scale-95 hover:transition-transform"
            >
              <h1>{item.author}</h1>

              <img
                src={item.download_url}
                alt="image"
                className="w-full h-40 object-cover"
              />
            </div>
          );
        })}
      </div>

      {/* ---buttons---  */}
      <div className="mt-2 flex gap-2">
        <button
          onClick={() => setPage(page - 1)}
          className="text-white font-bold border px-4 py-1.5 rounded cursor-pointer bg-blue-600 active:scale-95 hover:scale-105"
        >
          Prev
        </button>
        <button
          onClick={() => setPage(page + 1)}
          className="text-white font-bold border px-4 py-1.5 rounded cursor-pointer bg-blue-600 active:scale-95 hover:scale-105"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
