import React from "react";

import { HeadProps } from "./types";

const Head: React.FC<HeadProps> = ({ title, description = "" }) => {
  React.useEffect(() => {
    document.title = `Reserve.io - ${title}`;
    document
      .querySelector("meta[name='description']")
      ?.setAttribute("content", description);
  }, [description, title]);

  return <></>;
};

export default Head;
