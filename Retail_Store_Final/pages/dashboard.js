import React from "react";
import Link from "next/link";

import dynamic from "next/dynamic";
const Header = dynamic(() => import("../Layout/headerpage"), {
  ssr: false,
});
const NavigationPanel = dynamic(() => import("../Layout/navigation"), {
  ssr: false,
});

const FooterForPage = dynamic(() => import("../Layout/footer"), {
  ssr: false,
});

const Title = dynamic(() => import("../Layout/Title"), {
  ssr: false,
});


import AnnualDistribution from "./AnnualDistribution";
import BusinessPerformance from "./BusinessPerformance";

const Dashboard = () => {
  return (
    <>
      {" "}
      <Title page="Dashboard"> </Title>
      <Header></Header>
      <NavigationPanel></NavigationPanel>
      <div className="flex bg-white min-h-screen">
        <div
          className="w-1/4 p-4 overflow-y-scroll"
          style={{ maxHeight: "calc(100vh - 64px)" }}
        >
          <div className="mt-8">
            <ul className="space-y-4">
              <Link href="./Add_Admin_Account">
                <b className="shadow-md p-4 border border-purple-500 rounded-md bg-purple-100 hover:bg-purple-200"

>
                  {" "}
                  ✏ Add Admin{"\xa0 \xa0 \xa0 \xa0 "}
                </b>
              </Link>
              <br />
              <br />
              <br />
              <Link href="./Search_Admin">
              <b className="shadow-md p-4 border border-purple-500 rounded-md bg-purple-100 hover:bg-purple-200"
>
                  🔍 Search Admin{"\xa0\xa0 "}
                </b>
              </Link>
              <br /> <br />
              <br />
              <Link href="./show_admin">
              <b className="shadow-md p-4 border border-purple-500 rounded-md bg-purple-100 hover:bg-purple-200">
              
              
             📜 Admin Show{"\xa0 \xa0 \xa0"}
            </b>
            </Link>
            <br /> <br />
            <br />
            <Link href="./Modify_Account">
            <b className="shadow-md p-4 border border-purple-500 rounded-md bg-purple-100 hover:bg-purple-200"
>
                  ✎ Modify Admin{"\xa0 \xa0"}
                </b>
              </Link>
              <br /> <br />
              <br />
              <Link href="./Delete_admin">
                <b className="shadow-md p-4 border border-purple-500 rounded-md bg-purple-100 hover:bg-purple-200"
>
                  🗑️ Delete Admin{"\xa0 \xa0 "}
                </b>
              </Link>
              <br /> <br />
              <br />
              <Link href="./Admin_blog_post">
                <b className="shadow-md p-4 border border-purple-500 rounded-md bg-purple-100 hover:bg-purple-200"
>
                  📰 Admin Blog {" \xa0  \xa0 \xa0 "}
                </b>
              </Link>
              <br /> <br />
              <br />
              <Link href="./Product_Add">
                <b className="shadow-md p-4 border border-purple-500 rounded-md bg-purple-100 hover:bg-purple-200"
>
                  ➕ Add Product{" \xa0 \xa0"}
                </b>
              </Link>
              <br />
              <br /> <br />
            </ul>
            <Link href="./Product_delete">
              <b className="shadow-md p-4 border border-purple-500 rounded-md bg-purple-100 hover:bg-purple-200"
>
                🚮 Product Delete
              </b>
            </Link>
            <br />
            <br />
            <br />
            <Link href="./Product_Modify">
              <b className="shadow-md p-4 border border-purple-500 rounded-md bg-purple-100 hover:bg-purple-200"
>
                ✍🏼Product Modify
              </b>
            </Link>
            <br />
            <br />
            <br />
            <Link href="./Product_search">
              <b className="shadow-md p-4 border border-purple-500 rounded-md bg-purple-100 hover:bg-purple-200"
>
                🔍 Product Search{"\xa0"}
              </b>
            </Link>
            <br />
            <br />
            <br />
            <Link href="./show_product">
              <b className="shadow-md p-4 border border-purple-500 rounded-md bg-purple-100 hover:bg-purple-200">
                📜 Product Show{"\xa0 \xa0"}
              </b>
            </Link>
            <br />
            <br />
            <br />
            {/* <Link href="./show_admin">
              <b className="shadow-md p-4 border border-purple-500 rounded-md bg-purple-100 hover:bg-purple-200">
                📜 Admin Show{"\xa0 \xa0 \xa0"}
              </b>
            </Link>
            <br />  */}
          </div>
        </div>
        <div className="w-1/2 p-4 bg-white shadow-md">
          {/* "Login" and "Sign Up" links outside the flex container
          <div className="flex flex-col items-end mt-4 mr-4">
            <Link href="./LogIn">
              <b className="text-purple-500 hover:underline custom-font-style">
                Login
              </b>
            </Link>
            <br />
           <Link href="./Signup">
              <b className="text-purple-500 hover:underline custom-font-style">
                Sign Up
              </b>
            </Link> 
            <br />
            </div> */}
          <h1 className=" text-4xl font-bold text-purple-800 mb-4">Annual Distribution</h1>
          <br /> 
          <AnnualDistribution />
        </div>
        <div className="w-1/2 p-4 bg-white shadow-md">
          <h1 className="text-4xl font-bold text-purple-800 mb-4">Business Performance</h1>
          <br />
          <BusinessPerformance />
        </div>
        </div>
      <div>
        <FooterForPage />
      </div>
    </>
  );
};

export default Dashboard;
