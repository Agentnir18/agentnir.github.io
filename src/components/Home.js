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
                Specializing in Frontend Development and Data Analysis, keen on transitioning into an AI Engineer. Additionally, I possess a creative flair, excelling in Illustrations and UI/UX design. Known for being a quick learner, with strong analytical skills and attention to detail in debugging and optimizing code.
            </div>
            
            <a href="/portfolio/Nirvan Resume v6.pdf" target="_blank" rel="noopener noreferrer" className='animation active '>
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
