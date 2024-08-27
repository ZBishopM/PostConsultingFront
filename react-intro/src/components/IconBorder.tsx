import React from 'react';

interface IconBorderProps {
    icon: React.ReactNode;
}

const IconBorder: React.FC<IconBorderProps> = ({ icon}) => {
    return (
        <>
        <button className='btn btn-ghost w-fit'>
        {icon}
        3
        </button>
        </>
    );
};

export default IconBorder;