import React from "react";
import Plyr from "plyr-react";
import "plyr-react/dist/plyr.css";

const videoSrc = {
  type: "video",
  sources: [
    {
      src:
        "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4"
    }
  ]
};

// learn more https://github.com/sampotts/plyr#the-source-setter

export default function App() {
  return (
    <div>
      <MyComponent />
    </div>
  );
}

export const MyComponent = () => {
  return (
    <>
      <Plyr source={videoSrc} />
    </>
  );
};
