import React, { useEffect } from "react";
import RelatedVideoListItem from "./RelatedVideoListItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedVideo } from "../../features/relatedVideos/relatedVideosSlice";
import Loading from "../ui/Loading";

const RelatedVideoList = ({ currentId, tags }) => {
  const { isLoading, relatedVideos, isError, error } = useSelector(
    (state) => state.relatedVideos
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRelatedVideo({ id: currentId, tags }));
  }, [dispatch, currentId, tags]);

  let content;
  if (isLoading) {
    content = <Loading />;
  }
  if (!isLoading && isError) {
    content = <div className="col-span-2">{error}</div>;
  }
  if (!isLoading && !isError && relatedVideos.length === 0) {
    content = <div className="col-span-2">No related video found</div>;
  }
  if (!isLoading && !isError && relatedVideos.length > 0) {
    content = relatedVideos?.map((video) => (
      <RelatedVideoListItem video={video} key={video.id} />
    ));
  }
  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {content}
    </div>
  );
};

export default RelatedVideoList;
