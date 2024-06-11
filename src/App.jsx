import { useState } from "react";
import "./App.css";

const messages = ["Learn react", "Learn java", "Learn Spring"];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(false)

  //when state is updated the react rerenders the 
  
  //?Updating state based on the current state
  const setOpening = () => {
    setIsOpen((toggle) => !toggle);
  }

  const active =
    "h-10 w-10 flex items-center justify-center rounded-full bg-yellow-700 text-white";

  const notActive =
    "h-10 w-10 flex items-center justify-center rounded-full bg-blue-700 text-white";

  const changeToPrevious = () => {
    //if (step > 1) setStep(step - 1);

    //!Updating state based on current value
      if (step > 1) setStep((s) => s-1);
  };

  const changeToNext = () => {
  //  if (step < 3) setStep(step + 1);

        //!Updating state based on current value
      if (step < 3) setStep((s) => s+1);
  };

  return (
    <>
      <div className="p-10 bg-gray-300">
        <div className="numbers flex w-full justify-evenly gap-5">
          <p>&times;</p>
          <p className={`${step >= 1 ? active : notActive}`}>1</p>
          <p className={`${step >= 2 ? active : notActive}`}>2</p>
          <p className={`${step >= 3 ? active : notActive}`}>3</p>
        </div>

        <div className="my-5">
          <p>
            Step {step} : {messages[step - 1]}
          </p>
        </div>

        <div className="buttons flex w-full justify-evenly gap-5">
          <button
            className="bg-blue-500 text-white p-3 rounded-sm"
            onClick={changeToPrevious}
          >
            Previous
          </button>
          <button
            style={{ backgroundColor: "blue" }}
            className=" text-white p-3 rounded-sm"
            onClick={changeToNext}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
