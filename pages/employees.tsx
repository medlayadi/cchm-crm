import type { NextPage } from "next";
import Image from "next/image";
import React from "react";

const Employees: NextPage = () => {
  return (
    <div className="flex w-full h-screen overflow-y-hidden">
      {/* sidebar */}
      <div className="bg-cchm-indigo text-white w-72 h-full">
        <div className="h-16 flex items-center bg-black/25">
          <h3 className="text-3xl uppercase ml-10 font-bold">cchm crm</h3>
        </div>

        <div className="ml-10 flex flex-col max-w-min mt-10 gap-7 font-semibold text-indigo-200">
          <a className="inline-flex capitalize hover:text-white" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            dashboard
          </a>

          <a
            className="inline-flex capitalize hover:text-white text-white"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            employees
          </a>
          <a className="inline-flex capitalize hover:text-white" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
            companies
          </a>
          <a className="inline-flex capitalize hover:text-white" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            contacts
          </a>
        </div>
      </div>

      <div className="flex-1">
        {/* top navbar */}
        <div className="w-full h-16 shadow bg-white flex items-center z-20">
          <div className="flex w-full items-center px-5 gap-5">
            <div className="flex items-center">
              <select
                defaultValue={0}
                className="py-2 px-3 bg-white border"
                name=""
                id=""
              >
                <option className="bg-white" value={0} disabled>
                  Filters
                </option>
                <option className="bg-white" value={1}>
                  created at
                </option>
                <option className="bg-white" value={2}>
                  updated at
                </option>
              </select>
            </div>
            <div className="flex-1">
              <div className="flex border">
                <button className="flex items-center justify-center px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
                <input
                  type="text"
                  className="px-4 py-2 w-80 flex-1"
                  placeholder="Search..."
                />
              </div>
            </div>
            <div className="flex gap-5">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </button>

              <button>
                <Image
                  width={35}
                  height={35}
                  className="h-10 w-10 rounded-full"
                  src={
                    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  }
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>

        {/* main content */}
        <div className="w-full h-full p-5 overflow-y-scroll">
          <div>
            <div className="w-full p-3 bg-white shadow">
              <div className="flex justify-between mb-3 items-center">
                <h3 className="text-lg font-semibold">Employees</h3>
                <button className="bg-cchm-red inline-flex items-center gap-2 font-semibold text-white py-1 px-3 capitalize hover:text-cchm-red hover:bg-white hover:ring-cchm-red ring-2 ring-cchm-red drop-shadow rounded-sm">
                  new
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div className="w-full">
                <table className="w-full border">
                  <tr className="text-left border">
                    <th className="p-2 px-6 capitalize">name</th>
                    <th className="p-2 px-6 capitalize">title</th>
                    <th className="p-2 px-6 capitalize">email</th>
                    <th className="p-2 px-6 capitalize">company</th>
                    <th className="p-2 px-6 capitalize">role</th>
                    <th className="p-2 px-6 capitalize">phone</th>
                    <th className="p-2 px-6 capitalize">adresse</th>
                  </tr>
                  <tr className="border-b cursor-pointer hover:bg-gray-100">
                    <td className="p-2 px-6">John Doe</td>
                    <td className="p-2 px-6">Rocket Scientist</td>
                    <td className="p-2 px-6">john@doe.com</td>
                    <td className="p-2 px-6">Doe Space Transport</td>
                    <td className="p-2 px-6">guest</td>
                    <td className="p-2 px-6">+212-123456789</td>
                    <td className="p-2 px-6">21st Jumpstreet, Chicago, USA</td>
                  </tr>
                  <tr className="border-b cursor-pointer hover:bg-gray-100">
                    <td className="p-2 px-6">John Doe</td>
                    <td className="p-2 px-6">Rocket Scientist</td>
                    <td className="p-2 px-6">john@doe.com</td>
                    <td className="p-2 px-6">Doe Space Transport</td>
                    <td className="p-2 px-6">user</td>
                    <td className="p-2 px-6">+212-123456789</td>
                    <td className="p-2 px-6">21st Jumpstreet, Chicago, USA</td>
                  </tr>
                  <tr className="border-b cursor-pointer hover:bg-gray-100">
                    <td className="p-2 px-6">John Doe</td>
                    <td className="p-2 px-6">Rocket Scientist</td>
                    <td className="p-2 px-6">john@doe.com</td>
                    <td className="p-2 px-6">Doe Space Transport</td>
                    <td className="p-2 px-6">admin</td>
                    <td className="p-2 px-6">+212-123456789</td>
                    <td className="p-2 px-6">21st Jumpstreet, Chicago, USA</td>
                  </tr>
                  <tr className="border-b cursor-pointer hover:bg-gray-100">
                    <td className="p-2 px-6">John Doe</td>
                    <td className="p-2 px-6">Rocket Scientist</td>
                    <td className="p-2 px-6">john@doe.com</td>
                    <td className="p-2 px-6">Doe Space Transport</td>
                    <td className="p-2 px-6">admin</td>
                    <td className="p-2 px-6">+212-123456789</td>
                    <td className="p-2 px-6">21st Jumpstreet, Chicago, USA</td>
                  </tr>
                  <tr className="border-b cursor-pointer hover:bg-gray-100">
                    <td className="p-2 px-6">John Doe</td>
                    <td className="p-2 px-6">Rocket Scientist</td>
                    <td className="p-2 px-6">john@doe.com</td>
                    <td className="p-2 px-6">Doe Space Transport</td>
                    <td className="p-2 px-6">admin</td>
                    <td className="p-2 px-6">+212-123456789</td>
                    <td className="p-2 px-6">21st Jumpstreet, Chicago, USA</td>
                  </tr>
                  <tr className="border-b cursor-pointer hover:bg-gray-100">
                    <td className="p-2 px-6">John Doe</td>
                    <td className="p-2 px-6">Rocket Scientist</td>
                    <td className="p-2 px-6">john@doe.com</td>
                    <td className="p-2 px-6">Doe Space Transport</td>
                    <td className="p-2 px-6">admin</td>
                    <td className="p-2 px-6">+212-123456789</td>
                    <td className="p-2 px-6">21st Jumpstreet, Chicago, USA</td>
                  </tr>
                  <tr className="border-b cursor-pointer hover:bg-gray-100">
                    <td className="p-2 px-6">John Doe</td>
                    <td className="p-2 px-6">Rocket Scientist</td>
                    <td className="p-2 px-6">john@doe.com</td>
                    <td className="p-2 px-6">Doe Space Transport</td>
                    <td className="p-2 px-6">admin</td>
                    <td className="p-2 px-6">+212-123456789</td>
                    <td className="p-2 px-6">21st Jumpstreet, Chicago, USA</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employees;
