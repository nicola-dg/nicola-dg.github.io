import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Logo from "./ui/logo"
import NavLinks from "@/data/NavLinks"

const MobileNavbar = () => {
    const [open, setOpen] = useState(false)

    const handleClick = (id: string) => {
        setOpen(false) // manually close the sheet

        const cleanId = id.startsWith("#") ? id.slice(1) : id;
        // wait a bit for the sheet to close, then scroll
        setTimeout(() => {
            const section = document.getElementById(cleanId)
            section?.scrollIntoView({ behavior: "smooth" })
        }, 500) // 50ms is usually enough
    }

    return (
        <div className="fixed top-0 z-5000 w-full flex justify-between items-center p-4 bg-primary text-white">
            <Logo />

            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                    <Button variant="ghost" className="h-12 w-12">
                        <Menu className="w-7 h-7" />
                    </Button>
                </SheetTrigger>

                <SheetContent side="right" className="px-6 py-8 z-6000">
                    <nav className="flex flex-col gap-4">
                        {NavLinks.map((link) => (
                            <button
                                key={link.href}
                                className="text-lg hover:text-primary text-left"
                                onClick={() => handleClick(link.href)}
                            >
                                {link.text}
                            </button>
                        ))}
                    </nav>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default MobileNavbar
