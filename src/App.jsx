import axios from "axios";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list?page=40&limit=20");
    setData(response.data);
    console.log(response.data);
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <button
        onClick={getData}
        className="bg-green-500 text-white px-4 py-2 rounded-3xl m-10 cursor-pointer"
      >
        Get Data
      </button>

      <div className="flex flex-wrap gap-6 p-4 justify-center">
        {data.map((item) => (
          <div
            key={item.id}
            className="text-center bg-gray-900 p-3 rounded-xl shadow-lg"
          >
            <img
              src={item.download_url}
              alt={item.author}
              className="w-48 h-48 object-cover rounded-lg"
            />
            <p className="mt-3 text-base font-semibold text-green-400">
              {item.author}
            </p>
            <p>{item.height}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
