import React, { useEffect, useRef, useMemo, useState } from "react";
import './App.css'
import img from './assets/just_chiling_landing.svg'

function Fifth() {
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
            if (entry.isIntersecting) {
                observer.unobserve(targetRef.current);
            }
        }, options)

        const currentTarget = targetRef.current;
        if (currentTarget) observer.observe(currentTarget);

        return () => {
            if (currentTarget) observer.unobserve(currentTarget);
        }
    }, [])

    return (
        <>
            <div className="info-fifth-container" ref={targetRef}>
                <div className={`info-fifth-context ${isVisible ? 'transition-show' : 'transition-hidden'}`}>
                    <h2>RELIABLE TECH FOR STAYING CLOSE
                    </h2>
                    <p>Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.
                    </p>
                </div>

                <div className={`info-fifth-img ${isVisible ? 'transition-show' : 'transition-hidden'}`}>
                    <img src={img} alt="just_chiling_landing" />
                </div>

                <div className="info-fifth-download">
                    <h2>Ready to start your journey?
                    </h2>
                    <button className="fifth-btn-download btn ">Download for Windows</button>
                </div>
            </div>
        </>
    )
}

export default Fifth;