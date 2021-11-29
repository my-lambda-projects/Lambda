const User = (props) => {
  const { user } = props;
  return (
    <div className="UserCard">
      <h2>{user.name}</h2>
      <h3>{user.email}</h3>
      <h3>{user.password}</h3>
      <h3>
        {user.name} has agreed to ToS?: {user.tos ? "Yes" : "No"}
      </h3>
    </div>
  );
};

export default User;
