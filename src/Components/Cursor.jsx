import { motion } from 'framer-motion';
import React, { useEffect, useState} from 'react';


export default function Cursor ({clickToSee}) {

    const [onText, setOnText] = useState(false);
    
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;

    const [mousePosition, setMousePosition] = useState({
        x: screenWidth/2,
        y: screenHeight/2 +90
    });

    const [cursorVariant, setCursorVariant] = useState("default");

    useEffect(()=>{
        const mouseMove = e => {

            setMousePosition({
            x: e.clientX,
            y: e.clientY
            })
        }

        window.addEventListener("mousemove", mouseMove);

        return () =>{
            window.removeEventListener("mosemove", mouseMove);
        }

    });

    const variants = {
        default: {
            x:mousePosition.x - 16,
            y:mousePosition.y - 16,
            backgroundColor: "rgb(255, 255, 255)"
        },
        text: {
            height: 250,
            width: 250,
            x:mousePosition.x - 125,
            y:mousePosition.y - 125,
            backgroundColor: "#FFE5B4",
            opacity: 0.8,
            mixBlendMode: "hue"
        }
    }

    const textEnter = () => {
        setCursorVariant('text');
        setOnText(true);
    };
    const textLeave = () => {
        setCursorVariant('default');
        setOnText(false);
    }
    return (
        <>
            <div  className="z-10 h-2/3 w-full flex flex-col justify-between">
                <div className="text-center text-black flex flex-col items-center relative top-0">
                    <p className='maintext font-bold leading-none cursor-default text-slate-800' onMouseEnter={textEnter} onMouseLeave={textLeave}>EZSTART</p>
                    <span className='subtitle'><p className='text-xl md:text-4xl font-semibold text-slate-600'>SMART GUITAR-PLAYING ASSISTANT</p></span>
                    {/* <div className="lanscape:text-sm portrait:text-xl md:text-3xl mt-10 text-black glass rounded-md md:rounded-xl p-2 lg:p-7 font-bold">@sadhighkid</div> */}
                </div>
                <div className="text-black text-2xl font-semibold text-center mb-24 lg:mb-4 hover:text-3xl transition-all underline" onClick={clickToSee}>
                    <p className="cursor-pointer">Let`s see!</p>
                </div>   
            </div>
            {onText && 
                    <motion.div
                    className="cursor hidden lg:flex"
                    variants={variants}
                    animate={cursorVariant}
                    style={{backgroundColor: "rgb(255, 255, 255)"}}
                    />
            }

        </>

    )
}