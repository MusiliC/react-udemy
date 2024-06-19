/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Item } from "./Item";

const PackList = ({items, onDelete, onEdit}) => {
  const data = [
    { id: 1, desc: "passport", quantity: 2, packed: false },
    { id: 2, desc: "socks", quantity: 3, packed: true },
  ];

  return (
    <div className="p-5 flex w-5/6 mx-auto min-h-[50vh]">
      <div>
        <ul className="flex gap-10 ">
          {items.map((item) => (
          <Item key={item.desc} item={item} onDelete = {onDelete} onEdit = {onEdit}  />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PackList;
