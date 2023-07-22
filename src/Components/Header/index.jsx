const Header = ({isSideMenuOpen, setIsSideMenuOpen}) => {
    return (
        <>
            <div className="w-full h-24 px-4 flex justify-between items-center  md:border-b-[1px]">

                <div className="h-full flex gap-4 md:gap-8 justify-center items-center">
                    <button className="md:hidden" onClick={() => setIsSideMenuOpen(true)}>
                        <img alt="iconMenu" src="/images/icon-menu.svg" />
                    </button>
                    <p className="font-[Bold] text-2xl">sneakers</p>

                    <div className="hidden md:flex h-full gap-4 justify-center items-center text-xs text-[#7E7F81]">
                        <button className="h-full hover:text-[#262729] hover:font-[Bold] hover:border-b-4 hover:border-b-[#FF7D1B]">Collections</button>
                        <button className="h-full hover:text-[#262729] hover:font-[Bold] hover:border-b-4 hover:border-b-[#FF7D1B]">Men</button>
                        <button className="h-full hover:text-[#262729] hover:font-[Bold] hover:border-b-4 hover:border-b-[#FF7D1B]">Women</button>
                        <button className="h-full hover:text-[#262729] hover:font-[Bold] hover:border-b-4 hover:border-b-[#FF7D1B]">About</button>
                        <button className="h-full hover:text-[#262729] hover:font-[Bold] hover:border-b-4 hover:border-b-[#FF7D1B]">Contact</button>
                    </div>
                </div>

                <div className="flex gap-4 md:gap-8">
                    <button>
                        <img alt="iconCart" src="/images/icon-cart.svg" />
                    </button>
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full">
                        <img alt="profilePic" src="/images/image-avatar.png" className="w-full h-full"/>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Header