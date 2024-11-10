import Link from "next/link";
import { FaReddit } from "react-icons/fa";

export default async function Logo () {
    return <Link href="/" className="flex gap-2 items-center">
        <FaReddit className="text-primary" size={42} />
        <h1 className="font-bold text-2xl">reddit</h1>
    </Link>
}