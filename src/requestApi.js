import { useState, useEffect } from 'react'

export function loadContent(keyword){
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    useEffect(()=>{
        async function fetchData() {
            try {
              const response = await fetch(`https://newsapi.org/v2/everything?q=${keyword}&language=es&apiKey=9bc2fbfad1e740dabfe1e4b7bb5dbf8f`);
              const jsonData = await response.json();
              setData(jsonData);
              setLoading(false);
            } finally {
              setLoading(false);
            }
          }
          fetchData();
      
    },[keyword]);
    return {data,loading};
}
