import { FaTrashAlt } from "react-icons/fa";

export const Item = ({ item, handleClick, handleDelete }) => {
  return (
    <li className="item">
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => handleClick(item.id)}
      />
      <label
        onDoubleClick={() => handleClick(item.id)}
        style={
          item.checked
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
      >
        {item.item}
      </label>
      <FaTrashAlt
        role="button"
        tabIndex="0"
        onClick={() => handleDelete(item.id)}
      />
    </li>
  );
};
