import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Header: React.FC = () => {

    const imgRef = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
        if (imgRef.current) {
            gsap.to(imgRef.current, {
                rotate: -360,
                duration: 80,
                ease: "none",
                repeat: -1,
            });
        }
    }, []);


    return (
        <div className="h-[calc(100vh-64px)] overflow-hidden">
            <>
                <img
                    ref={imgRef}
                    src="/background-spinner.png"
                    alt="rocket"
                    width={1000}
                    height={800}
                    draggable={false}
                    className="absolute lg:w-[66%] 2xl:w-[52%] bottom-0 left-1/2 -translate-x-1/2 translate-y-[54%] -z-10 opacity-55"
                />

                {/* Black gradient overlay */}
                <div className="absolute bottom-0 left-0 w-full h-full pointer-events-none z-10 gradient-hero flex items-center justify-center">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="mb-6 bg-gradient-to-r from-primary via-primary-light to-primary-lighter bg-clip-text text-transparent">
                                We Build Mobile Apps, Websites and AI Solutions That Scale
                            </h1>
                            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                                CodeMuse is a global development agency helping brands build smarter digital products with cutting-edge technology.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/contact">
                                    <Button size="lg" className="gradient-primary text-primary-foreground hover:opacity-90 shadow-medium">
                                        Get a Quote <ArrowRight className="ml-2" size={20} />
                                    </Button>
                                </Link>
                                <Link to="/portfolio">
                                    <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary">
                                        View Portfolio
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </div>
    )
}

export default Header;   