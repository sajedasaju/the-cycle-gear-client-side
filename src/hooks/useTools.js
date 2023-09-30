import { useEffect, useState } from "react";

const useTools = () => {
  const [tools, setTools] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    try {
      fetch("https://the-cycle-gear-server-side-project.vercel.app/tool")
        .then((response) => response.json())
        .then((data) => {
          setTools(data);
          setIsLoading(false);
        });
    } catch (e) {
      console.log("err", e);
    }
  }, []);
  return [tools, setTools, isLoading];
};
export default useTools;
