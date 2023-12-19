"use client";
import React, { useState } from "react";
import run from "./api/route";

const Page = () => {
  const [code, setCode] = useState("");
  const [result, setResult] = useState("");

  const calculateComplexity = async () => {
    try {
      const res = await run(code);
      setResult(res);
    } catch (err) {
      console.error("Error fetching results:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-800 flex flex-col items-center justify-center p-16">
      <header className="p-6 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-8">Code Complexity Calculator</h1>
        <p className="">
          Calculate the time and space complexity of your code using Big O
          notation
        </p>
      </header>

      <section className="p-4 bg-gray-900 cardbg h-full w-full rounded-2xl">
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Paste your code here..."
          className="bg-gray-900 w-full h-80 p-4 border-none rounded focus:outline-none focus:ring focus:border-blue-500"
        />
        <button
          onClick={calculateComplexity}
          className="bg-blue-500 text-white px-6 py-3 rounded mt-4 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Calculate
        </button>
      </section>
      {result && (
        <div className="mt-8 text-center flex justify-center w-full items-start flex-col">
          <h3 className="text-xl font-bold mb-2">
            Time and Space Complexities
          </h3>
          <div className="p-4 bg-gray-900 cardbg h-full w-full rounded-2xl">
            {/* <div dangerouslySetInnerHTML={{ __html: result }} /> */}
            {result}
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
