// pages/index.js
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import HeaderForPage from "../Layout/headerpage";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import FooterForPage from "../Layout/footer";
import React from "react";
import next from "next"; 
const Title = dynamic(() => import("../Layout/Title"), {
  ssr: false,
});

const HomePage = () => {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

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

    try {
      const response = await axios.post(
        "http://localhost:3000/admin/addadmin",
        data
      );
      alert("Account Create Successfully!");
      console.log(response.data);
      // handleRegistrationEvent(); // This function is not defined in the provided code
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <HeaderForPage></HeaderForPage>
      <Title page="Add Admin"> </Title>
      <div className="max-w-md mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Add Admin</h2>
        <form onSubmit={handleFormSubmit}>
          {/* ... (rest of your form code) ... */}
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
};

export default HomePage;
