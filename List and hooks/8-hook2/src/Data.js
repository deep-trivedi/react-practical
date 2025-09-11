import React, { useEffect, useState } from "react";

function Data() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center mt-6">Loading users...</p>;
  }

  return (
    <div className="mt-6 p-4">
      <h2 className="text-xl font-semibold mb-4">User List</h2>
      <ul className="list-disc list-inside">
        {users.map((user) => (
          <li key={user.id} className="mb-2">
            <span className="font-bold">{user.name}</span> — {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Data;
