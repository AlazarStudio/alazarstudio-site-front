import React, { useState } from "react";
import classes from './VideoStart.module.css';

function VideoStart({ children, ...props }) {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    const handleVideoLoad = () => {
        // Даем дополнительное время для загрузки видео внутри iframe
        // Kinescope плееру нужно время, чтобы загрузить и подготовить видео
        setTimeout(() => {
            setIsVideoLoaded(true);
        }, 2000);
    };

    return (
        <div className={classes.videoStart}>
            <div 
                className={classes.videoPreview}
                style={{ 
                    opacity: isVideoLoaded ? 0 : 1, 
                    pointerEvents: isVideoLoaded ? 'none' : 'auto',
                    transition: 'opacity 0.5s ease-in-out'
                }}
            >
                <img src="/preview.webp" alt="Video preview" />
            </div>
            <iframe
                id="__kinescope_player_1"
                allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write; screen-wake-lock"
                allowFullScreen=""
                width="100%"
                height="100%"
                src="https://kinescope.io/embed/spMDyic1tXtdVHWKCvKP3r?player_id=d226cc96-6688-4b30-a74c-8fcf16e5f39e&amp;v=2.172.0&amp;_=cGxheWVySWQ9X19raW5lc2NvcGVfcGxheWVyXzEmc2l6ZSU1QndpZHRoJTVEPTEwMCUyNSZzaXplJTVCaGVpZ2h0JTVEPTEwMCUyNSZiZWhhdmlvciU1QmF1dG9QYXVzZSU1RD1mYWxzZSZiZWhhdmlvciU1QmF1dG9QbGF5JTVEPXRydWUmYmVoYXZpb3IlNUJsb29wJTVEPXRydWUmYmVoYXZpb3IlNUJtdXRlZCU1RD10cnVlJmJlaGF2aW9yJTVCcGxheXNJbmxpbmUlNUQ9dHJ1ZSZiZWhhdmlvciU1QmxvY2FsU3RvcmFnZSU1RD1mYWxzZSZ1aSU1QmNvbnRyb2xzJTVEPWZhbHNlJnVpJTVCbWFpblBsYXlCdXR0b24lNUQ9ZmFsc2UmdWklNUJwbGF5YmFja1JhdGVCdXR0b24lNUQ9ZmFsc2U%3D"
                onLoad={handleVideoLoad}
            >
            </iframe>
            <div className={classes.videoStart_name}>
                <img src="/logo-name.png" alt="" />
            </div>
        </div>
    );
}

export default VideoStart;