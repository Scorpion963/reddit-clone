'use client'

import { SetStateAction } from "react";

export default function FloatingInput({
    inputName,
    name,
    setName,
  }: {
    inputName: string;
    name: string;
    setName: React.Dispatch<SetStateAction<string>>;
  }) {
    return (
      <div>
        <div className="relative flex h-16 flex-col justify-center rounded-full bg-input px-6 focus:ring focus:ring-border">
          <input
            placeholder="Community Name"
            className={`peer bg-transparent outline-none ${name !== "" && "pt-2"}`}
            onChange={(e) =>
              setName((prev) =>
                e.target.value.length <= 21 ? e.target.value : prev,
              )
            }
            type="text"
            id={name}
            value={name}
            name={name}
          />
          <label
            className={`absolute origin-top-left transition-all peer-focus:-translate-y-4 peer-focus:text-xs ${name !== "" ? "block -translate-y-4 text-xs" : "hidden"}`}
            htmlFor={name}
          >
            Community
          </label>
        </div>
        <div className="flex w-full justify-end pr-6 pt-2 text-sm">
          {21 - name.length}
        </div>
      </div>
    );
  }