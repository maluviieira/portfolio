import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Hero(){
    const containerRef = useRef<HTMLDivElement>(null);
    const nameRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    
    useGSAP(() => {
        const tl = gsap.timeline({delay: 0.2});

        tl.from([nameRef.current, subtitleRef.current], {
            y: 40,
            opacity: 0,
            duration: 1.2,
            stagger: 0.2,
            ease: "power3.out"
        });
    }, {scope : containerRef});

    return (
        <div ref={containerRef} className="w-full flex items-end px-6 md:px-20 pb-12 md:pb-24">
        <div className="flex flex-col gap-y-2">
            <h1 ref={nameRef} className="text-6xl md:text-9xl font-semibold tracking-tighter leading-none">
                malu vieira
            </h1>
            <p ref={subtitleRef} className="text-lg md:text-2xl font-normal ml-1">
                computer engineering student, full-stack developer
            </p>
        </div>
    </div>
    );
}

export default Hero