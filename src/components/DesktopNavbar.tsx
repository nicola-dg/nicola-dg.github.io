import Logo from "./Logo";



const DesktopNavbar = () => {
    return (
        <nav className="bg-blue-900 text-white font-inter p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <Logo></Logo>

                {/* Links */}
                <div className="flex space-x-6">
                    <a href="#" className="hover:text-blue-300">Home</a>
                    <a href="#" className="hover:text-blue-300">Dashboard</a>
                    <a href="#" className="hover:text-blue-300">Services</a>
                    <a href="#contatti" className="hover:text-blue-300">Contact</a>
                </div>
            </div>
        </nav>

    )
}

export default DesktopNavbar;