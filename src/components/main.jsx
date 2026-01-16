import { useState } from "react";
import '../App.css'
import Portfolio from '../assets/portfolio.png'
import Businessman from '../assets/businessman.png'
import File from '../assets/file.png'
import Graduation from '../assets/graduation.png'
import Github from '../assets/github.png'
import Linked from '../assets/linkedin.png'
import User from '../assets/user.png'

function Main() {

const [active, setActive] = useState(null);

  return (
    <div
      className="flex flex-col lg:flex-row items-center justify-center
                 gap-10 lg:gap-24 xl:gap-32
                 min-h-screen px-6
                 max-w-[1280px] mx-auto"
    >

      {/*Left Component*/}
      <div className="space-y-4 text-center lg:text-left lg:flex-shrink-0">

        <img
          id="user"
          src={User}
          alt="Experience"
          className="mx-auto lg:mx-0 max-w-[150px] sm:max-w-[200px]"
          style={{ objectFit: "contain" }}
        />  

        <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl border p-2 rounded-md hover:bg-green-500">
          Solomon <span className="bg-green-500">Ivankin</span>
        </h1>

        <p>Male 24</p>
        <h2 className="font-bold text-indigo-400">IT Support Officer</h2>

        <div className="flex gap-6 justify-center lg:justify-start">
          <img
            id="socials"
            src={Github}
            alt="github"
            className="w-8 h-8 object-contain"
          />
          <img
            id="socials"
            src={Linked}
            alt="LinkedIn"
            className="w-8 h-8 object-contain"
          />
        </div>

      </div>

      {/*Right Component*/}
      <div className="w-full max-w-3xl flex-col space-y-6 p-4 sm:p-8 lg:flex-grow">

        <div className="flex items-center gap-2">
          <img
            id="icons"
            src={Portfolio}
            alt="Experience"
            className="w-6 h-6 object-contain"
          />
          <h1 className="font-bold py-4 text-xl sm:text-2xl">
            Professional Summary
          </h1>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-blue-500 border rounded-md px-4 sm:px-6 py-4">
          <p className="text-white p-4">
            I’m a web developer focused on Python and JavaScript, mainly working with React.js for the frontend and Django for the backend. I build full-stack applications and take care of deployment end-to-end, from code to production.

I have hands-on experience with Linux and Docker, and I’ve deployed multiple internal services, including migrating an organization’s intranet from Windows to a Dockerized setup on a fresh Ubuntu server, as well as running a PiSignage service for campus-wide displays.

You can find more details about my current project below, along with my downloadable CV.
          </p>
        </div>

        <button className="w-40 rounded-md border bg-gradient-to-l from-black to-white p-2 font-bold mx-auto lg:mx-0">
          <a
            href="https://mega.nz/file/zlxUlIKB#qpCTYb6yx_nFJB7VwkiVRlUfmEhCe4vhLChl2ic-KSg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center gap-2 justify-center">
              <img
                id="icons"
                src={File}
                alt="download-icon"
                className="w-5 h-5 object-contain"
              />
              <span>Download CV</span>
            </div>
          </a>
        </button>

        <div className="flex flex-col lg:flex-row gap-8">

          {/* Experience */}
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <img
                id="icons"
                src={Businessman}
                alt="Experience"
                className="w-6 h-6 object-contain"
              />
              <h1 className="font-bold py-4 text-xl sm:text-2xl">
                Experience
              </h1>
            </div>

            <div className="bg-gradient-to-r from-white to-purple-200 rounded-md p-4 text-black">
              <h1 className="font-bold">Sonoma Adventist College</h1>
              <p>Position: IT Support</p>
              <p>Duration: 1 year 2 months</p>
            </div>
          </div>

          {/* Education */}
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <img
                id="icons"
                src={Graduation}
                alt="Education"
                className="w-6 h-6 object-contain"
              />
              <h1 className="font-bold py-4 text-xl sm:text-2xl">
                Education
              </h1>
            </div>

            <div className="bg-gradient-to-l from-white to-purple-200 rounded-md p-4 text-black">
              <h1 className="font-bold">Datec Learning Center</h1>
              <p>Course: Adv.Diploma in IT</p>
              <p>Duration: 2 Years</p>
            </div>
          </div>

        </div>

        {/* Skills Section */}
        <div className="w-full max-w-xl mx-auto lg:mx-0">
          <div className="flex gap-4 justify-center lg:justify-start">
            <button
              onClick={() => setActive(active === "skills" ? null : "skills")}
              className="text-xl sm:text-2xl font-bold border rounded-md p-2 hover:bg-gray-100"
            >
              Skills
            </button>

            <button
              onClick={() => setActive(active === "projects" ? null : "projects")}
              className="text-xl sm:text-2xl font-bold border rounded-md p-2 hover:bg-gray-100"
            >
              Projects
            </button>
          </div>

          {active && (
            <div className="mt-4 border rounded-lg p-4 shadow-lg bg-white text-black">
              {active === "skills" && (
                <ul className="space-y-2">
                  <li>React</li>
                  <li>TailwindCSS</li>
                  <li>JavaScript</li>
                </ul>
              )}

              {active === "projects" && (
                <ul className="space-y-2">
                  <li>Portfolio Website</li>
                  <li>Todo App</li>
                  <li>API Dashboard</li>
                </ul>
              )}
            </div>
          )}
        </div>

      </div>
    </div>
  )
}

export default Main;
