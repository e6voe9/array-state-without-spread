export const List = ({ items, onDelete }) => {
  return (
    <ul>
      {items.map(({ id, name, number }) => (
        <li
          key={id}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "8px",
            marginBottom: "16px",
          }}
        >
          <div>
            <b>{name}: </b> {number}
          </div>
          <button onClick={() => onDelete(id)} type="button">
            remove
          </button>
        </li>
      ))}
    </ul>
  );
};
