"use client";

import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import ColorTag from "@/app/components/tag/colorTag";

export const Slider = ({firstImageLink, secondImageLink}: {firstImageLink:string, secondImageLink:string}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const getPercent = (clientX: number, rect: DOMRect) => {
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    return Math.max(0, Math.min((x / rect.width) * 100, 100));
  };


  const handleMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isDragging) return;
    const rect = event.currentTarget.getBoundingClientRect();
    setSliderPosition(getPercent(event.clientX, rect));
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = event.currentTarget.getBoundingClientRect();
    setSliderPosition(getPercent(event.touches[0].clientX, rect));
  };


  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleTouchStart = () => setIsDragging(true);
  const handleTouchEnd = () => setIsDragging(false);


  return (
    <div className="w-full relative" onMouseUp={handleMouseUp}  onTouchEnd={handleTouchEnd}>
      <div
        className="relative w-full shadow-sm rounded-lg aspect-70/45 m-auto overflow-hidden select-none"
        onMouseMove={handleMove}
        onMouseDown={handleMouseDown}
        onTouchMove={handleTouchMove}
        onTouchStart={handleTouchStart}
      >
        <Image
          alt="logo"
          fill
          draggable={false}
          priority
          src={`/${firstImageLink}`}
          sizes="100vw"
        />

        <div
          className="absolute top-0 left-0 right-0 w-full aspect-70/45 m-auto overflow-hidden select-none"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            fill
            priority
            draggable={false}
            alt="logo"
            className="bg-bg-primary object-contain"
            src={`/${secondImageLink}`}
          />
        </div>

        <div
          className="absolute top-0 bottom-0 w-0.5 bg-button-outline-border cursor-ew-resize"
          style={{
            left: `calc(${sliderPosition}% - 1px)`,
          }}
        >
          <div className=" border-2 border-button-outline-border bg-white absolute rounded-full h-10 w-10 -left-5 top-[calc(50%-10px)] flex items-center justify-center">
            <IoIosArrowBack className="text-text-secondary text-sm"/>
            <IoIosArrowForward  className="text-text-secondary text-sm"/>
          </div>
        </div>
        
       <div className="absolute top-4 left-2">
        <ColorTag title="Avant" />
      </div>
      <div className="absolute top-4 right-2">
        <ColorTag title="Après" />
      </div>
      </div>
    </div>
  );
};