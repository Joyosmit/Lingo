import { Button } from "@/components/ui/button"
import Image from "next/image"

export const Footer = () => {
    return (
        <footer className="hidden lg:block w-full h-20 border-t-2 border-slate-200 p-2">
            <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
                <Button size="lg" variant="ghost" className="w-full">
                    <Image src="hr.svg" alt="Croatian" width={40} height={32}
                    className="rounded-md mr-4"/>
                    Croatian
                </Button>

                <Button size="lg" variant="ghost" className="w-full">
                    <Image src="es.svg" alt="Spanish" width={40} height={32}
                    className="rounded-md mr-4"/>
                    Spanish
                </Button>

                <Button size="lg" variant="ghost" className="w-full">
                    <Image src="jp.svg" alt="Japanese" width={40} height={32}
                    className="rounded-md mr-4"/>
                    Japanese
                </Button>

                <Button size="lg" variant="ghost" className="w-full">
                    <Image src="fr.svg" alt="French" width={40} height={32}
                    className="rounded-md mr-4"/>
                    French
                </Button>

                <Button size="lg" variant="ghost" className="w-full">
                    <Image src="it.svg" alt="Italian" width={40} height={32}
                    className="rounded-md mr-4"/>
                    Italian
                </Button>
            </div>
        </footer>
    )
}


