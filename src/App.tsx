import { useState } from "react";
import "./App.css";
import Popover from "./components/atoms/Popover";
// import Modal from "./components/atoms/Modal";
// import Dropdown from "./components/atoms/Dropdown";

function App() {
  // const [selectedValue, setSelectedValue] = useState("");
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [showPopOver, setShowPopover] = useState(false);

  // useEffect(() => {
  //   window.console.log("selectedValue", selectedValue);
  // }, [selectedValue]);

  return (
    <div>
      {/* <Dropdown
        options={[
          { value: "value_1", label: "Label 1" },
          { value: "value_2", label: "Label 2" },
        ]}
        onSelect={(selectedValue) => setSelectedValue(selectedValue)}
        value={selectedValue}
      /> */}

      {/* <button onClick={() => setIsModalOpen(!isModalOpen)}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        Hello I'm a modal
      </Modal> */}
      <Popover
        trigger={
          <button onClick={() => setShowPopover(!showPopOver)}>
            Show Popover
          </button>
        }
        content={<div>This is the popover content</div>}
      />
    </div>
  );
}

export default App;
