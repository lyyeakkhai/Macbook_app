import { useEffect, useRef } from "react";

export default function Hero() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 2;
        }
    }, []);

    return (
        <section id="hero">
            <div>
                <h1>Macbook Pro</h1>
                <img src="/title.png" alt="macbook" />
            </div>
            <video
                ref={videoRef}
                src="/videos/hero.mp4"
                autoPlay
                muted
                playsInline
            />
            <button>Buy</button>
            <p>
                Only 2199$
            </p>
        </section>
    );
}