export default function Preview({
    description,
    communityName,
  }: {
    description: string;
    communityName: string;
  }) {
    return (
      <div className="max-h-max w-96 space-y-2 overflow-hidden rounded-lg bg-card p-4 shadow-2xl shadow-black">
        <div className="">
          <h4 className="break-words text-xl font-bold">r/{communityName}</h4>
          <p className="text-xs">1 member . 1 online</p>
        </div>
  
        <p className="text-sm">
          {description === "" ? "Your community description" : description}
        </p>
      </div>
    );
  }