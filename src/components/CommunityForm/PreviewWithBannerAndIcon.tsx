export default function PreviewWithBannerAndIcon({
    communityName,
    description,
    banner,
    icon,
  }: {
    banner: string;
    communityName: string;
    description: string;
    icon: string;
  }) {
    return (
      <div>
        <div className="relative max-h-max w-80 space-y-2 rounded-lg bg-card p-4 shadow-2xl shadow-black">
          <div className="absolute -top-6 right-0 h-8 w-full overflow-hidden rounded-t-lg bg-black">
            <img src={banner} alt="" />
          </div>
          <div className="">
            <div className="flex gap-2 items-center">
              <div className="size-10 overflow-hidden rounded-full">
                <img src={icon} alt="" />
              </div>
              <h4 className="break-words text-xl font-bold">r/{communityName}</h4>
            </div>
  
            <p className="text-xs">1 member . 1 online</p>
          </div>
  
          <p className="text-sm">
            {description === "" ? "Your community description" : description}
          </p>
        </div>
      </div>
    );
  }