import React from 'react'

 // Interfaz para especificar los props que espera el componente (para renderizar imagen principal)
 interface LogoProps {
    src: string;
    alt: string;
    imgSize: number;
}

function Logo ({ src, alt, imgSize } : LogoProps) {
    return (
        <div className='logo'>
            <img src={src} alt={alt} width={imgSize}/>
        </div>
    );
};

export default Logo;

