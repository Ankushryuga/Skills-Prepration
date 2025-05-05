import {Link} from 'react-router-dom';

const navigationItems:{label:string; path:string}[]=[
    {label:'Home', path:'/'},
    {label:'About me', path:'/aboutme'},
    {label:'My Projects', path:'/myprojects'},
    {label:'My Experiences', path:'/myexperiences'}
]

const Header:React.FC=()=>{
    return(
        <header className={`fixed top-5 left-5 w-full z-10 transition-all duration-300`}>
            <div className='mx-auto flex h-14 items-center gap-8 px-4 sm:px-6 lg:px-8'>
                {/* <a className='block' href='/'>
                <span className='sr-only'>Home</span>
                </a> */}

                <div className='flex flex-1 items-center md:justify-between justify-end'>
                    <nav aria-label='Global' className='hidden md:block'>
                        <ul className='flex items-center gap-8'>
                            {navigationItems.map((item)=>(
                                <li key={item.path}>
                                    <Link className="text-md font-bold hover:text-purple-400 text-purple-600" to={item.path}>{item.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;