import Link from "next/link";
import Button from "./Button";

import FullScreenModal from "./FullScreenModal";
import { PiQrCodeLight } from "react-icons/pi";

export default async function UserNotLoggedInHeader() {
  return (
    <div className="flex gap-2">
      <FullScreenModal
      header="Download"
        trigger={
          <Button variant="secondary">
            {" "}
            <PiQrCodeLight />
            <div>Get The App</div>
          </Button>
        }
      >
        <Content />{" "}
      </FullScreenModal>
      <Link href="/sign-in">
        <Button>Log In</Button>
      </Link>
    </div>
  );
}

function Content() {
  return (
    <div className="flex flex-col items-center gap-4 pt-8 text-center">
      <div className="font-bold">
        Scan this QR code to <br />
        download the app now
      </div>
      <div className="size-64 bg-black"></div>
      <div>Or check out in the app stores</div>
      <div className="flex gap-2">
        <div>Google Play</div>
        <div>App Store</div>
      </div>
    </div>
  );
}
