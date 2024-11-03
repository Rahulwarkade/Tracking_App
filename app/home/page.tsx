'use client'
import React,{useState,useEffect} from 'react';
import axios from '@/utils/axios';
import useSWR from 'swr';

const fetcher = (url : string)=>axios(url).then((res)=>res.data.users);
const about : React.FC = ()=>{
    const {data,err} = useSWR('/',fetcher);

    console.log(data);

    return (<div>
        <main>
            <h1>All users</h1>
            <ul>
            {
                data && data.map((user)=>{
                    return <li key={user.id}>{user.firstName}</li>;
                })
            }
            </ul>
        </main>
    </div>);
}

export default about;