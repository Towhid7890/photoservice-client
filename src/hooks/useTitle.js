import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title}-Picman`;
  }, [title]);
};

export default useTitle;
