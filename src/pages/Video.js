import React, { useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import RelatedVideoList from "../components/list/RelatedVideoList";
import VideoPlayer from "../components/description/VideoPlayer";
import VideoDescription from "../components/description/VideoDescription";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideo } from "../features/video/videoSlice";
import { useParams } from "react-router-dom";
import Loading from "../components/ui/Loading";

const Video = () => {
  const { isLoading, isError, error, video } = useSelector(
    (state) => state.video
  );
  const { videoId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVideo(videoId));
  }, [dispatch, videoId]);

  const { link, title, id, tags } = video || {};

  let content;
  if (isLoading) {
    content = <Loading />;
  }
  if (!isLoading && isError) {
    content = <div className="col-span-2">{error}</div>;
  }
  if (!isLoading && !isError && Object.keys(video).length === 0) {
    content = <div className="col-span-2">No video found</div>;
  }
  if (!isLoading && !isError && Object.keys(video).length > 0) {
    content = (
      <section className="pt-6 pb-20">
        <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          <div className="grid grid-cols-3 gap-2 lg:gap-8">
            <div className="col-span-full w-full space-y-8 lg:col-span-2">
              <VideoPlayer link={link} title={title} />

              <VideoDescription video={video} />
            </div>

            <RelatedVideoList currentId={id} tags={tags} />
          </div>
        </div>
      </section>
    );
  }
  return <>{content}</>;
};

export default Video;
