/* eslint-disable react/prop-types */
export const Item = ({ item, onDelete, onEdit }) => {
  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        name=""
        id=""
        value={item.packed}
        onChange={() =>  onEdit(item.id)}
      />
      <p className={item?.packed ? `line-through` : null}>{item?.desc}</p>
      <p>:</p>
      <p className={item?.packed ? `line-through` : null}>{item?.quantity}</p>
      <p
        className="bg-red-500 text-white p-1 rounded"
        onClick={() => onDelete(item?.id)}
      >
        Delete
      </p>
    </div>
  );
};
