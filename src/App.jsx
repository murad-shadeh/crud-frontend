import { useState } from "react";
import "./App.css";
import ModalForm from "./components/ModalForm";
import Navbar from "./components/Navbar";
import TableList from "./components/TableList";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add");

  const handleIsOpen = (mode) => {
    setIsOpen(true);
  };
  const handleSubmit = () => {
    if (modalMode === "add") {
      console.log("Modal mode added");
    } else {
      console.log("Modal mode Edit");
    }
  };
  return (
    <div>
      <Navbar onOpen={() => handleIsOpen("add")} />
      <TableList handleIsOpen={handleIsOpen} />
      <ModalForm
        isOpen={isOpen}
        onClsoe={() => setIsOpen(false)}
        onSubmit={handleSubmit}
        mode={modalMode}
      />
    </div>
  );
}

export default App;
