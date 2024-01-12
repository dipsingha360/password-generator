"use client";
import { useCallback, useEffect, useState } from "react";
import React from "react";

const PasswordGenerator = () => {
  const [length, setLength] = useState(15);
  const [isNumber, setIsNumber] = useState(false);
  const [isSymbol, setIsSymbol] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (isNumber) str += "0123456789";
    if (isSymbol) str += "!@#$%^&*(_+<>?/";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, isNumber, isSymbol, setPassword]);

  useEffect(() => {
    passwordGen();
  }, [length, isNumber, isSymbol, passwordGen]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-[720px] flex flex-col gap-4 bg-white rounded-lg border-slate-300 px-10 py-5">
        <h2 className="text-slate-700 font-bold text-2xl pb-3 text-center">
          Password generator
        </h2>
        <div className="input-button flex gap-2 justify-center items-center">
          <input
            type="text"
            value={password}
            placeholder="password"
            readOnly
            className="w-screen outline-none bg-slate-300 rounded-md text-slate-600  px-5 py-2"
          />
          <button type="button" className="bg-green-500 px-5 py-2 rounded-md">
            Copy
          </button>
        </div>
        <div className="flex items-center justify-evenly text-sm gap-x-3">
          <div className="range flex gap-x-2 items-center">
            <input
              onChange={(e) => setLength(e.target.value)}
              type="range"
              min={15}
              max={40}
              value={length}
              className="cursor-pointer"
            />
            <label className=" font-semibold text-orange-600">
              Length: {length}
            </label>
          </div>

          <div className="numbers flex gap-x-2 items-center">
            <input
              onChange={() => {
                setIsNumber((prev) => !prev);
              }}
              type="checkbox"
              defaultChecked={isNumber}
              id="numberInput"
              className="cursor-pointer"
            />
            <label className=" font-semibold text-orange-600">Numbers</label>
          </div>

          <div className="numbers flex gap-x-2 items-center">
            <input
              onChange={() => {
                setIsSymbol((prev) => !prev);
              }}
              type="checkbox"
              defaultChecked={isSymbol}
              id="symbolInput"
              className="cursor-pointer"
            />
            <label className=" font-semibold text-orange-600">Symbols</label>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PasswordGenerator;
