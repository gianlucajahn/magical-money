import React from 'react';

interface ArrowProps {
    color: string;
}

export default function Arrow(props: ArrowProps): JSX.Element {
    return (
        <svg width="30px" height="30px" viewBox="0 0 24 24" fill={props.color} xmlns="http://www.w3.org/2000/svg" stroke={props.color}>
            <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
            <g id="SVGRepo_iconCarrier"> <g id="Arrow / Arrow_Right_SM"> <path id="Vector" d="M7 12H17M17 12L13 8M17 12L13 16" stroke={props.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </g> </g>
        </svg>
    )
}