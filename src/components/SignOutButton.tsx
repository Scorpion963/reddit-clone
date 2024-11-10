"use client";
import { MdOutlineLogin } from "react-icons/md";
import { useClerk } from "@clerk/nextjs";

export default function SignOutButton() {
  const { signOut } = useClerk();
  return (
    <button
      className="hover:bg-secondaryDarkHover/50 flex items-center gap-2 px-2 py-4 transition-all"
      onClick={() => signOut()}
    >
        <MdOutlineLogin />
      <div>Sign Out</div>
    </button>
  );
}
