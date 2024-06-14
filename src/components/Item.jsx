export const Item = (item) => {
  const {  desc, quantity, packed } = item;
  return <div className="flex items-center gap-2">
    <p  className="bg-blue-500 text-white p-3 rounded">
      {
        packed ? "Packed" : "Pack"
      }
    </p>
    <p className={packed ? `line-through`:null}>{desc}</p>
    <p>:</p>
    <p className={packed ? `line-through`:null}>{quantity}</p>
    <p className="bg-red-500 text-white p-3 rounded">Delete</p>
  </div>;
};
