
import Product from '../assets/image.png'


function Card({ image, title, price, des }) {
    const products = [
        {
            image: Product,
            title: "product 1",
            price: 200,
            des: "ladfgjklfs;rkdz'slmvcx,tsdsf'k;rd"
        },
        {
            image: Product,
            title: "product 1",
            price: 200,
            des: "ladfgjklfs;rkdz'slmvcx,tsdsf'k;rd"
        },
        {
            image: Product,
            title: "product 1",
            price: 200,
            des: "ladfgjklfs;rkdz'slmvcx,tsdsf'k;rd"
        },
        {
            image: Product,
            title: "product 1",
            price: 200,
            des: "ladfgjklfs;rkdz'slmvcx,tsdsf'k;rd"
        },
        {
            image: Product,
            title: "product 1",
            price: 200,
            des: "ladfgjklfs;rkdz'slmvcx,tsdsf'k;rd"
        },
        {
            image: Product,
            title: "product 1",
            price: 200,
            des: "ladfgjklfs;rkdz'slmvcx,tsdsf'k;rd"
        },
        {
            image: Product,
            title: "product 1",
            price: 200,
            des: "ladfgjklfs;rkdz'slmvcx,tsdsf'k;rd"
        },
        {
            image: Product,
            title: "Product 2",
            price: 350,
            des: "Modern and stylish item designed for everyday comfort."
        }
    ]

    return (

        <>
            {/* <div className='min-h-screen bg-slate-900 text-white p-8 flex justify-center items-center'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full'>
                {products.map((index)=>{
                    return(
                        <div>
                            <div>
                                <img src={index.image} alt="" />
                            </div>
                            <div>
                                <p>{index.title}</p>
                            </div>
                            <h2>{index.price}</h2>
                        </div>
                    )
                })}
            </div>
        </div> */}
            <div className='min-h-screen bg-slate-900 text-white p-8 flex justify-center items-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full'>


                    <div>
                        <div>
                            <img src={image} alt="" />
                        </div>
                        <div>
                            <p>{title}</p>
                            <p>{price}</p>
                        </div>
                        <h2>{des}</h2>
                        
                    </div>


                </div>
            </div>
        </>
    )
}

export default Card