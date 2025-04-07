import useSWR from "swr";
import axios from "axios";

// const fetchData = async (url) =>{
//   try{
//     const response =await axios.get(url);
//     const data=response.data.quotes;
//     console.log(response.data.quotes);

//      return data.map((item) =>({
//       title:item.author,
//       files:item.id,
//     }))
//   }
//   catch(error){
//   console.log(error);
//   return[];
//   }
// }

// const fetcher = url => axios.get(url).then( response =>{
//   try{
//     const data=response.data.quotes;
//     console.log(response.data.quotes);

//      return data.map((item) =>({
//       title:item.author,
//       files:item.id,
//     }))
//   }
//   catch(error){
//   console.log(error);
//   return[];
//   }
// })

const fetcher = url => fetch(url).then(response => response.json()).then((data) => {
    try{
    const quotes=data.quotes;
     return quotes.map((item) =>({
      title:item.author,
      files:item.id,
    }))
  }
  catch(error){
  console.log(error);
  return[];
  }
})

  export const useFetchData = () =>{
    console.log("working");
    return useSWR("https://dummyjson.com/quotes",fetcher)
  }


// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

// const fetchData = async () =>{
//   try{
//     const response =await axios.get("https://dummyjson.com/quotes");
//     console.log("without callback");
//     console.log("api hit");
//     const data=response.data.quotes;
//     console.log(response.data.quotes);

//      return data.map((item) =>({
//       title:item.author,
//       files:item.id,
//     }))
//   }
//   catch(error){
//   console.log(error);
//   return[];
//   }
// }

// export const useFetchData = ()=>{
//   return useQuery({
//     queryKey : ["quoatesss"],
//     queryFn : fetchData,
//   })

// }
