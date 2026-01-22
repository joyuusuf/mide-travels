import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faClose, faLocationDot, faUser, fausers } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import toursData from '../../ToursData.json';
import { notFound } from "next/navigation";
// import BookingSidebar from './sidebar'

export default async function page(params) {
    const { id } = await params;
    const tour = toursData.find((t) => t.id.toString() === id);
    // const (!tour) return notFound();
    if (!tour) return notFound();
    return (
        <>
            <div className="section-banner px-[2%] sm:px-[8%] lg:px-[12%] py-[50px] lg:py-[90px] min-h-[450px] lg:min-h-[500px] z-20 relative ">
                <h2 className="text-4xl font-normal z-10 relative text-white text-center w-full unbounded-font">
                    Wilderness of Paris
                </h2>
                <ul className="text-white z-10 flex items-center gap-8 section-list">
                    <li className="text-sm relative ">
                        <Link href='#'>Home</Link>
                    </li>

                    <li className="text-sm relative ">
                        <FontAwesomeIcon icon={faAngleRight} className="absolute -left-6 top-0.5" />
                        <Link href='#'>TourDetails</Link>
                    </li>
                </ul>
            </div>


            <div className="tour-details-container w-full flex flex-col lg:flex-row justify-between items-start px-[2%] sm:px-[8%] lg:px-[12%] py-[50px] lg:py-[90px] gap-5 relative">
                <div className="xl:w-[70%] lg:w-[60%] w-full relative">
                    <div className="relative w-full h-[400px]">
                        <Image
                            src={tour.MainImage}
                            alt={tour.title}
                            fill
                            className="object-cover rounded-xl "
                        />
                    </div>
                    <div className="tour-details-content pt-4 ">
                        <div className="flex justify-between items-center">
                            <div>
                                <h2 className="text-xl sm:text-3xl font-[500] pb-1 ">
                                    {tour.title} </h2>
                                <span className="text-[#94a3b8] text-sm">
                                    <FontAwesomeIcon icon={faLocationDot}/>
                                    {tour.location}
                                </span>
                            </div>
                            <h4 className="text-xl font-semibold unbounded-font text-right">
                                <span className="text-gray-500 text-sm font-normal ">
                                    Start from
                                </span>
                                <br />
                                {tour.price}
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
