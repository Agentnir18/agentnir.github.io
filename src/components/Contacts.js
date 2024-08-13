import React, { useState, useRef } from 'react' 
import CustomHook from './CustomHook';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons';

function Contacts() {
const [listContacts] = useState([
  {
    title: 'Phone Number',
    value: '+971 52 978 6369'
  },{
    title: 'Email',
    value: 'nirvan.bajracharya@gmail.com'
  }
  
])
const divs = useRef([]);
const scrollTab = useRef();
CustomHook(scrollTab, divs);

  return (
    <section className='contacts' ref={scrollTab} id="Contacts">
       <div className="title" ref={(el) => el && divs.current.push(el)}>
        Let's Connect
       </div>
       <div className="list"  ref={(el) => el && divs.current.push(el)}>
        {
          listContacts.map((value, key) => (
            <div className='item' key={key}>
              <h3>{value.title}</h3>
              <div>{value.value}</div>
            </div>
          ))
        }
        <div className="social-card">
                        <a className="socialContainer containerOne" href="https://github.com/Agentnir18">
                          <FontAwesomeIcon icon={faGithub} />
                        </a>

                        <a className="socialContainer containerThree" href="https://www.linkedin.com/in/nirvanbajracharya/">
                          <FontAwesomeIcon icon={faLinkedin} />
                        </a>
        </div>
        <div className="des">
        {/* 20 */}
        All Rights Reserved
       </div>
       </div>
       
    </section>
  )
}
export default Contacts
