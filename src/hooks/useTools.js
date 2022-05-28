import { useEffect, useState } from "react";

const useTools = () => {
    const [tools, setTools] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    // console.log(isLoading)
    useEffect(() => {
        // setIsLoading(true);
        fetch('https://protected-anchorage-05977.herokuapp.com/tool')
            .then((response) => response.json())
            .then((data) => {

                setTools(data)
                setIsLoading(false);
                // console.log("vitor", isLoading)


            });

    }, [tools])
    return [tools, setTools, isLoading]
}
export default useTools;