import Link from "next/link";
import React from "react";

export default function NavigationPanel() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
      <a className="bg-purple-800 btn btn-ghost normal-case text-2xl text-white">
        📶 Dashboard
        </a>
        {/* "Login" and "Sign Up" links outside the flex container */}
        <div className="flex-none">
{/* <Link href="./LogIn">
  <b className="text-purple-500 hover:underline custom-font-style">
    Login
  </b>
</Link> */}
<br />
{/* <Link href="./Signup">
  <b className="text-purple-500 hover:underline custom-font-style">
    Sign Up
  </b>
</Link>  */}
<br />
</div>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
          <Link href="./Signup">
  <b className="text-purple-500 hover:underline custom-font-style">
    Sign Up
  </b>
</Link> 
</li>
<li>
          <Link href="./LogIn">
  <b className="text-purple-500 hover:underline custom-font-style">
  Login
  </b>
</Link> 
            </li>

            
          <li>
            <details>
            <summary>
    <b className="text-purple-500 hover:underline custom-font-style">
      Help
    </b>
  </summary>
              <ul className="p-2 text-purple-500 hover:underline custom-font-style">
                <li>
                  <a>Call</a>
                </li>
                <li>
                  <a>Chat</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}


