import { useEffect, useState } from "react";

const useHttp = (url,arg1) => {
    const [result,setResult] = useState([]);

    useEffect(() => {    
        const getResult = async () => {
          const response = await fetch(url);
          const data = await response.json();
    
          const items = Object.values(data.data).map(
            arg1
          );
          setResult(items);
        };
        getResult();
      }, []);

      return result;
}

export default useHttp;