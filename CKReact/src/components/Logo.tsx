import React from 'react'

 // Interfaz para especificar los props que espera el componente (para renderizar imagen principal)
 type LogoProps = {
    src: string;
    alt: string;
    imgSize: number;
    }

const Logo: React.FC<LogoProps> = ({ src, alt, imgSize }) => {
    return (
        <div className='logo'>
            <img src={src} alt={alt} width={imgSize}/>
        </div>
    );
};

export default Logo

