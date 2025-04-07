import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useSWR from "swr";

const fetcher = url => fetch(url).then(response => response.json()).then((data) => {
  try{
  const users=data.users;
   return users.map((item) =>({
    title:item.firstName,
    files:item.id,
  }))
}
catch(error){
console.log(error);
return[];
}
})

export const useFetchMaterials = () =>{
  console.log("working");
  return useSWR("https://dummyjson.com/users",fetcher)
}

// const fetchMaterials = async () =>{
//   try{
//     const response =await axios.get("https://dummyjson.com/users");
//     console.log("api hit");
//     const data=response.data.users;
//     console.log(response.data.users);

//      return data.map((item) =>({
//       title:item.firstName,
//       files:item.id,
//     }))
//   }
//   catch(error){
//   console.log(error);
//   return[];
//   }
// }

// export const useFetchMaterials = ()=>{
//   return useQuery({
//     queryKey : ["userss"],
//     queryFn : fetchMaterials,
//   })

// }

// import axios from "axios";
// let result=[];

// export const fetchMaterials = async () =>{
//   try{
//     const response =await axios.get("https://dummyjson.com/users");
//     console.log("api hit");
//     const users=response.data.users;
//     console.log(response.data.users);

//      result=users.map((item) =>({
//       title:item.firstName,
//       files:item.id,
//     }))
//   }
//   catch(error){
//   console.log(error);
//   }
//   return result;
// }




// export const materials = [
//     {
//       title: "File 1",
//       files: "32 files",
//     },
//     {
//       title: "File 2",
//       files: "32 files",
//     },
//     {
//       title: "File 3",
//       files: "32 files",
//     },
//     {
//       title: "File 4",
//       files: "32 files",
//     },
//     {
//       title: "File 5",
//       files: "32 files",
//     },
//     {
//       title: "File 6",
//       files: "32 files",
//     },
//     {
//       title: "File 7",
//       files: "32 files",
//     },
//     {
//       title: "Folder 8",
//       files: "32 files",
//     },
//     {
//       title: "File 9",
//       files: "32 files",
//     },
//     {
//       title: "File 10",
//       files: "32 files",
//     },
//     {
//       title: "File 11",
//       files: "32 files",
//     },
//     {
//       title: "File 12",
//       files: "32 files",
//     },
//     {
//       title: "File 13",
//       files: "32 files",
//     },
//     {
//       title: "File 14",
//       files: "32 files",
//     },
//   ]