import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Logo from "./Logo"

const MobileNavbar = () => {
    const [open, setOpen] = useState(false)

    const links = [
        { label: "Home", id: "home" },
        { label: "Contatti", id: "contatti" },
        { label: "Services", id: "services" },
    ]

    const handleClick = (id: string) => {
        setOpen(false) // manually close the sheet

        // wait a bit for the sheet to close, then scroll
        setTimeout(() => {
            const section = document.getElementById(id)
            section?.scrollIntoView({ behavior: "smooth" })
        }, 500) // 50ms is usually enough
    }

    return (
        <div className="flex justify-between items-center p-4 bg-primary text-white">
            <Logo />

            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                    <Button variant="ghost" className="h-12 w-12">
                        <Menu className="w-7 h-7" />
                    </Button>
                </SheetTrigger>

                <SheetContent side="right" className="px-6 py-8">
                    <nav className="flex flex-col gap-4">
                        {links.map((link) => (
                            <button
                                key={link.id}
                                className="text-lg hover:text-primary text-left"
                                onClick={() => handleClick(link.id)}
                            >
                                {link.label}
                            </button>
                        ))}
                    </nav>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default MobileNavbar
