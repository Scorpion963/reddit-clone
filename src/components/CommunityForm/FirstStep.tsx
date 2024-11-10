export default function FirstStep({
    isVisible,
    children,
    description,
  }: {
    isVisible: boolean;
    description: string;
    children: React.ReactNode;
  }) {
    return (
      <div className={`space-y-12 ${isVisible ? "block" : "hidden"}`}>
        <p className="text-sm opacity-50">{description}</p>
        <div className="flex justify-between gap-12">{children}</div>
      </div>
    );
  }