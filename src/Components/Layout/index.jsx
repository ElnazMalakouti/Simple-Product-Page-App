import SidePanel from "../SidePanel"
import Header from '../Header';

const Layout = ({ children, isSideMenuOpen, setIsSideMenuOpen }) => {
    return (
        <>
            <div className="w-full h-full flex flex-col justify-between">
                <Header
                    isSideMenuOpen={isSideMenuOpen}
                    setIsSideMenuOpen={setIsSideMenuOpen}
                />
                <div id="blackShadowDiv" className={`${isSideMenuOpen ? 'w-full' : 'transition-all duration-200 w-0'} md:hidden h-full bg-[#262626] bg-opacity-75 fixed top-0 left-0 z-50`}>
                    <div className={`${isSideMenuOpen ? 'w-[75%] sm:w-[40%]' : 'w-0'} overflow-hidden transition-all duration-500 bg-white  h-full relative left-0`}>

                        <SidePanel
                            isSideMenuOpen={isSideMenuOpen}
                            setIsSideMenuOpen={setIsSideMenuOpen}
                        />

                    </div>
                </div>
                {children}
            </div>
        </>
    )
}

export default Layout