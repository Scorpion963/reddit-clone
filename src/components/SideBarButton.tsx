import Link from "next/link";
import { IconType } from "react-icons";

export default async function SideBarButton({
  header,
  Icon,
  photo,
}: {
  header: string;
  Icon?: IconType;
  photo?: string;
}) {
  return (
    <Link href='/' className="flex items-center gap-2 rounded-lg p-4 py-2 hover:bg-white hover:bg-opacity-10">
      {Icon && <Icon />}
      {photo && <div className="size-8 rounded-full bg-black"></div>}
      <div>{header}</div>
    </Link>
  );
}
