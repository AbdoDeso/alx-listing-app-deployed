import Image from "next/image"

const Footer: React.FC = () => {
    return (
        <footer className="flex grid-cols-2 container  bg-gray-500  mx-auto text-center items-center justify-center w-full object-center font-serif font-medium">
            <section className="">
            
                       <figure 
                               className=" flex   mx-auto pl-10  invisible sm:invisible md:visible lg:visible"
                               >
                                   <Image
                                       className="pb-8"
                                       src={"/assets/Vector-1.png"}
                                       width={58}
                                       height={36}
                                       alt="AlxLogo" />
                               </figure>
                <figcaption className="font-serif font-medium p-4">ALX is a platform where travelers can discover and book unique, comfortable, and affordable lodging options worldwide. From cozy city apartments and tranquil countryside retreats to exotic beachside villas, ALX connects you with the perfect place to stay for any trip.</figcaption>
            </section>
            <section className="flex grid-cols-3 object-center font-serif p-6 font-medium">
                <div className="flex-col p-6">
                    <ul>
                        <h5>Explore</h5>
                        <li>Apartments in Dubai</li>
                        <li>Hotels in New York</li>
                        <li>Villa in Spain</li>
                        <li>Mansion in Indonesia</li>
                    </ul>
                </div>
                <div className="flex-col p-6">
                    <ul>
                        <h1>Company</h1>
                        <li>About us</li>
                        <li>Blog</li>
                        <li>Career</li>
                        <li>Customers</li>
                        <li>Brand</li>
                    </ul>
                </div>
                <div className="flex-col p-6">
                    <ul>
                        <h1>Help</h1>
                        <li>Support</li>
                        <li>Cancel booking</li>
                        <li>Refunds Process</li>
                    </ul>
                </div>
            </section>
        </footer>
    )
}

export default Footer;