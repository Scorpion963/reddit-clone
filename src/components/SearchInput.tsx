"use client";
import { useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";

 
  


export default function SearchInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<null | HTMLInputElement>(null);

  const handleFocus = () => {
    if (!inputRef) return;

    inputRef.current?.focus();
  };

  const enableFocus = () => {
    setIsFocused(true);
  };

  const disableFocus = () => {
    setIsFocused(false);
  };

  return (
    <div
      className={`bg-input flex w-full items-center gap-2 rounded-full border-2 px-4 py-2 focus:border ${isFocused ? "border-border" : "border-transparent"}`}
    >
      <CiSearch onClick={handleFocus} size={26} />
      <input
        {...props}
        ref={inputRef}
        onFocus={enableFocus}
        onBlur={disableFocus}
        placeholder="Search Reddit"
        className="w-full bg-transparent outline-none"
        type="text"
      />
    </div>
  );
}
