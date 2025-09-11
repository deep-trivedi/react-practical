import React, { Component } from "react";

class UserData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        this.setState({ users: data, loading: false });
      })
      .catch((error) => {
        this.setState({ error: error.message, loading: false });
      });
  }

  render() {
    const { users, loading, error } = this.state;

    if (loading) {
      return <p className="p-4">Loading...</p>;
    }

    if (error) {
      return <p className="p-4 text-red-500">Error: {error}</p>;
    }

    return (
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">Fetched Users</h2>
        <ul className="space-y-3">
          {users.map((user) => (
            <li key={user.id} className="p-3 border rounded-lg shadow-sm">
              <p className="font-semibold">{user.name}</p>
              <p className="text-gray-600 text-sm">{user.email}</p>
              <p className="text-gray-500 text-xs">{user.website}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UserData;
