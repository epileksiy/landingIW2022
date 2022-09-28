import React, {useRef, useState} from 'react';
import Cursor from './Cursor';
import '../App.scss';

export default function Content ({stProjects,stSeeProjects}) {
    const [projects, seeProjects] = useState(false);


    let myRef = useRef();

    const projectsbutton = () => {
        seeProjects(!projects);
        if(!projects){
            setTimeout(()=>{
                window.scrollTo({
                    top: window.innerHeight/2,
                    left: 0,
                    behavior: "smooth"
                });
            },100);
        }

    };

    return(
      <>
        <div className="z-10 h-auto w-full flex flex-col">
            <div className="h-screen w-full">
                <div className="h-1/3 w-full">
                    <div className="z-100 landscape:lg:left-3/4 p-4 absolute flex flex-row landscape:lg:flex-col landscape:flex-row landscape:left-1/2 flex-wrap">

                        <div className="p-2 w-1/2 md:w-auto text-md sm:text-xl md:text-xl font-semibold text-black flex flex-row items-center justify-center lg:justify-center md:justify-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6 lg:h-8 lg:w-8' viewBox="0 0 512 512">
                            <path fill="#000" d="M256,49.471c67.266,0,75.233.257,101.8,1.469,24.562,1.121,37.9,5.224,46.778,8.674a78.052,78.052,0,0,1,28.966,18.845,78.052,78.052,0,0,1,18.845,28.966c3.45,8.877,7.554,22.216,8.674,46.778,1.212,26.565,1.469,34.532,1.469,101.8s-0.257,75.233-1.469,101.8c-1.121,24.562-5.225,37.9-8.674,46.778a83.427,83.427,0,0,1-47.811,47.811c-8.877,3.45-22.216,7.554-46.778,8.674-26.56,1.212-34.527,1.469-101.8,1.469s-75.237-.257-101.8-1.469c-24.562-1.121-37.9-5.225-46.778-8.674a78.051,78.051,0,0,1-28.966-18.845,78.053,78.053,0,0,1-18.845-28.966c-3.45-8.877-7.554-22.216-8.674-46.778-1.212-26.564-1.469-34.532-1.469-101.8s0.257-75.233,1.469-101.8c1.121-24.562,5.224-37.9,8.674-46.778A78.052,78.052,0,0,1,78.458,78.458a78.053,78.053,0,0,1,28.966-18.845c8.877-3.45,22.216-7.554,46.778-8.674,26.565-1.212,34.532-1.469,101.8-1.469m0-45.391c-68.418,0-77,.29-103.866,1.516-26.815,1.224-45.127,5.482-61.151,11.71a123.488,123.488,0,0,0-44.62,29.057A123.488,123.488,0,0,0,17.3,90.982C11.077,107.007,6.819,125.319,5.6,152.134,4.369,179,4.079,187.582,4.079,256S4.369,333,5.6,359.866c1.224,26.815,5.482,45.127,11.71,61.151a123.489,123.489,0,0,0,29.057,44.62,123.486,123.486,0,0,0,44.62,29.057c16.025,6.228,34.337,10.486,61.151,11.71,26.87,1.226,35.449,1.516,103.866,1.516s77-.29,103.866-1.516c26.815-1.224,45.127-5.482,61.151-11.71a128.817,128.817,0,0,0,73.677-73.677c6.228-16.025,10.486-34.337,11.71-61.151,1.226-26.87,1.516-35.449,1.516-103.866s-0.29-77-1.516-103.866c-1.224-26.815-5.482-45.127-11.71-61.151a123.486,123.486,0,0,0-29.057-44.62A123.487,123.487,0,0,0,421.018,17.3C404.993,11.077,386.681,6.819,359.866,5.6,333,4.369,324.418,4.079,256,4.079h0Z"/>
                            <path fill="#000" d="M256,126.635A129.365,129.365,0,1,0,385.365,256,129.365,129.365,0,0,0,256,126.635Zm0,213.338A83.973,83.973,0,1,1,339.974,256,83.974,83.974,0,0,1,256,339.973Z"/>
                            <circle fill="#000" cx="390.476" cy="121.524" r="30.23"/>
                        </svg>
                        <a className='ml-5 cursor-pointer text-slate-600' href="https://www.instagram.com/sadhighkid/">@sadhighkid</a>
                        </div>

                        <div className="p-2 w-1/2 md:w-auto text-md sm:text-xl md:text-xl font-semibold text-black flex flex-row items-center justify-center lg:justify-center md:justify-start">
                        <svg className='h-6 w-6 lg:h-8 lg:w-8' viewBox="0 0 23 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M11.131 12.9698H12.4732C12.4732 12.9698 12.8785 12.9251 13.0858 12.7021C13.2763 12.4972 13.2702 12.1126 13.2702 12.1126C13.2702 12.1126 13.2439 10.3116 14.0797 10.0464C14.9039 9.78495 15.9619 11.7869 17.0834 12.5568C17.9314 13.1392 18.5759 13.0117 18.5759 13.0117L21.5748 12.9698C21.5748 12.9698 23.1435 12.873 22.3996 11.6396C22.3387 11.5389 21.9663 10.7273 20.1698 9.05976C18.2893 7.31443 18.5413 7.59681 20.8064 4.57784C22.1859 2.73929 22.7373 1.61691 22.5649 1.13622C22.4008 0.678222 21.3861 0.799206 21.3861 0.799206L18.0097 0.820081C18.0097 0.820081 17.7591 0.786001 17.5736 0.897021C17.3922 1.00559 17.2757 1.25926 17.2757 1.25926C17.2757 1.25926 16.7411 2.68188 16.0286 3.89195C14.5251 6.44494 13.9238 6.58007 13.6781 6.42129C13.1063 6.05178 13.2492 4.93715 13.2492 4.14507C13.2492 1.67084 13.6244 0.639239 12.5184 0.372206C12.1514 0.283643 11.881 0.225049 10.9423 0.215481C9.73747 0.203224 8.71797 0.219198 8.14057 0.502045C7.75643 0.690163 7.46006 1.10925 7.64067 1.13337C7.86389 1.1631 8.36918 1.26978 8.63708 1.63431C8.98319 2.10519 8.97109 3.16226 8.97109 3.16226C8.97109 3.16226 9.16996 6.07479 8.50676 6.43647C8.05169 6.68461 7.42732 6.17806 6.08686 3.86182C5.40018 2.6754 4.88153 1.36379 4.88153 1.36379C4.88153 1.36379 4.78166 1.11874 4.60327 0.98756C4.38693 0.828621 4.08463 0.778251 4.08463 0.778251L0.87596 0.799206C0.87596 0.799206 0.394397 0.812648 0.21743 1.02212C0.0599932 1.20857 0.204858 1.59374 0.204858 1.59374C0.204858 1.59374 2.71672 7.47068 5.56118 10.4323C8.16959 13.148 11.131 12.9698 11.131 12.9698Z" fill="black"/>
                        </svg>

                        <a className='ml-5 cursor-pointer text-slate-600' href="https://vk.com/kotcovalexey">Kotcov Alexey</a>
                        </div>

                        <div className="p-2 w-1/2 md:w-auto text-xl md:text-xl font-semibold text-black flex flex-row items-center lg:justify-center justify-center md:justify-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6 lg:h-8 lg:w-8' viewBox="0 0 24 24" fill='#000'><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        <a className='ml-3 cursor-pointer text-slate-600' href="https://github.com/epileksiy ">epileksiy</a>
                        </div>

                        <div className="p-2 w-1/2 md:w-auto text-md sm:text-xl md:text-xl font-semibold text-black flex flex-row items-center justify-center lg:justify-center md:justify-start">
                        <svg className='h-6 w-6 lg:h-8 lg:w-8' viewBox="0 0 24 20" fill="#000" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M18.384 19.779C18.706 20.007 19.121 20.064 19.491 19.924C19.861 19.783 20.133 19.467 20.215 19.084C21.084 15 23.192 4.66303 23.983 0.948026C24.043 0.668026 23.943 0.377026 23.723 0.190026C23.503 0.00302622 23.198 -0.0509739 22.926 0.0500261C18.733 1.60203 5.82003 6.44703 0.542032 8.40003C0.207032 8.52403 -0.0109684 8.84603 3.16428e-05 9.19903C0.0120316 9.55303 0.250032 9.86003 0.593032 9.96303C2.96003 10.671 6.06703 11.656 6.06703 11.656C6.06703 11.656 7.51903 16.041 8.27603 18.271C8.37103 18.551 8.59003 18.771 8.87903 18.847C9.16703 18.922 9.47503 18.843 9.69003 18.64C10.906 17.492 12.786 15.717 12.786 15.717C12.786 15.717 16.358 18.336 18.384 19.779V19.779ZM7.37403 11.102L9.05303 16.64L9.42603 13.133C9.42603 13.133 15.913 7.28203 19.611 3.94703C19.719 3.84903 19.734 3.68503 19.644 3.57003C19.555 3.45503 19.391 3.42803 19.268 3.50603C14.982 6.24303 7.37403 11.102 7.37403 11.102Z" fill="#000"/>
                        </svg>
                        <a className='ml-5 cursor-pointer text-slate-600' href="https://t.me/leshquin">@leshquin</a>
                        </div>

                    </div>
                </div>
                <Cursor visible={projects} clickToSee={projectsbutton}/>
            </div>

            {projects && 
            <>
                <div className="h-auto w-full p-5 lg:p-10 flex justify-center relative z-1">
                    <div className="bg-grain h-full w-full absolute inset-0 "></div>
                    <div className=" w-full lg:w-1/3 z-10 h-full rounded-md p-2 lg:p-10 mb-4 ">

                        <div className="w-full h-auto bg-white rounded-md border-b-4 border-orange-200">
                            <div className="h-56 w-full project2 rounded-t-md"> 
                            </div>
                            <div className="h-1/4   p-4" >
                                <p className='text-2xl lg:text-3xl font-semibold text-black'> Business thesis</p>
                                <p className='text-1xl lg:text-2xl font-semibold text-gray-600 mb-5'>How im solving it</p>
                            </div>
                        </div>

                        <div className="w-full h-auto bg-white rounded-md mt-10 border-b-4 border-orange-200">
                            <div className="h-56 w-full project1 rounded-t-md">
                            </div>
                            <div className="h-1/4   p-4">
                                <p className='text-2xl lg:text-3xl font-semibold text-black'>Solution</p>
                                <p className='text-1xl lg:text-2xl font-semibold text-gray-600 mb-5'>Description of solution</p>
                            </div>
                        </div>
                        
                        <div className="w-full h-auto bg-white rounded-md mt-10 border-b-4 border-orange-200">
                            <div className="h-56 w-full project3 rounded-t-md">
                            </div>
                            <div className="h-1/4   p-4" ref={myRef}>
                                <p className='text-2xl lg:text-3xl font-semibold text-black'> Demo</p>
                                <p className='text-1xl lg:text-2xl font-semibold text-gray-600 mb-5'>Demo video or photo</p>
                            </div>
                        </div>

                        <div className="w-full h-auto bg-white rounded-md mt-10 border-b-4 border-orange-200">
                            <div className="h-56 w-full project3 rounded-t-md">
                            </div>
                            <div className="h-1/4   p-4" ref={myRef}>
                                <p className='text-2xl lg:text-3xl font-semibold text-black'>Traction</p>
                                <p className='text-1xl lg:text-2xl font-semibold text-gray-600 mb-5'>Positive feedback and scientific validation</p>
                            </div>
                        </div>

                        <div className="w-full h-auto bg-white rounded-md mt-10 border-b-4 border-orange-200">
                            <div className="h-56 w-full project3 rounded-t-md">
                            </div>
                            <div className="h-1/4   p-4" ref={myRef}>
                                <p className='text-2xl lg:text-3xl font-semibold text-black'>Call to action</p>
                                <p className='text-1xl lg:text-2xl font-semibold text-gray-600 mb-5'>Order out product</p>
                            </div>
                        </div>

                        <div className="w-full h-auto text-center text-slate-500 font-semibold text-2xl md:text-3xl mt-24 uppercase z-100">
                            <p>"EZSTART" IW-2022</p>
                            <p>YOUR EZSTART</p>
                            <p>FOR YOUR MUSIC</p>
                        </div>
                    </div>
                </div>
            </>}
        </div>

      </>
    );
}