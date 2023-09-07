import React,{useState} from 'react'
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';
import Bgvideo from '../assets/video.mp4'

const Home = () => {
    const [navbar, setNavbar] = useState(false);
    const links=[
        {name: 'Home', path: '/'},
        {name: 'Menu', path: '/#menu'},
        {name: 'About', path: '/#about'},
        {name: 'Contact Us', path: '/contact'},
    ]
    return (
        <div className=' overflow-auto text-white' id='navbar'>
            <video autoplay='true' loop='true' muted>
                <source src={Bgvideo} type='video/mp4'/>
            </video>
           <nav className="w-full absolute top-0">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <div className="flex font-bold text-3xl">
                            <RamenDiningIcon fontSize="large"/>
                            <div>Hungry</div>
                        </div>
                        <div className="md:hidden">
                            <button
                                className="p-2 rounded-md outline-none text-white"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? <CloseIcon /> : <DehazeIcon/>  }
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-2 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-7 md:flex md:space-x-6 md:space-y-0">
                           {
                                links.map((link) =>{
                                    return (
                                        <li className='text-center'><a href={link.path}>{link.name}</a></li>
                                    )
                                })
                            }
                        </ul>

                        <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                    <div className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800">
                        Sign in
                    </div>
                    <div className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100">
                        Sign up
                    </div>
                </div>
                    </div>
                </div>
                <div className="hidden md:flex space-x-2">
                    <div className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800">
                        Sign in
                    </div>
                    <div className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100">
                        Sign up
                    </div>
                </div>
            </div>
        </nav>
        <div className={`w-full absolute md:top-80 top-64 text-center text-gray-100 ${navbar ? 'blur-sm' : 'blur-none'}`}>
            <div className='text-4xl mb-3'>Hey Foodies..!</div>
            <div className='text-5xl mb-6 font-semibold'>Welcome to Hungry</div>
            <div className='text-xl'>Get your tasty food here</div>
        </div>
        
        
        </div>
    )
}

export default Home