import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import Logo from "./ui/logo"
import { ChevronDown } from "lucide-react"
import NavLinks from "@/data/NavLinks"

const DesktopNavbar = () => {
    return (
        <nav className="fixed top-0 bg-primary text-white p-2 px-4 z-5000 w-full">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <Logo />

                {/* Links */}
                <div className="flex space-x-6 items-center">

                    {NavLinks.slice(0, 4).map(link => (
                        <a key={link.href} href={link.href} className="hover:text-blue-300">{link.text}</a>
                    ))}
                    <MyMenu></MyMenu>
                </div>
            </div>
        </nav>
    )
}

export default DesktopNavbar


const MyMenu = () => {
    return (
        < DropdownMenu >

            <DropdownMenuTrigger className="hover:text-blue-300 flex items-center space-x-1">
                <span>Altro</span>
                <ChevronDown size={16} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-primary text-white mt-2 rounded shadow-lg border border-black z-6000">

                {NavLinks.slice(4).map(link => (
                    <DropdownMenuItem key={link.href}>
                        <a href={link.href} className="w-full hover:text-blue-300">{link.text}</a>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu >

    )
}