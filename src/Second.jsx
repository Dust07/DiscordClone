import React, { useEffect, useRef, useMemo, useState } from "react";
import './App.css'
import img from './assets/invite_only_landing.svg'

function Second() {
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
    }, [targetRef, options])

    return (
        <>
            <div className={`info-container`} ref={targetRef}>
                <div className={`info-img ${isVisible ? 'transition-show' : 'transition-hidden'}`}>
                    <img src={img} alt="invite_only_landing" />
                </div>
                <div className={`info-context ${isVisible ? 'transition-show' : 'transition-hidden'}`}>
                    <h2>Create an invite-only place where you belong
                    </h2>
                    <p>Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Second;