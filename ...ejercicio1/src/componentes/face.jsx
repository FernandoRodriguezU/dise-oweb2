import { useEffect, useState } from "react";

const face = () => {
    const [likes, setLikes] = useState(0);
    const [likesImg1, setLikesImg1] = useState(0); 
    const [likesImg2, setLikesImg2] = useState(0); 

    const contarLike = () => {
        setLikes(likes + 1);
    };

    const contarLikeImg1 = () => {
        setLikesImg1(likesImg1 + 1);
    };

    const contarLikeImg2 = () => {
        setLikesImg2(likesImg2 + 1);
    };

    useEffect(() => {
        contarLike();
    }, []);

    return (
        <>
            <h1>{likes}</h1>
            <button onClick={contarLike}>click</button>

            <div>
                <img src="https://www.shutterstock.com/image-illustration/david-street-style-graphic-designtextile-600nw-2265632523.jpg" />
                <h2>Likes: {likesImg1}</h2>
                <button onClick={contarLikeImg1}>Like 1</button>
            </div>
            <div>
                <img src="https://www.shutterstock.com/image-illustration/david-street-style-graphic-designtextile-600nw-2265632523.jpg" />
                <h2>Likes: {likesImg2}</h2>
                <button onClick={contarLikeImg2}>Like 2</button>
            </div>
        </>
    );
}

export default face;