import HeartButton from "./HeartButton"
import CommentButton from "./CommentButton"
import IconButton from "./IconButton"
import {Post} from "../interfaces/Post"
import { useState } from "react"



const PostCard = (item:Post) => {
    const [swapActive, setSwapActive] = useState("swap-active");

    const handleClick = () => {
        if(swapActive===""){
            setSwapActive("swap-active");
            return
        }
        setSwapActive("");
    };
    return (
        <>
            {
                        <div className="card bg-base-100 w-96 shadow-xl justify-center">
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{item.title}</h2>
                                <p>{item.description}</p>
                                <p>{item.postedDateFormatted}</p>
                                <div className="card-actions justify-between flex">
                                    <IconButton icon={<HeartButton swap_off="swap-off" swap_on="swap-on" swap_active={swapActive}></HeartButton>} 
                                        className="btn btn-ghost"
                                        num={item.countLikes}
                                        onclick={handleClick}
                                    >
                                    </IconButton>
                                    <IconButton icon={<CommentButton/>} className="btn btn-ghost pointer-events-none" 
                                        num={item.countComments}
                                    >
                                    </IconButton>
                                    <button className="btn btn-primary">
                                        Ver más
                                    </button>
                                </div>
                            </div>
                        </div>
                    
                
            }
            {/* <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-between flex">
                    <IconButton icon={<HeartButton></HeartButton>} className="btn btn-ghost"></IconButton>
                    <IconButton icon={<CommentButton></CommentButton>} className="btn btn-ghost pointer-events-none"></IconButton>
                    <button className="btn btn-primary">Ver más</button>
                </div>
            </div> */}
            </>
    )
}

export default PostCard