import React, { FC } from "react";


interface propsMessageFile {
  emisor: boolean;
}
export const MessageFile: FC<propsMessageFile> = ({ emisor }) => (
  <>
    <div className="flex gap-10 w-full">
      <div className="flex gap-4">
        <div className="file w-10 h-10" />
        <span className={emisor ? "text-white" : "text-gray-700"}>
          <p className="text-sm ">FileImage.jpg</p>
          <p className="text-xs">2 mb</p>
        </span>
      </div>
      <div className="flex gap-3 items-center">
      </div>
    </div>
    <style >
      {`
          .file {
            background-image: url("/file.svg");
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
          }
        `}
    </style>
  </>
);
