import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import TopNavbar from "./components/TopNavbar";
import Homepage from "./components/Homepage";

function App() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  return (
    <div className="App min-h-screen w-full flex bg-zinc-100">
      <Sidebar
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
      />
      <div className="w-full">
        <TopNavbar
          isSideBarOpen={isSideBarOpen}
          setIsSideBarOpen={setIsSideBarOpen}
        />
        <Homepage />
      </div>
    </div>
  );
}

export default App;
