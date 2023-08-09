import React, { HtmlHTMLAttributes } from 'react';

export type SelectOptions = {
    value: string;
    label: string;
};

export interface InputProps extends React.ComponentProps<'input'> {
    withIcon?: boolean;
    onChangeInput: (value: string) => void;
}

export interface ISelectProps extends React.ComponentProps<'select'> {
    onChangeSelect: (value: string) => void;
    options: SelectOptions[];
}
