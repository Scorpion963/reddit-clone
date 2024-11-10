import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex absolute w-full h-screen items-center justify-center bg-background">
      <SignIn />
    </div>
  );
}
