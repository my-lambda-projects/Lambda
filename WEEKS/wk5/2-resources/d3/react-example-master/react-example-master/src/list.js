const List = ({ list }) => {
  return (
    <ul>
      {list.length !== 0 && list.map((item, idx) => <li key={idx}>{item}</li>)}
    </ul>
  );
};

export default List;
