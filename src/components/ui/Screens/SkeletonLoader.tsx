import { SkeletonProps } from "@mui/material";
import React, { FC } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import cn from "classnames";

const SkeletonLoader: FC<SkeletonProps> = ({ className, ...rest }) => {
  return (
    <Skeleton
      count={3}
      {...rest}
      baseColor="#FAFAFA"
      highlightColor="#6366F1"
      className={cn("rounded-lg", className)}
    />
  );
};

export default SkeletonLoader;
