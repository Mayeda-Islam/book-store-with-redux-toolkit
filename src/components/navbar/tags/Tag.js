import React, { useDebugValue } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tagRemove, tagSelected } from "../../../features/filter/filterSlice";

const Tag = ({ tag }) => {
  const { tags } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  let selected = tags.includes(tag) ? true : false;

  const handleSelect = () => {
    if (selected) {
      dispatch(tagRemove(tag));
    } else dispatch(tagSelected(tag));
  };
  console.log(selected);
  const style = selected
    ? "bg-blue-600 text-blue-100 px-4 py-1 rounded-full cursor-pointer"
    : "bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer";
  return (
    <>
      <div className={style} onClick={handleSelect}>
        {tag}
      </div>
    </>
  );
};

export default Tag;

// <div className="">
// react
// </div>
// <div className="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer">
// redux
// </div>
