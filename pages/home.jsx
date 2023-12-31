import React from "react";
import Logo2 from "../public/images/logos/logo-2.png";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";


function Home() {


  return (
    <div className="w-full h-screen overflow-y-hidden">
      <div className="w-full h-full mb-8 flex flex-col items-center justify-between">
        <div className="w-full px-[4em] py-9 flex items-center justify-between">
          <Image src={Logo2} className="w-[100px] " />
          <button className="px-3 flex items-center justify-center gap-2"></button>
        </div>
        <div className="w-full px-[4em] py-5 flex items-start justify-between">
          <div className="w-auto flex flex-col items-start justify-start">
            <h1 className="text-dark-100 ppB text-[2em] ">Hello, John Mark</h1>
            <p className="text-white-400 text-[12px] ppReg ">
              Here are your recorded videos
            </p>
          </div>
          <div className="w-full max-w-[250px] bg-white-300 px-4 flex items-center justify-start rounded-lg">
            <FiSearch size={15} color="#ccc" />
            <input
              type="text"
              className="w-full py-3 bg-transparent outline-none border-none px-3 text-[10px] text-white-400 font-ppReg"
              placeholder="Search for a video"
            />
          </div>
        </div>
        <br />
        <div className="w-full px-[4em] min-h-[15em] mt-9 flex items-start justify-start flex-col gap-4 mb-5 overflow-y-scroll">
          <p className="text-dark-200 font-ppReg text-[12px] ">Recent files</p>
          <div className="w-full flex items-center justify-start flex-wrap gap-7">
              {/* <Spinner color="#000" /> */}
                <p className="text-white-400 text-[13px] font-ppReg">
                  No recent videos.
                </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
