import React, { useCallback, useState } from "react";
import Categories from "../Categories/Categories";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Slides from "../Carousal/Slides";
import Modal from "../Modal/Modal";

export default function Home() {
  const [isOpen, setOpen] = useState(false);

  const handleClick = useCallback(() => {
    setOpen(true);
  }, []);

  return (
    <div>
      <button onClick={handleClick}>Open Modal</button>
      <Modal
        isOpen={isOpen}
        onClose={setOpen.bind(null, false)}
        title="Please login to continue"
      >
        <div style={{ background: "blue", padding: "40px" }}>
          <h1>Test</h1>
        </div>
      </Modal>
      <Header />
      <Slides />
      <Categories />
      <Footer />
    </div>
  );
}
