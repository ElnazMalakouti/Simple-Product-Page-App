const SidePanel = ({ isSideMenuOpen, setIsSideMenuOpen }) => {
    return (
        <>
            <div id="sidePanel" className="max-w-full h-full p-8 flex flex-col justify-start items-start font-[Bold]">

                <button className="w-4 h-4 ml-2 mb-12">
                    <img alt="closeBtn" src="/images/icon-close.svg" className="w-full h-full" onClick={() => setIsSideMenuOpen(false)} />
                </button>

                <div className="w-full flex flex-col justify-start items-start gap-4">
                    <button className="h-full pl-2 hover:text-[#262729] hover:border-l-4 hover:border-l-[#FF7D1B]">Collections</button>
                    <button className="h-full pl-2 hover:text-[#262729] hover:border-l-4 hover:border-l-[#FF7D1B]">Men</button>
                    <button className="h-full pl-2 hover:text-[#262729] hover:border-l-4 hover:border-l-[#FF7D1B]">Women</button>
                    <button className="h-full pl-2 hover:text-[#262729] hover:border-l-4 hover:border-l-[#FF7D1B]">About</button>
                    <button className="h-full pl-2 hover:text-[#262729] hover:border-l-4 hover:border-l-[#FF7D1B]">Contact</button>
                </div>


            </div>
        </>
    )
}

export default SidePanel