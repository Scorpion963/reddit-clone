"use client";
import { ReactNode, useEffect, useRef, useState } from "react";
import Button from "./Button";
import { RxCross1 } from "react-icons/rx";
import { PiQrCodeLight } from "react-icons/pi";

export default function FullScreenModal({children, trigger, header, width}: {children: ReactNode, trigger: ReactNode, header: string, width?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<null | HTMLDivElement>(null)

  useEffect(() => {
    const handleClose = (event: MouseEvent) => {
        if(ref && !ref.current?.contains(event.target as Node)) setIsOpen(false)
    }

    document.addEventListener("mousedown", handleClose)

    return () => document.removeEventListener("mousedown", handleClose)
  })

  return (
    <>
      <div onClick={() => setIsOpen(true)}>
       {trigger}
      </div>
      {isOpen && (
        <div className={`fixed inset-0 bottom-0 z-20  h-screen w-screen top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}>
          <div onClick={() => setIsOpen(false)} className="h-screen w-full bg-black opacity-50"></div>
          <div className="absolute bottom-0 right-1/2 flex h-screen w-full translate-x-1/2 items-center justify-center">
            <div ref={ref} className={`ml-48 w-[36rem] rounded-md bg-card p-6 py-10 ${width ? width : 'w-[36rem]'}`}>
              <div className="flex items-center justify-between">
                <h1 className="text-4xl font-bold">{header}</h1>
                <Button onClick={() => setIsOpen(false)} variant="secondary">
                  <RxCross1 size={26} />
                </Button>
              </div>
            
             {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
