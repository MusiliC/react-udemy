/* eslint-disable no-unused-vars */
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Form = ({onAddItems}) => {
  const [desc, setDesc] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [packed, setPacked] = useState(false);



  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = { desc, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItems(newItem);

    setQuantity("")
    setDesc("")
  };

  //state - internal data owned by component
  //prop - external data owned by parent component

  return (
    <form
      className="p-5 flex gap-10 justify-center items-center w-5/6 mx-auto"
      onSubmit={handleSubmit}
    >
      <p>What do you need for your trip?</p>

      <select
        name=""
        className="p-2 rounded-md"
        id=""
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {/* Number in e.target.value restricts the select to return only an integer */}
        {Array.from({ length: 20 }, (val, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="desc"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        className="p-3 outline-none border border-gray-400"
      />
      <button type="submit" className="bg-yellow-500 text-white p-3 rounded">
        Add
      </button>
    </form>
  );
};

export default Form;
