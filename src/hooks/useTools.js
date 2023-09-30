import { useEffect, useState } from "react";

const useTools = () => {
  const [tools, setTools] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // console.log(isLoading)
  useEffect(() => {
    // setIsLoading(true);
    try {
      console.log("hello from usetool");
      setIsLoading(true);
      fetch("https://the-cycle-gear-server-side-project.vercel.app/tool")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setTools(data);
          setIsLoading(false);
          console.log("vitor", isLoading);
        });
    } catch (e) {
      console.log("err", e);
    }
  }, [isLoading]);
  return [tools, setTools, isLoading];
};
export default useTools;
