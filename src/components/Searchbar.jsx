import React from "react";
import { useEffect, useState } from "react";

const Searchbar = () => {
  const [store, setStore] = useState([]);
  const [search, setSearch] = useState();
  useEffect(() => {
    try {
      const searching = () => {
        fetch(`https://dummyjson.com/users/search?q=${search}`)
          .then((res) => {
            if (!res.ok) throw new Error("not fetched");
            return res.json();
          })
          .then((data) => {
            setStore(data);
            // console.log("error log", data);
            console.log(store);
          });
      };
      searching();
    } catch (error) {
      throw new Error(error);
    }
  }, [search]);
  return (
    <div>
      <div className="flex w-140 h-20 rounded-2xl shadow-2xl ">
        <input
          placeholder="Search for a User..."
          className="text-gray-500 w-full bg-white border-2  outline-2 focus:outline-offset-2 outline-blue-600 pl-5 rounded-2xl"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      </div>
      <div className="flex w-140 h-20 rounded-2xl shadow-2xl mt-3">
        <div>
          {store.users.map((item) => (
            <div key={item.id}>{item.firstName}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
