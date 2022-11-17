import { Link } from "react-router-dom";
import Button from "../Button/Button";
import NavLogo from "../../assets/navLogo.svg";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Modal from "../modal/Modal";

export default function () {
    const [open, setOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const handleShowModal = (e) => {
        setShowModal(!showModal);
        console.log(showModal);
    };
    return (
        <div>
            <nav className="bg-white shadow-md fixed inset-x-0 top-0 z-10 w-full mb-5 ">
                <div className="flex items-center text-sm justify-between md:pr-20">
                    <div className="z-50 p-3 md:w-auto w-full flex justify-between items-center">
                        <img
                            src={NavLogo}
                            alt="brand__logo"
                            className="md:ml-12 
                        md:w-full w-1/5"
                        />
                        <div
                            className="text-2xl md:hidden items-center"
                            onClick={() => setOpen(!open)}
                        >
                            <FaBars name={`${open ? "close" : "menu"}`} />
                        </div>
                    </div>
                    <ul className="md:flex hidden text-sm items-center md:mr-6">
                        <li>
                            <Link
                                to="/"
                                className="py-7 px-3 inline-block md:mr-4 "
                            >
                                Home
                            </Link>
                            <Link
                                to="/"
                                className="py-7 px-3 inline-block md:mr-4 "
                            >
                                Place to stay
                            </Link>
                            <Link
                                to="/nft"
                                className="py-7 px-3 inline-block md:mr-4 "
                            >
                                NFTs
                            </Link>
                            <Link
                                to="/"
                                className="py-7 px-3 inline-block md:mr-4 "
                            >
                                Community
                            </Link>
                        </li>
                    </ul>
                    <div className="md:flex md:space-x-7 hidden">
                        <button
                            className="px-4 py-3 border text-white rounded-md bg-[#A02279] "
                            onClick={handleShowModal}
                        >
                            Connect wallet
                        </button>
                    </div>

                    <ul
                        className={`
                    md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 md:px-4
                    duration-500 ${open ? "left-0" : "left-[-100%]"}`}
                    >
                        <li className="">
                            <Link
                                to="/"
                                className="py-3 hover:text-[#5C407F] px-12 inline-block"
                            >
                                Homehidden
                            </Link>
                        </li>
                        <li className="">
                            <Link
                                to="/"
                                className="py-3 hover:text-[#5C407F] px-12 inline-block"
                            >
                                Place to stay
                            </Link>
                        </li>
                        <li className="">
                            <Link
                                to="/nft"
                                className="py-3 hover:text-[#5C407F] px-12 inline-block"
                            >
                                NFTs
                            </Link>
                        </li>

                        <li className="">
                            <Link
                                to="/"
                                className="py-3 hover:text-[#5C407F] px-12 inline-block"
                            >
                                Community
                            </Link>
                        </li>
                        <div className="px-12 py-5">
                            <Button Text="Connect wallet" />
                        </div>
                    </ul>
                </div>
            </nav>
            <Modal showModal={showModal} handleShowModal={handleShowModal} />
        </div>
    );
}
