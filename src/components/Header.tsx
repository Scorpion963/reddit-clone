import { currentUser } from "@clerk/nextjs/server";
import IconsProfile from "./IconsProfile";
import Logo from "./Logo";
import Search from "./Search";
import UserNotLoggedInHeader from "./UserNotLoggedInHeader";
import Sidebar from "./Sidebar";

export default async function Header() {
  const user = await currentUser();

  return (
    <div className="sticky flex flex-col top-0 h-screen">
      <div className="flex items-center h-auto justify-between border-b border-border/50 p-2">
        <Logo />
        <Search />
        {user ? <IconsProfile /> : <UserNotLoggedInHeader />}
      </div>
      <Sidebar />
    </div>
  );
}
