import React, { useEffect, useRef, useMemo, useState } from "react";
import './App.css'
import img from './assets/fandom_landing.svg'

function Fourth() {
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
            <div className="info-container" ref={targetRef}>
                <div className={`info-img ${isVisible ? 'transition-show' : 'transition-hidden'}`}>
                    <img src={img} alt="fandom_landing" />
                </div>
                <div className={`info-context ${isVisible ? 'transition-show' : 'transition-hidden'}`}>
                    <h2>From few to a fandom
                    </h2>
                    <p>Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Fourth;