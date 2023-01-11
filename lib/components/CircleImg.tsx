import React, { FC } from "react";

interface propsCircleImage {
  image: any | undefined | null
  name: String
  onLine?: boolean
}

export const CircleImage: FC<propsCircleImage> = ({ image, name, onLine }) => (
  <>
    <span className="relative">
      <div className="relative w-10 h-10">
        {
          image ?
            <img src={image} alt="avatar" width={46} height={46} className="rounded-full" />
            :
            <p className="bg-red rounded-full w-10 h-10 p-2 text-center">{name?.split(" ")[0]?.slice(0, 1)?.toUpperCase()}{name?.split(" ")[1]?.slice(0, 1)?.toUpperCase()}</p>
        }
      </div>
      {onLine && <svg className="bg-green rounded-full w-3 h-3 absolute bottom-0 right-0 border border-white" />}
    </span>
  </>
);

/* alt={name} */