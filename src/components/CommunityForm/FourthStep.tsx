import { useRef, useState } from "react";
import { IconType } from "react-icons";
import { IoEarthOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoLockClosedSharp } from "react-icons/io5";
import Toggle from "../Toggle";
import { TbRating18Plus } from "react-icons/tb";

type CheckBoxType = {
  description: string;
  header: string;
  Icon: IconType;
}[];

const checkBoxes: CheckBoxType = [
  {
    description: "Anyone can view, post, and comment to this community",
    header: "Public",
    Icon: IoEarthOutline,
  },
  {
    description: "Anyone can view, but only approved users can contribute",
    header: "Restricted",
    Icon: IoEyeOffOutline,
  },
  {
    description: "Only approved users can view and contribute",
    header: "Private",
    Icon: IoLockClosedSharp,
  },
];

export default function FourthStep({ isVisible }: { isVisible: boolean }) {
  const [selected, setSelected] = useState(0);
  return (
    <div className={`${isVisible ? "block" : "hidden"} space-y-12 pb-24`}>
      <p className="break-words text-sm opacity-50">
        Decide who can view and contribute in your community. Only public
        communities show up in search. Important: Once set, you will need to
        submit a request to change your community type.
      </p>
      <div className="space-y-6">
        <div className="space-y-2 border-b border-border/50">
          {checkBoxes.map((item, index) => (
            <button
              type="button"
              className="w-full text-start"
              key={index}
              onClick={() => setSelected(index)}
            >
              <CheckButtonField
                key={index}
                description={item.description}
                header={item.header}
                Icon={item.Icon}
                selected={index === selected}
              />
            </button>
          ))}
        </div>
        <ToggleField />
      </div>
    </div>
  );
}

function CheckButtonField({
  selected,
  header,
  description,
  Icon,
}: {
  selected: boolean;
  header: string;
  description: string;
  Icon: IconType;
}) {
  const inputRef = useRef<null | HTMLInputElement>(null);
  return (
    <div
      className={`${selected && "bg-gray-700"} flex items-center justify-between p-4`}
    >
      <div className="flex items-center gap-4">
        <div>
          <Icon size={26} />
        </div>
        <div className="flex flex-col">
          <h6 className="text-md">{header}</h6>
          <p className="text-sm opacity-50">{description}</p>
        </div>
      </div>
      <div>
        <label className="hidden" htmlFor={header}>
          {header}
        </label>
        <input
          checked={selected}
          ref={inputRef}
          className="size-4"
          id="header"
          type="checkbox"
        />
      </div>
    </div>
  );
}

function ToggleField() {
  const [selected, setSelected] = useState(false);

  return (
    <div
      onClick={() => setSelected((prev) => !prev)}
      className={`flex items-center justify-between p-4`}
    >
      <div className="flex items-center gap-4">
        <div>
          <TbRating18Plus size={26} />
        </div>
        <div className="flex flex-col">
          <h6 className="text-md">Mature</h6>
          <p className="text-sm opacity-50">
            Users must be over 18 to view and contribute
          </p>
        </div>
      </div>
      <div>
        <label htmlFor="mature">
          <Toggle trigger={selected} />
        </label>
        <input
          checked={selected}
          id="mature:"
          type="checkbox"
          className="hidden"
        />
      </div>
    </div>
  );
}
