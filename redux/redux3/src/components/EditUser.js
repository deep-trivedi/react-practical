import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../features/users/userSlice";

const EditUser = ({ user, onClose }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser({ id: user.id, name, email }));
    onClose();
  };

  return (
    <form onSubmit={handleUpdate} className="form">
      <h2>Edit User</h2>
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
      <button type="submit">Update</button>
      <button type="button" onClick={onClose}>
        Cancel
      </button>
    </form>
  );
};

export default EditUser;
