import React, { useState } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import HeaderForPage from "../Layout/headerpage";
import FooterForPage from "../Layout/footer";
import { Link } from "@mui/material";

const Title = dynamic(() => import("../Layout/Title"), {
  ssr: false,
});

export default function CreateAccountPage() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const getFormValues = () => {
    const formData = {
      name: firstName,
      email: email,
      password: password,
      phone: phone,
    };
    return formData;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const data = getFormValues();

    console.log("Form Data:", data);

    try {
      setLoading(true);
      
      const response = await axios.post(
        "http://localhost:3000/admin/addadmin",
        data,
        { timeout: 5000 }
      );

      console.log("Server Response:", response.data);

      if (response.data.success) {
        alert("Account Created Successfully!");
        try {
          handleRegistrationEvent();
          router.push("/");
        } catch (error) {
          console.error("Error handling registration event:", error);
        }
      } else {
        alert(`Failed to create admin account. ${response.data.message}`);
      }
    } catch (error) {
      console.error("Error:", error);

      if (axios.isAxiosError(error)) {
        console.error("Axios response:", error.response);

        if (error.response) {
          alert(`Failed to create admin account. Error: ${error.response.status} ${error.response.statusText}`);
        } else {
          alert("Failed to create admin account. Check the network connection.");
        }
      } else {
        alert(`Failed to create admin account. Error: ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <HeaderForPage></HeaderForPage>
      <Title page="Add Admin"> </Title>
      <div className="max-w-md mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Add Admin</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label className="block font-semibold mb-1">Admin Name:</label>
            <input
              type="text"
              name="name"
              onChange={handleFirstNameChange}
              placeholder="Enter Name"
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-1">Admin Email:</label>
            <input
              type="text"
              name="email"
              onChange={handleEmailChange}
              placeholder="Enter Email..."
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-1">Admin Password:</label>
            <input
              type="password"
              name="password"
              onChange={handlePasswordChange}
              placeholder="Enter password..."
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-1">Admin Phone:</label>
            <input
              type="text"
              name="phone"
              onChange={handlePhoneChange}
              placeholder="Enter phone..."
              className="w-full p-2 border rounded"
            />
          </div>
          <button
            type="submit"
            className={`bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? 'Adding Admin...' : 'Add Admin'}
          </button>
        </form>
        <div className="mt-4">
          <Link href="./dashboard">
            <button className="btn btn-ghost">Go Back</button>
          </Link>
        </div>
      </div>
      <FooterForPage></FooterForPage>
    </>
  );
}

function handleRegistrationEvent() {
  // You can add implementation here if needed.
  console.log("Registration event handled.");
}
