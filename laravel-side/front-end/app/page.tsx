'use client'
import MainSlider from "@/components/main slider/MainSlider"
import React from "react"
import axios from "axios"

export default function Home() {

    const testRequest = async () => {
        await axios.get("http://127.0.0.1:8000/api/categories")
        .then(function(res) {
            console.log(res)
            
        })
        .catch(function(err) {
            console.log(err)
        })
    }

    return (
        <main className="">
            <MainSlider />
            <button onClick={testRequest} className="bg-red-400 p-4 my-4 ml-4">click</button>
        </main>
    )
}
