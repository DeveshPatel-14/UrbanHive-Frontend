import Login from "../features/auth/components/Login";
import { useState } from "react";
import logo from "../assests/b-logo.png";
import hero from "../assests/hero-1.png"

function LoginPage() {
  const [flag, setflag] = useState(true);

  const handleClick = () => {
    setflag(!flag);
  };

  return (

    flag ? <div>
      <nav class="dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="" class="flex items-center">
            <img src={logo} class="h-11 mr-3" alt="UrbanHive Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap ">
              UrbanHive
            </span>
          </a>
          <div class="flex md:order-2">
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={handleClick}
            >
              Log in
            </button>
            
          </div>
        </div>
      </nav>

      <section class=" dark:bg-gray-900">
        <div class="grid max-w-screen-xl px-4 py-8 my-[10vh] mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-8xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Elevate Everyday: Effortless Elegance in Every Stitch
            </h1>
            <p class="max-w-8xl mb-6 py-[2vh] font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Explore our exclusive collections designed to elevate your wardrobe and inspire confidence. 
            From chic threads to timeless trends, we curate clothing that speaks volumes and helps you embrace your unique style. 
            </p>
            
            

          </div >

          <div class="grid max-w-screen-xl px-4 py-8 mx-[2vw] h-[50vh] w-[35vw]">
            <img src={hero} class="h-[49vh] w-[38vw] my-[-4vh]"></img>
          </div>
        </div>
      </section>

    </div> : <Login/>
  );
}

export default LoginPage;
