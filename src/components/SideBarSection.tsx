"use client";
import { MdKeyboardArrowUp } from "react-icons/md";
import { useState } from "react";
import clsx from "clsx";

export default function SidebarSection({
  children,
  header,
}: {
  children: React.ReactNode;
  header: string;
}) {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <div className="flex flex-col border-b border-border/50 py-4">
      <button onClick={() => handleClick()} className="flex hover:bg-white hover:bg-opacity-10 p-4 py-2 rounded-lg justify-between items-center">
        <div className="text-sm font-light tracking-wide opacity-50">
          {header}
        </div>
        <div className={clsx("transition-transform", { "rotate-180": !isOpen })}>
          <MdKeyboardArrowUp />
        </div>
      </button>

      <div className={clsx("transition-all overflow-hidden duration-300", {
        "max-h-0 opacity-0": !isOpen,
        "max-h-96 opacity-100": isOpen
      })}>{children}</div>
    </div>
  );
}
