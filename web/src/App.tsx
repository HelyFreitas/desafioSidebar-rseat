import { useState } from "react";
import { Sidebar } from "./components/Sidebar";

function App() {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false)

  return (
    <div className="App">
      <Sidebar />
    </div>
  );
}

export default App;
