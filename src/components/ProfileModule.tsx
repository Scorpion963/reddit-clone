import Link from "next/link"
import { IconType } from "react-icons"
import { IoShirtOutline } from "react-icons/io5";

import { CiDark } from "react-icons/ci";
import Toggle from "./Toggle";
import DarkModeToggle from "./DarkModeToggle";
import SignOutButton from "./SignOutButton";

export default async function ProfileModule () {
    return <div className="absolute bg-card w-[15.5rem] rounded-md  right-2 overflow-hidden">
        <ProfileNameModule />
        <ModuleButtonsWithIcons Icon={IoShirtOutline} header="Change Avatar" />
        <DarkModeToggle />
        <SignOutButton />
    </div>
}

export async function ProfileNameModule () {
    return <Link href='profile' className="flex gap-2 items-center px-2 py-4 hover:bg-secondaryDarkHover/50 transition-all">
        <div className="p-4 bg-black rounded-full "></div>
        <div className="flex flex-col gap-1 text-sm">
            <div className="">View Profile</div>
            <div className="opacity-50 text-xs font-light">u/Mysterious-Shop-6566</div>
        </div>  
    </Link>
}

export async function ModuleButtonsWithIcons ({Icon, header, description=null}: {Icon: IconType, header: string, description?: string | null}) {
    return <Link href='profile' className="flex gap-2 items-center px-2 py-4 hover:bg-secondaryDarkHover/50 transition-all">
        <Icon />
        <div className="flex flex-col gap-1 text-sm">
            <div className="">{header}</div>
            {description && <div className="opacity-50 text-xs font-light">{description}</div>}
        </div>
    </Link>
}

