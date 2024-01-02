import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React from "react";
const Title = dynamic(() => import("../Layout/Title"), {
  ssr: false,
});

export async function getServerSideProps() {
  const response = await axios.get("http://localhost:3000/admin/Blog");
  const data = await response.data;

  return { props: { data } };
}

export default function BlogAdmin({ data }) {
  const router = useRouter();
  const [Name, setname] = useState("");
  const [Post, setpost] = useState("");

  const handleChangefname = (e) => {
    setname(e.target.value);
  };
  const handleChangPost = (e) => {
    setpost(e.target.value);
  };

  function setvalue() {
    const DataofForm = {
      name: Name,
      post: Post,
    };
    return DataofForm;
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = setvalue();

    await blog(formData);
  };

  async function blog(formData) {
    try {
      const response = await axios.post(
        "http://localhost:3000/admin/blogpost",
        formData
      );
      console.log(response.data);

      router.push("/");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold">Blog Post</h2>
      <form onSubmit={handleFormSubmit} className="mt-4">
        {/* ... (form input fields) */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Post
        </button>
      </form>
      {/* ... (table displaying blog posts) */}
      <div className="mt-4">
        <Link href="/dashboard">Go to Home</Link>
      </div>
    </div>
  );
}
