import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "./userSlice";
import EditUser from "../../components/EditUser";

const UserList = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [editingUser, setEditingUser] = useState(null);

  return (
    <div className="user-list">
      <h2>User List</h2>
      {users.length === 0 ? (
        <p>No users available.</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <div>
                <strong>{user.name}</strong> - {user.email}
              </div>
              <div>
                <button onClick={() => setEditingUser(user)}>Edit</button>
                <button onClick={() => dispatch(deleteUser(user.id))}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      {editingUser && (
        <EditUser user={editingUser} onClose={() => setEditingUser(null)} />
      )}
    </div>
  );
};

export default UserList;
