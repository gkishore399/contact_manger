import { PropsWithChildren } from "react";

interface props {
  fruits: { name: string; cal: number }[];
}
const List = ({ fruits }: props) => {
  fruits.sort((a, b) => a.cal - b.cal);

  const lowCalFruit = fruits.filter((fruit) => fruit.cal < 95);
  const ListItems = lowCalFruit.map((fruit, index) => (
    <>
      <li>{fruit.name}</li>
      <b>{fruit.cal}</b>
    </>
  ));

  return <ol>{ListItems}</ol>;
};

export default List;
