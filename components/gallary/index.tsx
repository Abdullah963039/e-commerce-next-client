"use client";

import { Tab } from "@headlessui/react";
import Image from "next/image";

import { GridTab } from "@/components/gallary/grid-tab";
import { Image as ImageType } from "@/types";

interface GallaryProps {
  images: ImageType[];
}

export function Gallary({ images }: GallaryProps) {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-6">
          {images.map((img) => (
            <GridTab key={img.id} image={img} />
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className="aspect-square w-full">
        {images.map((img) => (
          <Tab.Panel key={img.id}>
            <div className="aspect-square relative w-full h-full sm:rounded-lg overflow-hidden">
              <Image
                fill
                src={img.url}
                alt="Image"
                className="object-cover object-center"
              />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}
