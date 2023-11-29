import React, { useEffect } from "react";
import VideoGridItem from "./VideoGridItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../features/videos/videoSlice";
import Loading from "../ui/Loading";

const VideoGrid = () => {
  const { search, tags } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  //state
  const { videos, isLoading, isError, error } = useSelector(
    (state) => state.videos
  );
  //dispatch the action and render render dispatch every time the ui refresh
  useEffect(() => {
    dispatch(fetchVideos({ tags, search }));
  }, [dispatch, tags, search]);
  let content;
  if (isLoading) {
    content = <Loading />;
  }
  if (!isLoading && isError) {
    content = <div className="col-span-2">{error}</div>;
  }
  if (!isLoading && !isError && videos?.length === 0) {
    content = <div className="col-span-2">No video found</div>;
  }
  if (!isLoading && !isError && videos?.length > 0) {
    content = videos?.map((video) => (
      <VideoGridItem key={video.id} video={video} />
    ));
  }

  console.log(videos, isLoading, isError, error);
  return (
    <section className="pt-12">
      <section className="pt-12">
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
          {content}
        </div>
      </section>
    </section>
  );
};

export default VideoGrid;
