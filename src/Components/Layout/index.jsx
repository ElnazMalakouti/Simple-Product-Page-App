const Layout = ({children , sideMenu , isSideMenuOpen, setIsSideMenuOpen}) => {
    return(
        <>
            <div className="w-full h-full flex flex-col justify-between">
                {children}
            </div>
        </>
    )
}

export default Layout