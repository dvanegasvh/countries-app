import React from 'react';

export interface ButtonProps extends React.ComponentProps<'button'> {
    children: React.ReactNode | React.ReactNodeArray;
}
