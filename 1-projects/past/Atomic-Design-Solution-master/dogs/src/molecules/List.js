import React from "react";
import { Link, Label } from "../atoms";

function List(props) {
  const items = props.list.map((item) => {
    const itemComponent = item.path ? (
      <Link path={item.path} label={item.label} key={item.label} />
    ) : (
      <Label label={item.label} key={item.label} />
    );
    return itemComponent;
  });

  return <div className="List">{items}</div>;
}

export default List;
