// ... (imports)

import axios from "axios";
import React, { useState } from "react";
import Title from "../Layout/Title";

export default function ProductSearch() {
  const [searchId, setSearchId] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:3000/admin/admincrudsearch/${searchId}`
      );
      setUserData(response.data);
    } catch (error) {
      if (error.response) {
        console.error("Server responded with status:", error.response.status);
        console.error("Error response data:", error.response.data);
        // @ts-ignore
        setError("Error: " + error.response.data.message);
      } else {
        console.error("Error:", error.message);
        // @ts-ignore
        setError("Error: Something went wrong.");
      }
      setUserData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Title page="Search Product" />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Search Product by ID</h2>
        <form onSubmit={handleSubmit} className="mb-4">
          <div>
            <label className="block font-semibold">Product ID: </label>
            <input
              type="text"
              placeholder="Enter Product ID"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              className="border rounded-md p-2 w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2"
            disabled={loading}
          >
            {loading ? "Searching..." : "Search"}
          </button>
        </form>
        {userData && (
          <div>
            <h3 className="text-xl font-semibold mb-2">Search Result:</h3>
            <p>
              <span className="font-semibold">Product ID:</span> {userData.
// @ts-ignore
              productID}
            </p>
            {/* ... (other fields) */}
          </div>
        )}
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </>
  );
}
