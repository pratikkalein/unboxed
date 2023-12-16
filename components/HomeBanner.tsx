import Image from "next/image";

const HomeBanner = () => {
    return ( <div>
        <div className="relative mb-8 rounded-md bg-gradient-to-r from-violet-500 to-violet-700">
            <div className="flex flex-col items-center gap-2 px-8 py-12 mx-auto md:flex-row justify-evenly">
            <div className="mb-8 text-center md:mb-0">
                <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">Dive into sizzling savings</h1>
                <p className="mb-2 text-lg text-white md:text-xl">Shop now and bask in the savings!</p>
                <p className="text-2xl font-bold text-yellow-400 md:text-4xl">GET 50% OFF</p>
            </div>
            <div className="relative w-full md:w-1/3 aspect-video">
               <Image
               src="/banner-image-2.png"
               fill
               alt="Banner_image"
               className="object-contain"/>
            </div>
            </div>
        </div>
    </div> );
}
 
export default HomeBanner;