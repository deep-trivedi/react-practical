import React from "react";

const UserListPage = () => {
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Mike Johnson", email: "mike@example.com" },
    { id: 4, name: "Emily Davis", email: "emily@example.com" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">User List</h2>
      <ul className="space-y-3">
        {users.map((user) => (
          <li
            key={user.id} 
            className="p-3 border rounded-lg shadow-sm"
          >
            <p className="font-semibold">{user.name}</p>
            <p className="text-gray-600 text-sm">{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserListPage;
