import axios from "axios";
import { useState } from "react";
import * as yup from "yup";

const initialState = { name: "", email: "", password: "", tos: false };
const userSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup
    .string()
    .required("This E-Mail is REQUIRED")
    .email("You've failed to supply a proper email address"),
  password: yup.string().required("No Password: You kinda need this bud."),
  tos: yup
    .bool(
      "I don't know what you did, or how you did it. But ToS is not a bool anymore."
    )
    .required("You must agree to the TOS"),
});

const Form = (props) => {
  const { setUsers, users } = props;
  const [user, setUser] = useState(initialState);
  const [errMessages, setErrMessages] = useState([]);

  const handleEv = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const toggleToS = () => {
    setUser((user) => {
      return { ...user, tos: !user.tos };
    });
  };

  return (
    <form className="newUserForm">
      <label>
        Name:
        <input onChange={handleEv} value={user.name} name="name"></input>
      </label>
      <br />
      <label>
        EMail:
        <input onChange={handleEv} value={user.email} name="email"></input>
      </label>
      <br />
      <label>
        Password:
        <input
          onChange={handleEv}
          value={user.password}
          name="password"
        ></input>
      </label>
      <br />
      <label>
        I agree to the Terms of Serivce:
        <input
          onChange={toggleToS}
          type="checkbox"
          checked={user.tos}
          name="tos"
        ></input>
      </label>
      <br />
      <button
        onClick={(ev) => {
          ev.preventDefault();
          setErrMessages([]);
          userSchema
            .validate(user)
            .catch((e) => {
              setErrMessages(e.errors);
              return e.errors;
            })
            .then((result) => {
              if (!Array.isArray(result)) {
                axios.post("https://reqres.in/api/users", user).then((res) => {
                  setUsers([...users, res.data]);
                  setUser(initialState);
                });
              }
            });
        }}
      >
        Add User!
      </button>
      <p className="errors">
        {errMessages.map((msg, ind) => {
          return (
            <div key={ind} className="errorMessage">
              {msg}
            </div>
          );
        })}
      </p>
    </form>
  );
};
export default Form;
