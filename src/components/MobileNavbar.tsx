import { Button } from "@/components/ui/button"

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Logo from "./Logo"


const MobileNavbar = () => {
    const links = [
        { label: "Home", href: "#home" },
        { label: "Chi siamo", href: "#chi-siamo" },
        { label: "I nostri lavori", href: "#lavori" },
        { label: "Contatti", href: "#contatti" },
        { label: "Dove ci troviamo", href: "#dove-ci-troviamo" },
        { label: "Lavora con noi", href: "#lavora-con-noi" },
        { label: "Promozioni", href: "#promozioni" },
    ]

    return (
        <div className="flex justify-between p-4 bg-primary text-white">
            <Logo></Logo>


            <Sheet>
                <SheetTitle className="hidden">
                    Menu
                </SheetTitle>
                <SheetDescription className="hidden">
                    Usa la navbar a comparsa per navigare il sito.
                </SheetDescription>
                {/* Trigger hamburger */}
                <SheetTrigger asChild>
                    <Button variant="ghost" className="h-12 w-12">
                        <Menu className="w-7 h-7" />
                    </Button>
                </SheetTrigger>

                {/* Contenuto del menu */}
                <SheetContent side="right" className="px-4">

                    <nav className="mt-6 flex flex-col gap-4">
                        {links.map((link) => (
                            <SheetClose asChild key={link.href}>
                                <a
                                    href={link.href}
                                    className="text-lg hover:text-primary transition-colors"
                                >
                                    {link.label}
                                </a>
                            </SheetClose>
                        ))}
                    </nav>
                </SheetContent>
            </Sheet>
        </div>


    )
}

export default MobileNavbar