import { Item } from "./Item";

export const ItemList = ({ items, handleClick, handleDelete }) => {
  return (
    <ul
      style={{
        listStyleType: "none",
        padding: 0,
        margin: 0,
        marginTop: ".25rem",
      }}
    >
      {items.map((item) => {
        return (
          <Item
            key={item.id}
            item={item}
            handleClick={handleClick}
            handleDelete={handleDelete}
          />
        );
      })}
    </ul>
  );
};
