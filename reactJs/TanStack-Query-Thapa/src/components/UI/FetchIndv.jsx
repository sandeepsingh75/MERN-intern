import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios';

    const fetchUser = async (param) =>{
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${param.id}`)
        return response.data;
    }

const FetchIndv = () => {
const param = useParams();
console.log("params:", param)

const {data, isLoading, isError, error} = useQuery({
    queryKey:["user", param],
    queryFn:()=>fetchUser(param),
    enabled:!!param
})

console.log("data:", data)

  return (
    <div className='container xl:h-30 xl:w-35 2xl:h-30 2xl:w-35 bg-slate-400 flex flex-col p-2 font-medium border rounded-lg m-auto'>
        <div>
            <span>Name:</span><span className='ml-1'>{data?.name}</span>
        </div>
        <div>
            <span>Email:</span><span className='ml-1'>{data?.email}</span>
        </div>
        <div>
            <span>Phone:</span><span className='ml-1'>{data?.phone}</span>
        </div>
        <div>
            <span>Company:</span><span className='ml-1'>{data?.company.name}</span>
        </div>
    </div>
  )
}

export default FetchIndv
