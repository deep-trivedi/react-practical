import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../features/users/userSlice";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return alert("All fields are required!");
    const newUser = {
      id: users.length ? users[users.length - 1].id + 1 : 1,
      name,
      email,
    };
    dispatch(addUser(newUser));
    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Add User</h2>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddUser;
