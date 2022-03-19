import React, { useEffect, useRef, useMemo, useState } from "react";
import './App.css'
import img from './assets/hanging_out_easy_landing.svg'

function Third() {
    const targetRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const options = useMemo(() => {
        return {
            threshold: 0.5,
        }
    }, [])

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            const [entry] = entries;
            setIsVisible(entry.isIntersecting);
        }, options)

        const currentTarget = targetRef.current;
        if (currentTarget) observer.observe(currentTarget);

        return () => {
            if (currentTarget) observer.unobserve(currentTarget);
        }
    }, [])

    return (
        <>
            <div className="info-container" style={{ background: '#f6f6f6' }} ref={targetRef}>
                <div className={`info-context ${isVisible ? 'transition-show' : 'transition-hidden'}`}>
                    <h2>Where hanging out is easy
                    </h2>
                    <p>Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.
                    </p>
                </div>

                <div className={`info-img ${isVisible ? 'transition-show' : 'transition-hidden'}`}>
                    <img src={img} alt="hanging_out_easy_landing" />
                </div>
            </div>
        </>
    )
}

export default Third;