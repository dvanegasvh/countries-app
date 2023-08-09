import React, { HtmlHTMLAttributes } from 'react';

type SelectOptions = {
    value: string;
    label: string;
};

export interface InputProps extends React.ComponentProps<'input'> {
    withIcon?: boolean;
}

export interface ISelectProps extends React.ComponentProps<'select'> {
    onChangeSelect: (value: string) => void;
    options: SelectOptions[];
}
