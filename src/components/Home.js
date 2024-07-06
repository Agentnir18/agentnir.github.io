import React, { useRef } from 'react' 
import CustomHook from './CustomHook';
function Home() {
const scrollTab = useRef();
CustomHook(scrollTab);

return (
    <section ref={scrollTab} className='home' id="Home">
        <div className="content">
            <div className="name">
                MY NAME IS <span>NIRVAN</span>
            </div>
            <div className="des">
                {/* 30 */}
                Graduated in University of West London with a Bachelor's degree in Computer Science. 
                Specializing in Front-end Development, keen on transitioning into Full-Stack Development and
                Software Development. Additionally, I possess a creative flair, excelling in Illustrations and UI/UX design.
            </div>
            
            <a href="/Nirvan Resume.pdf" target="_blank" rel="noopener noreferrer" className='animation active '>
                Download my CV
            </a>
        </div>
        {/* <div className="avatar">
            <div className="card">
                <img src="/avatar.jpg" alt="" />
                <div className="info">
                    <div>Developer</div>
                    <div>VietNamese</div>
                    <div>03/12</div>
                    <div>Male</div>
                </div>
            </div>
        </div> */}
    </section>
    )
}

export default Home
