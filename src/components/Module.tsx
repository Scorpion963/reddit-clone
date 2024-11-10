"use client";

import { useEffect, useRef, useState } from "react";

export default function Module({ children, trigger }: { children: React.ReactNode,  trigger: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const moduleRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
        if(moduleRef && !moduleRef.current?.contains(event.target as Node)){
            setIsOpen(false)
        }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
        document.removeEventListener("mousedown", handleClickOutside)
    }
  })

  const handleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div ref={moduleRef}>
      <div onMouseDown={handleIsOpen}>{trigger}</div>
      <div className={`${isOpen ? 'block' : 'hidden'}`}>{children}</div>
    </div>
  );
}
