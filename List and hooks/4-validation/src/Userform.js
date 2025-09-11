import React, { useState } from "react";

const UserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [users, setUsers] = useState([]);

  const validate = () => {
    let formErrors = {};
    let isValid = true;

    if (!name.trim()) {
      formErrors.name = "Name is required";
      isValid = false;
    }

    if (!email.trim()) {
      formErrors.email = "Email is required";
      isValid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        formErrors.email = "Enter a valid email address";
        isValid = false;
      }
    }

    setErrors(formErrors);
    return isValid;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      const newUser = {
        id: users.length + 1, 
        name,
        email,
      };

      setUsers([...users, newUser]);
      setName("");
      setEmail("");
      setErrors({});
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Add User</h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-2 rounded"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        <div>
          <label className="block font-semibold">Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-2 rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded shadow"
        >
          Add User
        </button>
      </form>

      <h3 className="text-lg font-bold mt-6">User List</h3>
      <ul className="mt-2 space-y-2">
        {users.map((user) => (
          <li
            key={user.id}
            className="p-2 border rounded bg-gray-50 shadow-sm"
          >
            <p className="font-semibold">{user.name}</p>
            <p className="text-sm text-gray-600">{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserForm;
