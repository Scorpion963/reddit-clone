import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className=" my-64 flex items-center justify-center bg-background">
      <SignUp />
    </div>
  );
}
