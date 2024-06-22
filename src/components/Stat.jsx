/* eslint-disable react/prop-types */

const Stat = ({ items }) => {
  if (!items.length)
    return (
      <footer>
        <p>Start packing your items</p>
      </footer>
    );

  const numItems = items?.length;

  const numPacked = items?.filter((item) => item.packed).length;

  const per = Math.round((numPacked / numItems) * 100);

  return (
    <footer>
      <p>
        You have {numItems} items on your list, and packed {numPacked} and {per}
        % of the total
      </p>
    </footer>
  );
};

export default Stat;
