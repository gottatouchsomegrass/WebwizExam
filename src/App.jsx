import React from "react";
import Searchbar from "./components/Searchbar";
import Searchresults from "./components/Searchresults";

function App() {
  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center justify-center gap-2">
      <Searchbar />
    </div>
  );
}

export default App;
