import { Link } from 'react-router-dom';
import FooterLogo from '../../assets/footerLogo.svg';
import Facebook from '../../assets/facebook.png';
import Instagram from '../../assets/instagram.png';
import Twitter from '../../assets/twitter.png';


export default function Footer() {
    return (
        <>
            <section className="bg-black text-white md:flex justify-between md:px-24 px-12 md:py-16 py-8">
                <div className='mb-4'>
                    <img src={FooterLogo} alt="footer__logo" />
                    <div className='flex  space-x-4 mt-16'>
                        <img src={Facebook} alt="Facebook__logo" />
                        <img src={Instagram} alt="Instagram__logo" />
                        <img src={Twitter} alt="Twitter__logo" />
                    </div>
                    <div className='mt-4'>
                        &copy; 2022 Metabnb
                    </div>
                </div>
                <div>
                    <p className='font-bold text-xl mb-3'>
                        Community
                    </p>
                    <ul>
                        <li className='mb-2'>
                            <Link to="/">NFT</Link>
                        </li>
                        <li className='mb-2'>
                            <Link to="/">Tokens</Link>
                        </li>
                        <li className='mb-2'>
                            <Link to="/">Landlords</Link>
                        </li>
                        <li className='mb-2'>
                            <Link to="/">Discord</Link>
                        </li>
                    </ul>
                </div>

                <div >
                    <p className='font-bold text-xl mb-3'>
                        Places
                    </p>
                    <ul>
                        <li className='mb-2'>
                            <Link to="/">Castle</Link>
                        </li>
                        <li className='mb-2'>
                            <Link to="/">Farms</Link>
                        </li>
                        <li className='mb-2'>
                            <Link to="/">Beach</Link>
                        </li>
                        <li className='mb-2'>
                            <Link to="/">Learn more</Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <p className='font-bold text-xl mb-3'>
                        About us
                    </p>
                    <ul>
                        <li className='mb-2'>
                            <Link to="/">Road map</Link>
                        </li>
                        <li className='mb-2'>
                            <Link to="/">Creators</Link>
                        </li>
                        <li className='mb-2'>
                            <Link to="/">Career</Link>
                        </li>
                        <li className='mb-2'>
                            <Link to="/">Contact us</Link>
                        </li>
                    </ul>
                </div>

            </section>
        </>
    )
}