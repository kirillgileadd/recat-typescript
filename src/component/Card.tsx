import React, {FC, useState} from 'react';

export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary'
}

interface CardProps {
    width?: string;
    height?: string;
    variant?: CardVariant;
    onClick: (num: number) => void;
}


const Card: FC<CardProps> =
    ({
         width,
         height,
         onClick,
         children,
         variant
     }) => {
    const [state, setState] = useState(0)
        return (
            <div style={{
                width,
                height,
                padding: '6px',
                background: variant === CardVariant.primary ? 'lightpink' : 'none',
                border: variant === CardVariant.outlined ? '2px solid lightpink' : 'none',
                borderRadius: variant === CardVariant.outlined ? '5px' : 'none'
            }}
            onClick={() => {
                setState(prev => prev + 1)
                onClick(state)
            }}
            >
                {children}
            </div>
        );
    };

export default Card;