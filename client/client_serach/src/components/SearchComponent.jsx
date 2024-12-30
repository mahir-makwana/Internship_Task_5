import React, { useState, useEffect } from "react";

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (searchTerm === "") {
      setUsers([]);
      setMessage("");
    }
  }, [searchTerm]);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/users?search=${searchTerm}`
      );
      const data = await response.json(); 

      if (data.length === 0) {
        setMessage("No results found.");
      } else {
        setMessage("");
      }

      setUsers(data);
    } catch (error) {
      console.error("Error fetching data", error);
      setMessage("Error fetching users. Please try again.");
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    fetchUsers();
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleSearchChange}
        className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleSearchClick}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
      >
        Search
      </button>
      {message && <p className="mt-4 text-red-500 text-center">{message}</p>}
      <ul className="mt-4 space-y-4">
        {users.map((user) => (
          <li
            key={user._id}
            className="p-4 border border-gray-200 rounded-lg shadow-md"
          >
            <strong className="text-xl font-semibold">{user.name}</strong>
            <p className="text-gray-600">{user.address}</p>
            <p className="text-gray-500">
              {user.education.degree} from {user.education.school}
            </p>
            <p className="text-gray-700">Email: {user.contact.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent;
