"use client";
import React from "react";
import VideoItem from "./VideoItem";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const SectionReels = () => {
  const videoSources = [
    "https://utfs.io/f/ae208f80-94c3-4313-a1bd-e2523737c290-5t9171.mp4",
    "https://utfs.io/f/ebb86415-4ce0-461d-8284-686d692bcfe5-e9k8tc.mp4",
    "https://utfs.io/f/e9ad7e2f-45a5-4e70-907f-2bea15c16717-ocucs1.mp4",
    "https://utfs.io/f/a2e68b7e-861f-470d-aeae-ed699c08b319-a7jhf9.mp4",
    "https://utfs.io/f/5018e243-99cd-45b9-a127-bf9b5d08f5e1-e9k8tg.mp4",
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-center mb-8 uppercase">
        Reels
      </h1>
      <div className="hidden xl:grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {videoSources.map((src, index) => (
          <VideoItem key={index} src={src} />
        ))}
      </div>
      <div className="block xl:hidden">
        <Carousel className="relative">
          <CarouselContent>
            {videoSources.map((src, index) => (
              <CarouselItem
                key={index}
                className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <VideoItem src={src} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute -left-5 top-50%" />
          <CarouselNext className="absolute -right-5 top-50%" />
        </Carousel>
      </div>
    </div>
  );
};

export default SectionReels;
