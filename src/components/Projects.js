import React, { useState, useRef } from 'react' 
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub } from '@fortawesome/free-brands-svg-icons';
import CustomHook from './CustomHook';

function Projects() {
const [listProjects] = useState([
  {
    name: 'AI Art Canvas',
    des: 'Photorealistic landscape drawings using a SPADE model and Custom Tkinter for GUI. With a feature for merging output generated landscape image with style images to get the stylized output.',
    link: 'https://github.com/Agentnir18/GUI-AI-art-canvas',
    language: 'Python, Tkinter, OpenCV, TensorFlow',
    images: '/image.png'
  },
  {
    name: 'FHRS Rating App',
    des: 'The Food Hygine Rating Scheme helps you choose where to eat out or shop for food. \nThe scheme gives you information about the hygiene standards in restaurants, pubs, cafes, takeaways, hotels, and other places you like to go to eat out, as well as supermarkets and other food shops.',
    link: 'https://github.com/Agentnir18/Food-Hygiene-Rating-App',
    language: 'React Native, Expo, JavaScript, NodeJS',
    images: '/fhrs image.jpeg'
  },
  {
    name: 'Calorie Burnt Prediction',
    des: 'A Machine Learning model that can predict the amount of calories burnt with Random Forest having the highest accuracy of 99.95%.',
    link: 'https://github.com/Agentnir18/Calories-burnt-prediction',
    language: 'Numpy ,Pandas, Matplotlib, Sci-kit learn',
    images: '/Screenshot 2023-10-23 143123.jpg'
  },

]);
const divs = useRef([]);
const scrollTab = useRef();
CustomHook(scrollTab, divs);
  return (
    <section className='projects' ref={scrollTab} id="Projects">
       <div className="title" ref={(el) => el && divs.current.push(el)}>
        My Projects
       </div>
       
       <div className="list">
        {
          listProjects.map((value, key) => (
            <div className='item' key={key} ref={(el) => el && divs.current.push(el)}>
              <div className="images">
                <img src={value.images} alt="" />
              </div>
              <div className="content">
                <h3>{value.name}</h3>
                <div className="des">{value.des}</div>
                <div className="link">
                    <div>
                        <h4>What I Used</h4>
                        <div className="des">{value.language}</div>
                    </div>
                </div>
                <div className="link">
                    
                    <div>
                        <a href={value.link} target="_blank" rel="noopener noreferrer" className='animation active '>
                          GitHub Code</a>
                    </div>
                </div>
              </div>
            </div>
          ))
        }
       </div>
    </section>
  )
}
export default Projects
