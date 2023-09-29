import { DiYeoman } from "react-icons/di";
import { AiOutlineCloudUpload, AiOutlineCloudDownload } from "react-icons/ai";
import { BsInstagram, BsFacebook, BsGithub, BsTwitter } from "react-icons/bs";
import {FaLanguage} from 'react-icons/fa'
import login from "./login/page";
import "./page.css"
export default function Home() {
  return (
    <div className="flex flex-col bg-white">
      <header className="text-white body-font bg-black">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-around">
          <a
            className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
            href="#"
          >
            <DiYeoman className="w-8 h-8"></DiYeoman>
            <span className="ml-3 text-xl">Language Converter</span>
          </a>
          <div>
            <a
              className="inline-flex items-center bg-slate-800 border-0 py-2 px-6 focus:outline-none hover:bg-slate-600 rounded-lg text-base mt-4 md:mt-0"
              href="login"
            >
              Login
            </a>
            <a
              className="inline-flex items-center bg-slate-800 border-0 py-2 px-6 focus:outline-none hover:bg-slate-600 rounded-lg text-base mt-4 md:mt-0 ml-5"
              href="signup"
            >
              Sign Up
            </a>
          </div>
        </div>
      </header>

      <section className="text-slate-900 body-font">
        <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-extrabold text-gray-900">
              Lorem, ipsum dolor.
            </h1>
            <p className="mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
              consequuntur quibusdam animi doloribus aliquam asperiores sapiente
              beatae obcaecati dolor sint eveniet ab nihil laborum voluptas,
              soluta corporis neque perferendis voluptates quaerat enim libero
              nisi harum, quod aliquid. Porro veritatis, consectetur laboriosam
              perferendis, quam atque perspiciatis officiis repudiandae sit
              labore vero?
            </p>
            <div className="flex Responsive gap-4 justify-center">
              <button className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 justify-center items-center focus:outline-none hover:bg-purple-600 rounded text-lg">
                <label className="flex flex-row">
                  <div className="flex items-center mr-2">
                    <AiOutlineCloudUpload></AiOutlineCloudUpload>
                  </div>
                  <span>Upload</span>
                  <input type="file" className="hidden" />
                </label>
              </button>
              <select className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 justify-center items-center focus:outline-none hover:bg-purple-600 rounded text-lg">
                <option>Select Language</option>
                <option>Hindi</option>
                <option>Marathi</option>
                <option>Bengali</option>
                <option>Gujarati</option>
                <option>Tamil</option>
                <option>Telugu</option>
              </select>
              <button className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 justify-center items-center focus:outline-none hover:bg-purple-600 rounded text-lg">
                <label className="flex flex-row">
                  <div className="flex items-center mr-2">
                    <AiOutlineCloudDownload></AiOutlineCloudDownload>
                  </div>
                  <span>Download</span>
                </label>
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="Docx.jpg"
            />
          </div>
        </div>
      </section>

      <section className="text-slate-900 body-font">
        <div className="container px-5 py-18 mx-auto flex flex-wrap">
          <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-purple-500 text-white relative z-10 title-font font-medium text-sm">
              1
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-extrabold title-font text-gray-900 mb-1 text-xl">
                  Lorem, ipsum dolor.
                </h2>
                <p className="leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid perspiciatis delectus qui autem dolor facilis illum.
                  Aut sunt, provident odio officiis exercitationem facilis
                  aliquam repellat doloremque minus mollitia enim eveniet, et
                  perferendis, dicta facere nulla! Blanditiis quis et fugiat
                  esse.
                </p>
              </div>
            </div>
          </div>
          <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-purple-500 text-white relative z-10 title-font font-medium text-sm">
              2
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-extrabold title-font text-gray-900 mb-1 text-xl">
                  Lorem, ipsum dolor.
                </h2>
                <p className="leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore modi laborum iste non! Modi dicta architecto atque
                  molestias eaque aspernatur labore voluptas nesciunt
                  laboriosam! Quidem, labore aut sit odit minus quibusdam
                  ratione nostrum eos nulla officiis, quia, vitae consequatur
                  excepturi!
                </p>
              </div>
            </div>
          </div>
          <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-purple-500 text-white relative z-10 title-font font-medium text-sm">
              3
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-extrabold title-font text-gray-900 mb-1 text-xl">
                  Lorem, ipsum dolor.
                </h2>
                <p className="leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique officia facilis nulla tempora aperiam temporibus
                  quam delectus eum! Sunt, repellendus dicta. Sequi obcaecati
                  cumque maxime consequuntur ratione minima, laudantium soluta
                  illo, vitae commodi reprehenderit, quisquam voluptate enim
                  consectetur minus praesentium.
                </p>
              </div>
            </div>
          </div>
          <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-purple-500 text-white relative z-10 title-font font-medium text-sm">
              4
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-extrabold title-font text-gray-900 mb-1 text-xl">
                  Lorem, ipsum dolor.
                </h2>
                <p className="leading-relaxed">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Iusto reiciendis similique, aut aperiam accusantium, culpa,
                  autem natus velit est dolores asperiores. Nisi nesciunt
                  suscipit unde quod consectetur officia recusandae expedita
                  nobis animi quas quidem placeat hic repellat aut, asperiores
                  facere?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-slate-900 body-font">
        <div className="container px-5 py-20 mx-auto">
          <div className="flex flex-col text-center w-full mb-10">
            <h1 className="text-4xl font-extrabold title-font mb-4 text-gray-900 capitalize">
              History
            </h1>
          </div>
          <div className="flex flex-wrap -m-4 justify-center">
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center h-80 "
                  src="Docx.jpg"
                />
              </div>
            </div>
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center h-80 "
                  src="Docx.jpg"
                />
              </div>
            </div>
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center h-80 "
                  src="Docx.jpg"
                />
              </div>
            </div>
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-80 object-cover object-center"
                  src="Docx.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-slate-900 body-font">
        <div className="container px-5 pb-8 mx-auto">
          <div className="flex flex-col text-center w-full mb-16">
            <h1 className="sm:text-3xl text-4xl font-extrabold capitalize title-font mb-4 text-gray-900">
              Happy Users
            </h1>
          </div>
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="text-purple-500 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 17l4 4 4-4m-4-5v9"></path>
                  <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                </svg>
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  3K
                </h2>
                <p className="leading-relaxed">Downloads</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="text-purple-500 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                </svg>
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  1K
                </h2>
                <p className="leading-relaxed">Users</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="text-purple-500 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                  <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                </svg>
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  70
                </h2>
                <p className="leading-relaxed">Files</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="text-purple-500 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  50
                </h2>
                <p className="leading-relaxed">Places</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-slate-900 body-font">
        <div className="container px-5 py-4 pt-12 mx-auto flex items-center sm:flex-row flex-col">
          <a
            className="flex title-font font-medium items-center text-slate-900 mb-4 md:mb-0"
            href="#"
          >
            <DiYeoman className="w-8 h-8"></DiYeoman>
            <span className="ml-3 text-xl">Language Converter</span>
          </a>
          <p className="text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-slate-900 sm:py-2 sm:mt-0 mt-4 text-slate-900">
            © 2023 Devify_7174
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a
              className="flex title-font font-medium items-center text-slate-900 mb-4 md:mb-0 mr-2"
              href="#"
            >
              <BsInstagram className="w-8 h-8 text-slate-900"></BsInstagram>
            </a>
            <a
              className="flex title-font font-medium items-center text-slate-900 mb-4 md:mb-0 mr-2"
              href="#"
            >
              <BsFacebook className="w-8 h-8"></BsFacebook>
            </a>
            <a
              className="flex title-font font-medium items-center text-slate-900 mb-4 md:mb-0 mr-2"
              href="#"
            >
              <BsGithub className="w-8 h-8"></BsGithub>
            </a>
            <a
              className="flex title-font font-medium items-center text-slate-900 mb-4 md:mb-0 mr-2"
              href="#"
            >
              <BsTwitter className="w-8 h-8"></BsTwitter>
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}
