import React from 'react';
import { useInView } from 'react-intersection-observer';

interface FadeInProps {
    children: React.ReactNode;
    transitionDuration?: number;
}

const FadeIn: React.FC<FadeInProps> = ({ children, transitionDuration = 700 }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div
            ref={ref}
            style={{
                opacity: inView ? 1 : 0,
                transform: `translateY(${inView ? 0 : 20}px)`,
                transition: `opacity ${transitionDuration}ms ease-out, transform ${transitionDuration}ms ease-out`,
            }}
        >
            {children}
        </div>
    );
};

export default FadeIn; 