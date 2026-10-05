import React, { useCallback, useEffect, useRef, useState } from "react";

const GeneratorComponent = () => {
  const [password, setPassword] = useState("");
  const [isNumberIncluded, setIsNumberIncluded] = useState(false);
  const [isCharacterIncluded, setIsCharacterIncluded] = useState(false);
  const [length, setLength] = useState(8);

  const inputRef = useRef();

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (isNumberIncluded) str += "0123456789";
    if (isCharacterIncluded) str += "!@#$%^&*+_-={}[]~`";

    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length + 1));
    }

    setPassword(pass);
  }, [isNumberIncluded, isCharacterIncluded, length, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, isNumberIncluded, isCharacterIncluded, passwordGenerator]);

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(inputRef.current.value);
    inputRef.current?.select();
  }, [password]);
  return (
    <div className="w-full max-w-lg mx-auto shadow-md rounded-lg p-4 text-orange-500 bg-gray-700 space-y-4">
      <div className="flex justify-center items-center gap-2 rounded-lg overflow-hidden">
        <input
          ref={inputRef}
          type="text"
          value={password}
          className="text-sm overflow-hidden outline-none w-full py-1 px-3 bg-white rounded-lg"
        />
        <button
          className="text-white bg-blue-500 py-1 px-2 rounded-lg text-sm font-semibold cursor-pointer"
          onClick={() => handleCopy()}
        >
          Copy
        </button>
      </div>

      <div className="mx-auto flex gap-4">
        <div>
          <input
            id="length"
            type="range"
            min="8"
            max="100"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
          />
          <label htmlFor="length">Length {length}</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="number"
            checked={isNumberIncluded}
            onChange={() => setIsNumberIncluded((prev) => !prev)}
          />
          <label htmlFor="number">Number</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="character"
            checked={isCharacterIncluded}
            onChange={() => setIsCharacterIncluded((prev) => !prev)}
          />
          <label htmlFor="character">Character</label>
        </div>
      </div>
    </div>
  );
};

export default GeneratorComponent;
