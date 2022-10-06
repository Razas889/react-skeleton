import React from "react";
import "./styles.scss";
export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
    type: "text" | "title" | "thumbnail" | "avatar"  | "box";
    count?: number;
}
interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
    count?: number;
}
declare function Skeleton({ type, ...props }: SkeletonProps): JSX.Element;
declare namespace Skeleton {
    var Text: ({ count, ...props }: ItemProps) => JSX.Element;
    var Title: ({ count, ...props }: ItemProps) => JSX.Element;
    var Avatar: ({ count, ...props }: ItemProps) => JSX.Element;
    var Thumbnail: ({ count, ...props }: ItemProps) => JSX.Element;
    var Box: ({ count, ...props }: ItemProps) => JSX.Element;
}
export default Skeleton;
