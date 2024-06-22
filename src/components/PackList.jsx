/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { Item } from "./Item";

const PackList = ({ items, onDelete, onEdit }) => {
  const data = [
    { id: 1, desc: "passport", quantity: 2, packed: false },
    { id: 2, desc: "socks", quantity: 3, packed: true },
  ];

  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      ?.slice()
      .sort((a, b) => a?.desc.localeCompare(b?.description));
  if (sortBy === "status")
    sortedItems = items
      ?.slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="p-5 flex w-5/6 mx-auto min-h-[50vh]">
      <div>
        <ul className="flex gap-10 ">
          {sortedItems.map((item) => (
            <Item
              key={item.desc}
              item={item}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
        </ul>

        <div className="m-10">
          <select
            className="p-4 border-none outline-none"
            name=""
            id=""
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="input">Sort by Input order</option>
            <option value="description">Sort by description</option>
            <option value="status">Sort by packed status</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default PackList;
