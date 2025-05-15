import { useEffect, useState } from "react";
import { accordionData } from "../data";

const App = () => {
  const [data, setData] = useState(accordionData);
  const [selected, setSelected] = useState(null);
  const [multiple, setMultiple] = useState(false);
  const [multipleData, setMultipleData] = useState([]);

  function handleSelected(id) {
    if (selected === id) {
      setSelected(null);
    } else {
      setSelected(id);
    }
  }

function handleMultipleSelect(id) {
  const isAlreadySelected = multipleData.includes(id);
  if (!isAlreadySelected) {
    setMultipleData([...multipleData, id]);
  } else {
    setMultipleData(multipleData.filter((item) => item !== id));
  }
}

  return (
    <div className="wrapper-div">
      <button className="btn" onClick={() => setMultiple(!multiple)}>
        {multiple ? "Enable single selection" : "Enable multiple selection"}
      </button>
      {data.map((data) => {
        const isOpen = multiple
          ? multipleData.includes(data.id)
          : selected === data.id;
        return (
          <div key={data.id}>
            <div className="accordion-box">
              <div
                className="title-container"
                onClick={() =>
                  multiple
                    ? handleMultipleSelect(data.id)
                    : handleSelected(data.id)
                }
              >
                <h2 className="title">
                  {data.title} <span>+</span>
                </h2>
              </div>
              <div className={isOpen ? "expanded" : "content-container"}>
                <h2 className="content">{data.content}</h2>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
