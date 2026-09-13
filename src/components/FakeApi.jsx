import { useEffect, useState } from "react";
const FetchApi = () => {
    const [storeData, setData] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/")
            .then(res => res.json())
            .then(json => setData(json))
    }, []) // 👈 បន្ថែម [] ដើម្បីកុំឱ្យ Fetch វិលជុំគ្មានទីបញ្ចប់ (Infinite Loop)
    return (
        <>
            <h2>Fetch Api data</h2>
            {
                storeData.map((index) => {
                    return (
                        <div className="border border-1 p-4 flex *:p-4 ">
                            <h2 className="border-2"> Name</h2>
                            <h3>{index.title}</h3>
                            <h2 border-r-2 border-l-1>Title</h2>
                            <p>{index.description}</p>
                        </div>
                    )

                })
            }
        </>
    )
}
export default FetchApi;