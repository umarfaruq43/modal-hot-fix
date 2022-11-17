import heroImage from '../../assets/Hero.png';
import Button from '../Button/Button';
import Metamask from '../../assets/metamask.png';
import Opensea from '../../assets/opensea.png';
import Mbtoken from '../../assets/mbtoken.png';

export default function Hero() {
    return (
        <>
            <section className='mt-20 py-12'>
                <div className="flex flex-row-reverse mb-6">
                    <div className='md:block hidden'>
                        <img src={heroImage} alt="hero__Image" className='w-[90%]' />
                    </div>
                    <div>
                        <div className='md:px-24 md:py-24 md:text-left text-center'>
                            <p className='md:w-6/6 md:text-5xl text-3xl'>
                                Rent a <span className='text-[#A02279] font-bold'>Place</span> away from <span className='text-[#A02279] font-bold'> Home </span> in the <span className='text-[#A02279] font-bold'>Metaverse.</span>
                            </p>
                            <p className='md:mt-14 mt-6 w-5/6 md:text-xl text-sm md:text-left text-center md:mx-0 mx-auto'>
                                we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone
                            </p>
                            <div className=''>
                                <input placeholder="Name"
                                    className="md:w-5/12 w-3/5 py-2 px-2 md:mt-12 mt-5 border-2 transition duration-500 placeholder-[#A3A3A3] focus:placeholder-transparent border-[#A3A3A3] text-[#A3A3A3] bg-transparent rounded-md focus:outline-none "/>
                                    <Button Text="Search"   />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between bg-[#A02279] px-12 py-4">
                    <div>
                        <img src={Mbtoken} alt="mbtoken__logo" />
                    </div>
                    <div>
                        <img src={Metamask} alt="Metamask__logo" />
                    </div>
                    <div>
                        <img src={Opensea} alt="opensea__logo" />
                    </div>
                </div>
            </section>
        </>
    )
}