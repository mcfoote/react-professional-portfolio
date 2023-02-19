import Head from 'next/head'
//import Image from 'next/image'
import { Inter } from '@next/font/google'
//import styles from '@/styles/Home.module.css'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import Image from 'next/image';
import circlePortrait from '../public/portrait-circle.jpg';

import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';

import project1 from '../public/project1.png';
import project2 from '../public/project2.png';
import project3 from '../public/project3.png';

import {useState} from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Mitchell Foote's Professional Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-orange-500">Developer Portfolio:</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl dark:text-white"/>
              </li>
              <li>
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Mitchell Foote</h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-orange-600">Fullstack Software Developer</h3>
            <p className="text-md py-5 leading-6 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-orange-800">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-12 py-4 text-gray-800">
            <AiFillGithub />
            <AiFillLinkedin />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-600 rounded-full w-80 h-80 overflow-hidden md:h-96 md:w-96">
            <Image src={circlePortrait} layout="fill" objectFit="cover"/>
          </div>
        </section>
        
        <section>
          <div className="text-center">
            <h3 className="text-2xl py-2 dark:text-orange-600">Skills and Knowledges:</h3>
            <p className="text-md py-5 leading-6 text-gray-800 dark:text-orange-800">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud <span className="text-teal-600">exercitation</span> ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
            <h3 className="text-2xl py-2 dark:text-orange-600">Languages:</h3>
            <ul className="text-md py-5 leading-6 text-gray-800">
              <li>Javascript</li>
              <li>C/C++</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
          <h3 className="text-center text-4xl py-4 dark:text-orange-600">Portfolio</h3>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={project1} className="mx-auto rounded-lg "/>
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-orange-600">Magic the Gathering Deck Builder</h3>
              <p className="py-2 dark:text-orange-800"> 
                "Magic the Gathering Deck Builder is a website that will allow you to build a commander deck and price out the cost of purchasing the required cards for the current market rate of said cards in USD or EUR. 
                This is acomplished using responsive searching and pricing functions utilizing the scryfall api, the currency layer api is used to convert prices to euros, 
                the Bulma CSS framework is used to provide a polished interface which is responsive and scalable between mobile and desktop environments. 
                Client-side storage is used to pass data between pages providing seamless functionality and moment.js api provides time data to anchor the site with a live environment feeling."
              </p>
              <h4 className="py-4 text-teal-600">Technologies Used</h4>
              <p className="text-fray-800 py-1">HTML</p>
              <p className="text-fray-800 py-1">CSS</p>
              <p className="text-fray-800 py-1">Javascript</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={project2} className="mx-auto rounded-lg "/>
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-orange-600">Agora Web Forum</h3>
              <p className="py-2 dark:text-orange-800"> 
                "Agora is an open web forum inspired by reddit, hacker news, and old web hobbyiest forums, 
                aiming to be based on user generated content for now there are four boards users can browse post threads and comment on the threads. 
                The site was buit using JS/HTML/CSS, Bootstrap, MySQL, Sequelize, Node.js, Expressjs."
              </p>
              <h4 className="py-4 text-teal-600">Technologies Used</h4>
              <p className="text-fray-800 py-1">SQL</p>
              <p className="text-fray-800 py-1">Node</p>
              <p className="text-fray-800 py-1">Express.js</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={project3} className="mx-auto rounded-lg "/>
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-orange-600">Chatterbox chat app</h3>
              <p className="py-2 dark:text-orange-800"> 
                "A fullstack MERN based Real time chat app inspired by Messenger and Discord. 
                Built using MongoDb and Mongoose with graphql for database, Express.js and Node.js for server functionality, Using react for the front-end. 
                Users can register an account which will be authenticated upon login, allowing the user to message friends in chat threads. 
                Deployed using Heroku Web Services."
              </p>
              <h4 className="py-4 text-teal-600">Technologies Used</h4>
              <p className="text-fray-800 py-1">MongoDB</p>
              <p className="text-fray-800 py-1">Graphql</p>
              <p className="text-fray-800 py-1">Node</p>
            </div>
          </div>
        </section>
        <section>
          <div className="text-center">
            <h3 className="text-center text-3xl font-medium pt-8 pb-2 dark:text-orange-600">Contact</h3>
            <p className="text-md py-5 leading-6 text-gray-800 dark:text-orange-800">
              Feel free to contact me at my email linkedin or github
            </p>
            <ul>

            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}
