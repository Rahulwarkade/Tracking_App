"use client"
import React from 'react'
import Image from 'next/image'
import {useRouter} from 'next/navigation'
const Product : React.FC = ()=>{
    const container = [{"productImg":'https://images.unsplash.com/photo-1484788984921-03950022c9ef?q=80&w=2132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',"productName" : "Lenovo ipad"},
        {"productImg":'https://images.unsplash.com/photo-1484788984921-03950022c9ef?q=80&w=2132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',"productName" : "Lenovo ipad"},
        {"productImg":'https://images.unsplash.com/photo-1484788984921-03950022c9ef?q=80&w=2132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',"productName" : "Lenovo ipad"},
        {"productImg":'https://images.unsplash.com/photo-1484788984921-03950022c9ef?q=80&w=2132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',"productName" : "Lenovo ipad"},
        {"productImg":'https://images.unsplash.com/photo-1484788984921-03950022c9ef?q=80&w=2132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',"productName" : "Lenovo ipad"},
        {"productImg":'https://images.unsplash.com/photo-1484788984921-03950022c9ef?q=80&w=2132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',"productName" : "Lenovo ipad"}
    ]
    const router = useRouter();
    const routHandler = ()=>{
        router.push('/orders');
    }
    return (<>
        <section className="w-full h-auto">
            <div className="w-full h-auto py-8 text-center">
                <h1 className="capitalize text-xl font-bold">Your Orders are here</h1>
            </div>
            <div className="w-full h-auto p-4 flex flex-wrap gap-4">       
                    {container.map((product)=>{
                        return (
                <div className="w-[400px] h-auto  rounded-xl overflow-hidden shadow-lg shadow-indigo-500/40 bg-[#A5B4FC] hover:drop-shadow-2xl">
                <div className="w-full h-auto relative rounded-xl shadow-lg overflow-hidden">         
                        <Image
                        src={'https://images.unsplash.com/photo-1484788984921-03950022c9ef?q=80&w=2132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                        width={400}
                        height={400}
                        alt="product image is uploading"
                        />
                        <div className="w-full h-auto flex justify-center items-center flex-col gap-2 py-4">
                            <h2 className="capitalize text-lg font-semibold">laptop</h2>
                            <p className="capitalize font-md">sleek and powerfull </p>
                            <p className="font-md">999$</p>
                            <button onClick={routHandler} type="submit" className="bg-indigo-500 rounded-xl text-center text-white px-2 py-1">Track Order</button>
                        </div>
                        </div>
                        </div>);
                    })}

            </div>
        </section>
    </>)
}

export default Product;