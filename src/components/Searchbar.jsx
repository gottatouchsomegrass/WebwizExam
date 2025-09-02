import React from "react";
import { useEffect, useState } from "react";

const Searchbar = () => {
  const [store, setStore] = useState({ users: [] });
  const [search, setSearch] = useState();
  const [recents, setrecents] = useState([]);
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
            // console.log(store.users[0].firstName);
          });
      };
      searching();
    } catch (error) {
      throw new Error(error);
    }
  }, [search]);
  return (
    <div>
      <div className="flex flex-col w-140 rounded-2xl shadow-xl outline-2 focus:outline-offset-2 outline-blue-600">
        {recents[0] && (
          <div className="flex flex-wrap">
            {recents[0] &&
              recents.map((item) => (
                <div className="p-2 m-2 rounded-2xl bg-linear-to-r from-blue-600 to-violet-500 text-white flex gap-2">
                  {/* <img src={} alt='pfp'></img> */}
                  {item}{" "}
                  <div>
                    <ion-icon name="close-outline"></ion-icon>
                  </div>
                </div>
              ))}
          </div>
        )}
        <input
          placeholder="Search for a User..."
          className="text-gray-500 w-full bg-white outline-2 focus:outline-offset-2 outline-white border-white pl-5 rounded-2xl justify-self-end h-20"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      </div>

      <div className="flex w-140 rounded-2xl justify-center shadow-xl mt-6 p-2 border-2 border-gray-100 bg-white">
        {store.users[0] && (
          <div>
            {store.users.map((item) => (
              <div
                key={item.id}
                className="p-2 m-2 rounded-2xl bg-linear-to-r from-blue-600 to-violet-500 text-white"
                onClick={() => {
                  setrecents([
                    ...recents,
                    item.firstName + " " + item.lastName,
                  ]);
                  // console.log(recents);
                  // console.log(item.image);
                }}
              >
                <div className="flex flex-row gap-2">
                  <img src={item.image} alt="pfp" className="w-[3svh]"></img>
                  <div>{item.firstName + " " + item.lastName}</div>
                </div>
              </div>
            ))}
            {/* {store["users"][0]["firstName"]} */}
          </div>
        )}
        {!store.users[0] && (
          <div className="text-gray-400 p-2">No users found</div>
        )}
      </div>
    </div>
  );
};

export default Searchbar;
