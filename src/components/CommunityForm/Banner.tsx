import { AiOutlinePicture } from "react-icons/ai";
import Button from "../Button";

export default function Banner({
    text,
    setFile,
  }: {
    text: string;
    setFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }) {
    return (
      <div className="flex items-center justify-between">
        <div>{text}</div>
        <div>
          <Button type="button" variant="secondary">
            <label className="flex items-center gap-2" htmlFor={text}>
              <AiOutlinePicture size={26} />
              Add
            </label>
          </Button>
  
          <input
            onChange={(e) => setFile(e)}
            id={text}
            className="hidden"
            type="file"
          />
        </div>
      </div>
    );
  }