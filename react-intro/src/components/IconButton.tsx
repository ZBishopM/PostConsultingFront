import React from 'react';

interface IconButtonProps {
    icon: React.ReactNode;
    className?: string;
    num: number;
    onclick?: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({
    icon,
    className,
    num,
    onclick,
}) => {
    return (
        <>
        <button onClick={onclick} className={className}>
        {icon}
        {num}
        </button>
        </>
    );
};

export default IconButton;