export default function Toggle({ trigger }: { trigger: boolean }) {
  return (
    <button
      type="button"
      className={`flex h-6 w-12 rounded-full transition-all ${trigger ? "justify-end bg-blue-600" : "justify-start bg-border/50"}`}
    >
      <div className="h-6 w-6 rounded-full border bg-white"></div>
    </button>
  );
}
