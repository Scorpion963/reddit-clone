'use client'

import { SetStateAction, useRef } from "react";

export default function FloatingTextarea({
    name,
    description,
    setDescription,
  }: {
    name: string;
    description: string;
    setDescription: React.Dispatch<SetStateAction<string>>;
  }) {
    const ref = useRef<null | HTMLTextAreaElement>(null);
  
    return (
      <div>
        <div className="relative flex h-44 flex-col justify-center rounded-lg bg-input px-6 focus:ring focus:ring-border">
          <label
            className={`absolute text-xs transition-all duration-200 ease-in-out ${
              description !== "" ? "block -translate-y-[4.5rem]" : "hidden"
            } peer-focus:block peer-focus:-translate-y-4`}
            htmlFor={name}
          >
            Description
          </label>
          <textarea
            ref={ref}
            placeholder="Description"
            className={`peer h-[90%] resize-none bg-transparent outline-none ${
              description !== "" && "mt-6"
            }`}
            onChange={(e) => setDescription(e.target.value)}
            id={name}
            value={description}
            name={name}
          />
        </div>
        <div className="flex w-full justify-end pr-4 pt-2 text-sm">
          {description.length}
        </div>
      </div>
    );
  }