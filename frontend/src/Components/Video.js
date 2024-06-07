import React from "react";
import YouTube from "react-youtube";

const VideoList = () => {
  const videoData = [
    {
      id: "L-jXxX1h1d4",
    },
    {
      id: "0i7NS4UMfqM",
    },

  ];
  const opts = {
    height: "100%", // These values are overridden by className, but are necessary
    width: "100%", // to prevent console warnings or errors.
  };

  return (
    <>
      <h1
        id="testimonials"
        className="text-5xl text-center font-bold mt-10 mb-10"
      >
        Take a look at some of our 100+ successful student testimonials!
      </h1>
      <div className="flex justify-center items-center py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 w-4/5">
          {videoData.map((video, index) => (
            <div key={index} className="">
              <YouTube
                videoId={video.id}
                className="w-full h-[500px] h-[400px]"
                opts={opts}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default VideoList;
