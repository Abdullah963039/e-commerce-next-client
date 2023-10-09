import Image from "next/image";
import { Tab } from "@headlessui/react";

import { cn } from "@/lib/utils";
import { Image as ImageType } from "@/types";

interface GridTabProps {
  image: ImageType;
}

export function GridTab({ image }: GridTabProps) {
  return (
    <>
      <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
        {({ selected }) => (
          <div>
            <span className="absolute w-full h-full aspect-square inset-0 overflow-hidden rounded-md">
              <Image
                fill
                src={image.url}
                alt="img"
                className="object-cover object-center"
              />
            </span>
            <span
              className={cn(
                "absolute inset-0 rounded-md ring-2 ring-offset-2",
                selected ? "ring-black" : "ring-transparent"
              )}
            />
          </div>
        )}
      </Tab>
    </>
  );
}
