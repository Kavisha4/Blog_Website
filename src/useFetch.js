import { useState,useEffect } from "react";
const useFetch=(url)=>{
  const [data, setData] = useState(null);

  const [isPending, setIsPending]=useState(true);
  const [error, setError]=useState(null);


    useEffect(() => {
        setTimeout(()=>{
         fetch(url)
         //So that its not hard coded

         
         .then(res=>{
           console.log(res);
           if(!res.ok)
           {
             throw Error('could not fetch data for that resource');
           }
           return res.json();
         })
         .then((data)=>{
           console.log(data);
           setData(data);
           setIsPending(false);
           setError(null);
         })
         .catch(err=>{
           console.log(err.message);
           setError(err.message);
           setIsPending(false);
         })
        },1000)
       }, [url]);
     
    return {data,isPending,error};
}

export default useFetch;