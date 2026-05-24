import React, { useState } from "react";
import axios from "axios";
const App = () => {
  const [data, setData] = useState([]);

  async function fetchData() {
    const response = await axios.get("https://fakestoreapi.com/products");
    console.log(response.data);
    setData(response.data);
  }

  return (
    <div className="flex items-start justify-center pt-6 bg-neutral-600 h-screen flex-wrap gap-5">
      <button
        onClick={() => fetchData()}
        className="bg-blue-600 p-2 rounded-lg cursor-pointer active:scale-95 hover:bg-blue-500 text-white font-semibold"
      >
        FetchData
      </button>

      {data.map((item, index) => {
        console.log(item.image);

        return (
          <div key={item.id} className="border-2 p-2 bg-white rounded w-60">
            <h1>{item.title}</h1>

            <img
              src={item.image}
              alt="image"
              className="w-full h-40 object-cover"
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
