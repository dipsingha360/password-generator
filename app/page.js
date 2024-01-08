"use client";

import Image from "next/image";
import { useCallback, useState } from "react";

export default function Home() {
  const [length, setLength] = useState(8);
  const [isNumber, setIsNumber] = useState(false);
  const [isSymbol, setIsSymbol] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGen = useCallback(() => {}, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-white rounded-lg border-slate-300 px-10 py-5">
        <div className="input-button flex gap-2 justify-center items-center">
          <input
            type="text"
            className=" outline-none bg-slate-300 rounded-md text-slate-600 px-5 py-2"
          />
          <button type="button" className="bg-green-500 px-5 py-2 rounded-md">
            Copy
          </button>
        </div>
      </div>
    </main>
  );
}
