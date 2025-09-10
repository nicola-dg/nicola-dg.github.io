
const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 p-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
                {/* Logo / Branding */}
                <div className="mb-4 md:mb-0 font-inter text-white font-bold text-lg">
                    Tecnal 2000
                </div>

                {/* Copyright */}
                <div className="text-sm text-gray-400">
                    &copy; {new Date().getFullYear()} Tecnal 2000. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
