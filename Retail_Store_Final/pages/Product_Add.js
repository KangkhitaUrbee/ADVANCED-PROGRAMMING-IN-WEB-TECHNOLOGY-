import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import HeaderForPage from "../Layout/headerpage";
import FooterForPage from "../Layout/footer";
import dynamic from "next/dynamic";
import React from "react";

const Title = dynamic(() => import("../Layout/Title"), {
  ssr: false,
});

export default function CreateAccountPage() {
  const router = useRouter();
  const [productName, setProductName] = useState("");
  const [productCode, setProductCode] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productDescription, setProductDescription] = useState("");

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleProductCodeChange = (e) => {
    setProductCode(e.target.value);
  };

  const handleProductPriceChange = (e) => {
    setProductPrice(e.target.value);
  };

  const handleProductCategoryChange = (e) => {
    setProductCategory(e.target.value);
  };

  const handleProductDescriptionChange = (e) => {
    setProductDescription(e.target.value);
  };

  const getFormData = () => ({
    name: productName,
    code: productCode,
    price: productPrice,
    category: productCategory,
    description: productDescription,
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = getFormData();
    await submitFormData(formData);
  };

  const submitFormData = async (formData) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/admin/admincrud",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      router.push("./dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <HeaderForPage />
      <div className="flex justify-center items-center h-screen">
        <div className="max-w-md w-full p-6 bg-white rounded shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Add Product</h2>
          <form onSubmit={handleFormSubmit}>
            {/* ... */}
            {/* Your existing form fields */}

            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Product Add
            </button>
          </form>
          <div className="mt-4">
            <Link href="./dashboard">Back to Home</Link>
          </div>
        </div>
      </div>
      <FooterForPage />
    </>
  );
}
