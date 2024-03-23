import Image from "next/image";
import { Button } from "@/components/ui/button";
export default function Home() {
    return (
    <div className="mx-auto max-w-[988px] flex flex-1 w-full flex-col lg:flex-row items-center
    justify-center p-4 gap-2">
        <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px]
        mb-8 lg:mb-0">
            <Image src="/hero.svg" fill alt="Hero"/>
        </div>
        <div className="flex flex-col gap-y-8 items-center">
            <h1>Learn, practice and master new languages with Lingo</h1>
        </div>
    </div>);
}
