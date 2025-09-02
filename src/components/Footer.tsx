
const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 p-6 mt-12">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
                {/* Logo / Branding */}
                <div className="mb-4 md:mb-0 font-inter text-white font-bold text-lg">
                    Tecnall 2000
                </div>

                {/* Links */}
                <div className="flex space-x-6 mb-4 md:mb-0">
                    <a href="#" className="hover:text-white transition-colors">About</a>
                    <a href="#" className="hover:text-white transition-colors">Services</a>
                    <a href="#" className="hover:text-white transition-colors">Contact</a>
                    <a href="#" className="hover:text-white transition-colors">Privacy</a>
                </div>

                {/* Copyright */}
                <div className="text-sm text-gray-400">
                    &copy; {new Date().getFullYear()} Tecnall 2000. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
