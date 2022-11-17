import Frame from '../../assets/frame.png'

export default function Meta() {
    return (
        <>
            <section className="border border-red-800 bg-[#A02279]">
                <div className="flex flex-row-reverse justify-between">
                    <img src={Frame} alt="frame_logo" className='w-[50%] px-16 py-16 md:block hidden' />
                    <div className='md:px-24 md:py-36 md:text-left text-center'>
                        <h1 className='md:text-5xl text-3xl text-white font-bold mt-12'>
                            Metabnb NFTs
                        </h1>
                        <p className='md:py-12 py-6 w-5/6 text-white md:mx-0 mx-auto'>
                            Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.
                        </p>

                        <button className='bg-white px-6 py-3 rounded text-[#A02279] mb-4'>
                            Learn more
                        </button>
                    </div>
                </div>

            </section>
        </>
    )
}