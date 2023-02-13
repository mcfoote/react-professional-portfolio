import Head from 'next/head'
//import Image from 'next/image'
import { Inter } from '@next/font/google'
//import styles from '@/styles/Home.module.css'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import Image from 'next/image';
import circlePortrait from '../public/portrait-circle.jpg';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mitchell Foote's Professional Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">Developer Portfolio:</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl"/>
              </li>
              <li>
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">Mitchell Foote</h2>
            <h3 className="text-2xl py-2">Fullstack Software Developer</h3>
            <p className="text-md py-5 leading-6 text-gray-800">
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
          <div className="relative mx-auto bg-gradient-to-b from-teal-600 rounded-full w-80 h-80 overflow-hidden">
            <Image src={circlePortrait} layout="fill" objectFit="cover"/>
          </div>
        </section>
        
        <section>
          <div>
            <h3 className="text-2xl py-2">Skills and Knowledges:</h3>
            <p className="text-md py-5 leading-6 text-gray-800">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud <span className="text-teal-600">exercitation</span> ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
            <h3 className="text-2xl py-2">Languages:</h3>
            <ul className="text-md py-5 leading-6 text-gray-800">
              <li>Javascript</li>
              <li>C/C++</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
        </section>

      </main>
    </div>
  )
}
