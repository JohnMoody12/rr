import { ItemList } from "./ItemList";

export const Content2 = ({ items, handleClick, handleDelete }) => {
  return (
    <>
      {items.length ? (
        <ItemList
          items={items}
          handleClick={handleClick}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: "1.5rem" }}>No Items</p>
      )}
    </>
  );
};
