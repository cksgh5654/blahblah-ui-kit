import { FC } from "react";
import { ListProps } from "../types/types";

const List: FC<ListProps> = ({ children, className }) => {
  return (
    <ul
      className={
        className ? `tabs-list-container ${className}` : "tabs-list-container"
      }
    >
      {children}
    </ul>
  );
};

export default List;
