import { useEffect, useState } from "react";

const useTools = () => {
  const [tools, setTools] = useState([]);
  const [isLoadingTools, setIsLoadingTools] = useState(true);
  console.log(isLoadingTools);
  useEffect(() => {
    try {
      fetch("https://the-cycle-gear-server-side-project.vercel.app/tool")
        .then((response) => response.json())
        .then((data) => {
          setTools(data);
          setIsLoadingTools(false);
        });
    } catch (e) {
      console.log("err", e);
    }
  }, []);
  return [tools, isLoadingTools];
};
export default useTools;
