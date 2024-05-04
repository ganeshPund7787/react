// BG changer

import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let password = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) string += "0123456789";

    if (charAllowed) string += "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * string.length + 1);
      password += string.charAt(char);
    }

    setPassword(password);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClicpBoard = useCallback(() => {
    // passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 3); // Important Notes
    window.navigator.clipboard.writeText(password);
    let speech = new SpeechSynthesisUtterance();
    speech.text = "copy password";
    window.speechSynthesis.speak(speech);
  }, [password]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed, generatePassword]);

  return (
    <div className="text-center w-full max-w-md mx-auto shadow-md rounded-lg my-40 px-4 py-3 text-red-600 bg-gray-800">
      <div className="md:max-w-2xl text-center w-full max-w-md mx-auto shadow-md mb-4">
        <h1 className="text-center text-3xl my-8 decoration-4">
          Password Generator
        </h1>

        <div className="w-full flex ">
          <input
            type="text"
            value={password}
            className="outline-none w-[18rem] py-1.5 px-3 my-1"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClicpBoard}
            class="bg-orange-500 hover:bg-blue-700 text-white font-bold py-1.5 px-4 rounded-r-lg"
          >
            Copy
          </button>
        </div>
      </div>

      <div className="flex gap-x-2">
        <div className="flex items-center gap-x-1 text-orange-500">
          <input
            type="range"
            min={6}
            max={20}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label className="text-xs lg:text-lg">Length: {length}</label>
        </div>

        <div className="flex items-center gap-x-1 text-white">
          <input
            className="cursor-pointer h-4 w-4"
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput" className="text-xs lg:text-lg">
            Number
          </label>
        </div>

        <div className="flex items-center gap-x-1  text-green-600">
          <input
            type="checkbox"
            className="h-4 w-4 cursor-pointer"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="characterInput" className="text-xs lg:text-lg">
            Character
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
