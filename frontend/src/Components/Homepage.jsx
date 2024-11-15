// src/Pages/Homepage.js
import React, { useState } from 'react';
import Card from './Reusables/Card';
import { IconCloudDemo } from './Reusables/IconCloudDemo'; 
import SkillsLanguage from './Reusables/SkillsLanguage';
import ProfessionalPicture from '../Img/Professional Picture.jpg';

function Homepage() {
  const [selectedCategory, setSelectedCategory] = useState('languages'); // default to languages

  return (
    <section className="flex flex-col items-center bg-[rgb(85,17,0)] text-[rgb(255,233,209)] p-4">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Welcome to Dalton's Website</h1>
      <div className="grid grid-cols-1 gap-[50px] px-4 md:px-20">
        {/* Card 1 */}
        <Card title="Hi, I'm Dalton!">
          <div className="flex flex-col md:flex-row items-start">
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500 mb-10 ml-4">
                Software Developer
              </h2>
              <a href="contact" className="flex items-center ml-5 mt-20">
                <div className="bg-gradient-to-r from-orange-400 to-red-500 rounded-md flex justify-center items-center transition duration-300 px-4 py-2">
                  Contact Me
                </div>
              </a>
            </div>
            <div className="flex-1 flex justify-center md:ml-10 md:-mt-10 mt-5">
              <img
                src={ProfessionalPicture}
                alt="Professional"
                className="rounded-full w-[300px] h-[300px] object-cover shadow-lg"
              />
            </div>
          </div>
        </Card>

        {/* Card 2 */}
        <Card title="Who am I" delay={0.5}>
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="w-full md:w-1/2 pr-4">
              <p className="text-[24px] ml-5 mr-5 mb-5 md:mr-20">
                I'm a Computer Science and AI, and Math student at Northeastern University, passionate about leveraging technology in 
                healthcare and education. My goal is to use my skills to make a positive impact in our society and my community, as well
                as pass my knowledge onto others.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center relative">
              <a href="about">
                <h1 className="text-[72px] font-bold animate-gradient-text text-center">
                  Learn more about me!
                </h1>
              </a>
            </div>
          </div>
        </Card>

        {/* Card 3 - Switched Column Layout with Cloud */}
        <Card title="My Skills/Favorite Technologies" className="max-w-4xl mx-auto p-6">
          <div className="flex flex-col md:flex-row">
            {/* Right Column - Icon Cloud (now at the bottom in mobile, hidden on mobile) */}
            <div className="flex-1 flex justify-center items-center mt-10 md:mt-0 w-full md:w-1/2 icon-cloud-container md:order-2 order-last">
              <div className="relative hidden md:block">
                <IconCloudDemo />
              </div>
            </div>

            {/* Left Column - Buttons, Skills, Navigation */}
            <div className="flex-1 pb-[2rem] md:pb-0 w-full md:w-1/2 md:order-1 order-first">
              <div className="flex flex-col space-y-4">
                {/* Skill Category Buttons */}
                <div>
                  <button
                    onClick={() => setSelectedCategory('languages')}
                    className={`px-4 py-2 mx-2 ${selectedCategory === 'languages' ? 'bg-orange-400' : 'bg-transparent'} text-white rounded-md`}
                  >
                    Languages
                  </button>
                  <button
                    onClick={() => setSelectedCategory('frameworks')}
                    className={`px-4 py-2 mx-2 ${selectedCategory === 'frameworks' ? 'bg-orange-400' : 'bg-transparent'} text-white rounded-md`}
                  >
                    Frameworks
                  </button>
                  <button
                    onClick={() => setSelectedCategory('devtools')}
                    className={`px-4 py-2 mx-2 ${selectedCategory === 'devtools' ? 'bg-orange-400' : 'bg-transparent'} text-white rounded-md`}
                  >
                    Developer Tools
                  </button>
                </div>

                {/* Skills Language Section */}
                <div className="pb-[2rem]">
                  {selectedCategory === 'languages' && (
                    <SkillsLanguage
                      skills={[ 
                        { name: 'Java: 5 years', level: '100%', color: 'bg-[#ff5733]' },
                        { name: 'Python: 4 years', level: '80%', color: 'bg-[#f9a825]' },
                        { name: 'HTML/CSS/JS: 2 years', level: '40%', color: 'bg-[#8e44ad]' },
                        { name: 'C: 1.5 years', level: '30%', color: 'bg-[#3b3f42]' },
                        { name: 'TypeScript: 1 year', level: '20%', color: 'bg-[#00bcd4]' }
                      ]}
                    />
                  )}
                  {selectedCategory === 'frameworks' && (
                    <SkillsLanguage
                      skills={[ 
                        { name: 'React: 2 years', level: '100%', color: 'bg-[#ff5733]' },
                        { name: 'Tensorflow: 2 years', level: '100%', color: 'bg-[#f9a825]' },
                        { name: 'Tailwind: 1 year', level: '50%', color: 'bg-[#8e44ad]' },
                        { name: 'Express: 1 year', level: '50%', color: 'bg-[#3b3f42]' },
                        { name: 'Springboot: 1 year', level: '50%', color: 'bg-[#00bcd4]' }
                      ]}
                    />
                  )}
                  {selectedCategory === 'devtools' && (
                    <SkillsLanguage
                      skills={[ 
                        { name: 'Git: 3 years', level: '100%', color: 'bg-[#ff5733]' },
                        { name: 'GitHub: 3 years', level: '100%', color: 'bg-[#f9a825]' },
                        { name: 'VSCode: 3 years', level: '100%', color: 'bg-[#8e44ad]' },
                        { name: 'IntelliJ: 2 years', level: '66.7%', color: 'bg-[#3b3f42]' },
                        { name: 'Postman: 2 years', level: '66.7%', color: 'bg-[#00bcd4]' }
                      ]}
                    />
                  )}
                </div>

                {/* Navigation Links */}
                <div className="flex space-x-4 mt-8">
                  <a href="projects" className="bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-md px-6 py-2 transition duration-300 hover:bg-orange-500">
                    See my Projects
                  </a>
                  <a href="experience" className="bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-md px-6 py-2 transition duration-300 hover:bg-orange-500">
                    View my Experience
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

export default Homepage;
