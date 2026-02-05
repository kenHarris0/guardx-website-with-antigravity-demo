import { useEffect, useState } from 'react';
import cctvImage from '../assets/images/cctv.png';

const CCTVCamera = () => {
    // Rotation for the "scanning" motion
    const [rotationY, setRotationY] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            // Smooth mild scanning motion
            setRotationY(Math.sin(Date.now() / 2000) * 10);
        }, 16);
        return () => clearInterval(interval);
    }, []);

    const scale = 1.8; // Adjusted scale for the image

    return (
        <div style={{
            perspective: '1200px',
            width: `${300 * scale}px`,
            height: `${300 * scale}px`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative'
        }}>
            <div style={{
                transformStyle: 'preserve-3d',
                transform: `rotateY(${rotationY}deg)`,
                transition: 'transform 0.1s linear',
                position: 'relative',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {/* Realistic CCTV Image */}
                <img
                    src={cctvImage}
                    alt="CCTV Camera"
                    style={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'contain',
                        filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.6))', // Heavy shadow for depth
                        transform: 'rotateY(180deg)', // Flip to face left if needed, or adjust based on image
                    }}
                />
            </div>

            <style>{`
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                }
            `}</style>
        </div>
    );
};

export default CCTVCamera;
