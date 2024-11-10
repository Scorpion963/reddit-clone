"use client";

import { FiPlus } from "react-icons/fi";
import SideBarButton from "../SideBarButton";
import FullScreenModal from "../FullScreenModal";
import {
  SetStateAction,
  useEffect,
  useInsertionEffect,
  useRef,
  useState,
} from "react";
import Button from "../Button";
import { AiOutlinePicture } from "react-icons/ai";
import Image from "next/image";
import ReactCrop, {
  centerCrop,
  convertToPixelCrop,
  Crop,
  makeAspectCrop,
  PixelCrop,
} from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { setCanvasPreview } from "~/app/setCanvasPreview";
import ImageCropper from "./ImageCropper";
import PreviewWithBannerAndIcon from "./PreviewWithBannerAndIcon";
import FirstStep from "./FirstStep";
import FloatingTextarea from "./FloatingTextArea";
import FloatingInput from "./FloatingInput";
import Preview from "./Preview";
import Banner from "./Banner";
import FourthStep from "./FourthStep";
import ThirdStep from "./ThirdStep";

const components = [
  <FirstStep />,
  <FirstStep />,
  <ThirdStep />,
  <FourthStep />,
];

const header = [
  "Tell us about your community",
  "Style your community",
  "Add topics",
  "What kind of community is this?",
];

export default function CreateCommunity() {
  const [index, setIndex] = useState(0);
  const [isNextDisabled, seIstNextDisabled] = useState(false);
  const [isPrevDisabled, setIsPrevDisabled] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [banner, setBanner] = useState<string | null>(null);
  const [icon, setIcon] = useState("");
  const [isVisibleForm, setIsVisibleForm] = useState(true);
  const [updated, setUpdated] = useState<string>("");
  const [isCropperVisible, setIsCropperVisible] = useState(false);
  const [isCircularCropVisible, setIsCircularCropVisible] = useState(false);
  const [updatedIcon, setUpdatedIcon] = useState("");

  const handleDirection = (direction: number) => {
    setIndex((prevIndex) => {
      const newIndex = Math.min(
        Math.max(prevIndex + direction, 0),
        components.length - 1,
      );

      seIstNextDisabled(newIndex === components.length - 1);
      setIsPrevDisabled(newIndex === 0);

      return newIndex;
    });
  };

  const handleFileUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "banner" | "icon",
  ) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        if (!e.target?.result) return;

        if (type === "banner") {
          setBanner(e.target.result as string);
          setIsVisibleForm(false);
          setIsCropperVisible(true);
        } else if (type === "icon") {
          setIcon(e.target.result as string);
          setIsVisibleForm(false);
          setIsCircularCropVisible(true);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpdatedBanner = (e: string) => {
    setUpdated(e);
    setIsVisibleForm(true);
    setIsCropperVisible(false);
  };

  const handleUpdatedIcon = (e: string) => {
    setUpdatedIcon(e);
    setIsVisibleForm(true);
    setIsCircularCropVisible(false);
  };

  return (
    <FullScreenModal
      width="w-[50rem]"
      header={header[index]!}
      trigger={
        <div className="flex items-center gap-2 rounded-lg p-4 py-2 hover:bg-white hover:bg-opacity-10">
          <FiPlus />
          <div>Create community</div>
        </div>
      }
    >
      {isCropperVisible && banner && (
        <ImageCropper
          userAspectRatio={1028 / 128}
          circular={false}
          handleUpdated={handleUpdatedBanner}
          src={banner}
        />
      )}
      {isCircularCropVisible && icon && (
        <ImageCropper
          heightPercent={100}
          userAspectRatio={1 / 1}
          circular={true}
          handleUpdated={handleUpdatedIcon}
          src={icon}
        />
      )}
      {isVisibleForm && (
        <form className="mt-2" action="">
          <FirstStep
            description="A name and description help people understand what your community is all
        about"
            isVisible={index === 0}
          >
            <div className="w-full space-y-6">
              <FloatingInput
                setName={setName}
                name={name}
                inputName="communityName"
              />

              <FloatingTextarea
                description={description}
                setDescription={setDescription}
                name="communityDescription"
              />
            </div>
            <Preview description={description} communityName={name} />
          </FirstStep>
          <FirstStep
            description="Adding visual flair will catch new members attention and help establish
        your community’s culture! You can update this at any time."
            isVisible={index === 1}
          >
            <div className="h-44 w-full space-y-3">
              <Banner
                setFile={(e) => handleFileUpload(e, "banner")}
                text="Banner"
              />
              <Banner
                setFile={(e) => handleFileUpload(e, "icon")}
                text="Icon"
              />
            </div>
            <PreviewWithBannerAndIcon
              icon={updatedIcon}
              banner={updated}
              communityName={name}
              description={description}
            />
          </FirstStep>
          <ThirdStep isVisible={index === 2} />
          <FourthStep isVisible={index === 3} />

          <div className="flex w-full justify-between">
            <div className="flex gap-1">
              {components.map((_, i) => (
                <div
                  key={i}
                  className={`size-2 rounded-full ${i === index ? "bg-border" : "bg-input"}`}
                ></div>
              ))}
            </div>
            <div className="flex gap-2">
              <Button
                variant="secondary"
                className={`${index === 0 ? "block" : "hidden"}`}
                type="button"
              >
                Cancel
              </Button>
              <Button
                variant="secondary"
                className={`${index > 0 ? "block" : "hidden"} ${!isNextDisabled && "hover:bg-opacity-50"}`}
                onClick={() => handleDirection(-1)}
                disabled={isPrevDisabled}
                type="button"
              >
                Back
              </Button>
              <Button
                className={`bg-blue-600 hover:bg-blue-600 ${!isNextDisabled && "hover:bg-opacity-50"} ${index < 3 ? "block" : "hidden"}`}
                onClick={() => handleDirection(1)}
                disabled={isNextDisabled}
                type="button"
              >
                Next
              </Button>
              <Button
                className={`bg-blue-600 hover:bg-blue-600 ${index === 3 ? "block" : "hidden"}`}
                type="submit"
              >
                Create Community
              </Button>
            </div>
          </div>
        </form>
      )}{" "}
    </FullScreenModal>
  );
}
