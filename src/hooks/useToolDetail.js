import { useEffect, useState } from "react";
import { useQuery } from "react-query";

const useToolDetail = (toolId) => {
  const [tool, setTool] = useState({});
  useEffect(() => {
    const url = `https://the-cycle-gear-server-side-project.vercel.app/tool/${toolId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTool(data));
  }, [tool]);

  // const { isLoading, data: tool, refetch } = useQuery('tool', () => fetch(`https://the-cycle-gear-server-side-project.vercel.app/tool/${toolId}`, {
  //     method: 'GET',
  //     headers: {
  //         authorization: `Bearer ${localStorage.getItem('accessToken')}`
  //     }

  // }).then(res => res.json()))
  return [tool];
};
export default useToolDetail;
