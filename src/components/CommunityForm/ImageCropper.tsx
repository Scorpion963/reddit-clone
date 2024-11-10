'use client'

import { useEffect, useRef, useState } from "react";
import ReactCrop, { centerCrop, convertToPixelCrop, Crop, makeAspectCrop, PixelCrop } from "react-image-crop";
import Button from "../Button";
import { setCanvasPreview } from "~/app/setCanvasPreview";

export default function ImageCropper({
    src,
    handleUpdated,
    userAspectRatio,
    circular,
    heightPercent = 0,
  }: {
    heightPercent?: number;
    src: string;
    handleUpdated: (updated: string) => void;
    userAspectRatio: number;
    circular: boolean;
  }) {
    const [crop, setCrop] = useState<Crop>();
    const [aspect, setAspect] = useState<number>(userAspectRatio);
    const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
  
    const imageRef = useRef<null | HTMLImageElement>(null);
    const previewCanvasRef = useRef<null | HTMLCanvasElement>(null);
  
    useEffect(() => {
      console.log(completedCrop);
    }, [completedCrop]);
  
    const onImageLoad = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (aspect) {
        const { width, height } = e.currentTarget;
        setCrop(centerAspectCrop(width, height, aspect, heightPercent));
      }
    };
  
    return (
      <>
        <ReactCrop
          aspect={aspect}
          circularCrop={circular}
          onChange={(_, percentCrop) => setCrop(percentCrop)}
          crop={crop}
          onComplete={(c) => console.log(c)}
        >
          <img src={src} ref={imageRef} onLoad={onImageLoad} />
        </ReactCrop>
        <div className="flex w-full justify-end gap-2">
          <Button variant="secondary">Cancel</Button>
          <Button
            className="bg-blue-600 hover:bg-blue-600 hover:bg-opacity-50"
            onClick={() => {
              if (!imageRef.current || !previewCanvasRef.current || !crop) return;
              setCanvasPreview(
                imageRef.current,
                previewCanvasRef.current,
                convertToPixelCrop(
                  crop,
                  imageRef.current?.width,
                  imageRef.current?.height,
                ),
              );
              const dataUrl = previewCanvasRef.current.toDataURL();
              handleUpdated(dataUrl);
            }}
          >
            Save
          </Button>
        </div>
  
        {crop && (
          <canvas
            ref={previewCanvasRef}
            className="mt-4"
            style={{
              border: "1px solid black",
              objectFit: "contain",
              width: 999,
              height: 126,
              display: "none",
            }}
          />
        )}
      </>
    );
  }

  function centerAspectCrop(
    mediaWidth: number,
    mediaHeight: number,
    aspect: number,
    heightPercent: number,
  ) {
    if (heightPercent) {
      return centerCrop(
        makeAspectCrop(
          { unit: "%", height: heightPercent },
          aspect,
          mediaWidth,
          mediaHeight,
        ),
        mediaWidth,
        mediaHeight,
      );
    } else {
      return centerCrop(
        makeAspectCrop(
          { unit: "%", width: 100 },
          aspect,
          mediaWidth,
          mediaHeight,
        ),
        mediaWidth,
        mediaHeight,
      );
    }
  }