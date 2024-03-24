import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ClerkLoaded, ClerkLoading, SignInButton, SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Link from "next/link";
export default function Home() {
    return (
        <div className="mx-auto max-w-[988px] flex flex-1 w-full flex-col lg:flex-row items-center
    justify-center p-4 gap-2">
            <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px]
        mb-8 lg:mb-0">
                <Image src="/hero.svg" fill alt="Hero" />
            </div>
            <div className="flex flex-col gap-y-8 items-center">
                <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w[480px]
            text-center">
                    Learn, practice and master new languages with Lingo
                </h1>
                <div className="flex flex-col gap-y-3 items-center max-w-[330px] w-full">
                    <ClerkLoading>
                        <Loader className="h-5 w-5 animate-spin text-muted-foreground" />
                    </ClerkLoading>
                    <ClerkLoaded>
                        <SignedIn>
                            <Button size="lg" variant="secondary" className="w-full"
                            >
                                <Link href="/learn">
                                    Continue Learning
                                </Link>
                            </Button>
                        </SignedIn>
                        <SignedOut>
                            <SignUpButton
                                mode="modal"
                                afterSignUpUrl="/learn"
                                afterSignInUrl="/learn"
                            >
                                <Button size="lg" variant="secondary" className="w-full">
                                    Get Started
                                </Button>
                            </SignUpButton>

                            <SignInButton
                                mode="modal"
                                afterSignUpUrl="/learn"
                                afterSignInUrl="/learn"
                            >
                                <Button size="lg" variant="primaryOutline" className="w-full">
                                    I already have an account
                                </Button>
                            </SignInButton>
                        </SignedOut>
                    </ClerkLoaded>
                </div>
            </div>
        </div>);
}
