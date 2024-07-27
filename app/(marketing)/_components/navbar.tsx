"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils"; 
import { Logo } from "./logo";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import {Spinner} from "@nextui-org/spinner";

export const Navbar = () => {
    const {isAuthenticated, isLoading} = useConvexAuth();
    const scrolled = useScrollTop();
    return ( 
        <div className={cn(
            "z-50 bg-background dark:bg-[#1f1f1f] fixed top-0 flex items-center w-full p-6", scrolled && "border-b shadow-sm"
        )}>
            <Logo/>
            <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
            {isLoading && (
                <Spinner size="sm"/>
            )}
            {!isAuthenticated && !isLoading && (
                <>
                <SignInButton mode="modal">
                    <Button variant="ghost" size="sm">
                        Log In
                    </Button>
                </SignInButton>
                <SignInButton mode="modal">
                    <Button  size="sm">
                        Get Jotion Free
                    </Button>
                </SignInButton>
                    </>
            )}
            <ModeToggle />
                
            </div>

        </div>
     );
}