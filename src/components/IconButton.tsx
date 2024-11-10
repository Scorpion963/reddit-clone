import Link from "next/link";
import { IconType } from "react-icons";

export default async function IconButton({Icon, text, href}: {Icon: IconType, text?: string, href:string}) {
    return <Link href={href} className="rounded-full flex items-center gap-1 p-2 max-w-max hover:bg-white hover:bg-opacity-10 transition-opacity">
        <Icon size={26} />
        {text}
    </Link>
} 