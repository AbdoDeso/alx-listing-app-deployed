
import { cardContainer } from "@/constants"
import Image from "next/image";


export default function Home() {
  return (
  <main className="flex flex-col justify-center">
      <section>
            <div className="p-4">
              <figure className={`${cardContainer}`}>
                  <Image 
                      className="relative rounded overflow-hidden shadow-lg"
                      src={"/assets/Image 1.png"}
                      width={1608}
                      height={481}
                      alt={""}/>
                  <figcaption 
                  className="absolute flex flex-col object-center w-xl text-amber-50   p-10">
                      <h1 className="text-5xl">Find your favorite place here!</h1>
                      <p className="text-xl pt-4">The best prices for over 2 million properties worldwide</p>
                  </figcaption>
              </figure>
          </div>
      </section>

      
  </main>
  );
}
