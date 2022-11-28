import React from 'react'
import axios from "axios"
import { useState, useEffect, useRef } from "react";
import UserBox from './userBox'
import SpinnerX from '../components/Spinner'
function Home() {
    const [data, setData] = useState([]);
    const [id, setId] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const instance = axios.create({
        baseURL: "https://dummyjson.com/",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "app-id": "63104c3120f6e665ecf628ba",
        },
      });
      const getData = async () => {
        setIsLoading(true);
        const response = await instance.get(`products`);
        setData(response.data.products);
        setIsLoading(false);
      };
      const getDataById = async () => {
        const response = await instance.get(`/products/${id}`);
        setData([response.data]);
      };
      const handleDelete = async () => {
        const response = await instance.delete(`products/${id}`)
        .then(res => {
          console.log("DELETED SUCCESS",res.data);
        })
        .catch(error => {
          console.log(error);
        })
      };
      const newProducts = {
        title : 'iphone 9plus',
      }
      const handleUpdate = async () => {
        const response = await instance.post(`products/${id}`, newProducts)
        .then(res => {
          console.log("UPDATED SUCCESS",res.data);
        })
        .catch(error => {
          console.log(error);
        })
      }
     
    
      useEffect(() => {
        getData();
      }, []);

      return (
    <>
        <div>
            <input type="text" onChange={(e) => setId(e.target.value)} style={{height:"35px", width:"50vw"}}></input>
           <button onClick={getDataById} style={{height:"42px", width:"60px", backgroundColor:"dark-gray", marginLeft:"15px" }}>Get</button>
           <button onClick={handleDelete}  style={{height:"42px", width:"60px", backgroundColor:"dark-gray", marginLeft:"15px" }}>Delete</button>
           <button onClick={handleUpdate}  style={{height:"42px", width:"80px", backgroundColor:"dark-gray", marginLeft:"15px" }}>Update</button>
        </div>
     


      

      {data &&
        isLoading ? (
          <SpinnerX/>
        ) : 
        data.map((products, id) => {
          return <UserBox products={products} key={id}/>;
        })}
    </>
  )
}

export default Home