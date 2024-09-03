import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  OnSelectedIndex: (item: string) => void;
}

function ListGroup({ items, heading, OnSelectedIndex }: ListGroupProps) {
  let [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <div>
      <h1>List</h1>
      {heading}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              OnSelectedIndex(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;
