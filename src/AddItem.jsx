import { FaPlus } from "react-icons/fa";
import { useRef } from "react";

export const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  const handleChange = (e) => {
    setNewItem(e.target.value);
  };

  const inputRef = useRef();

  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem"></label>
      <input
        autoFocus
        ref={inputRef}
        id="addItem"
        type="text"
        placeholder="Add Item"
        required
        name="listItem"
        value={newItem}
        onChange={handleChange}
      ></input>

      <button
        type="submit"
        aria-label="Add Item"
        onClick={() => inputRef.current.focus()}
      >
        +
      </button>
    </form>
  );
};
