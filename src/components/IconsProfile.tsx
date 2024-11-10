import { MdOutlineAdsClick } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import { CiBellOn } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";

import IconButton from "./IconButton";
import Profile from "./Module";
import ProfileModule from "./ProfileModule";
import Module from "./Module";

export default async function IconsProfile() {
  return (
      <div className="flex gap-2 items-center">
        <IconButton href="/" Icon={MdOutlineAdsClick} />
        <IconButton href="/" Icon={AiOutlineMessage} />
        <IconButton href="/submit" text="Create" Icon={FiPlus} />
        <IconButton href="/" Icon={CiBellOn} />
        <Module trigger={(<div className="rounded-full bg-black p-4"></div>)}>
            <ProfileModule />
        </Module>
      </div>
  );
}
