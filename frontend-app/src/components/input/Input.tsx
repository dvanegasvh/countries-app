import { useState } from 'react';
import { ArrowDownIcon } from '../icons';
import { SearchIcon } from '../icons/SearchIcon';
import { ISelectProps, InputProps } from './types/inputProps';

export const Input: React.FC<InputProps> = ({ withIcon, placeholder }) => {
    return (
        <div className="w-full sm:w-[400px] h-[65px] rounded-md shadow-button flex items-center gap-x-5 px-10 ">
            {withIcon && <SearchIcon className="h-7 w-7" />}
            <input
                placeholder={placeholder}
                className="bg-light-gray h-full w-full rounded-md outline-none font-base text-light-blue-dark placeholder:text-light-gray-dark font-medium"
            />
        </div>
    );
};

export const SelectInput: React.FC<ISelectProps> = ({ placeholder, onChangeSelect, options }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selected, setSelected] = useState<string>('');

    return (
        <div
            className="w-[180px] sm:w-[250px] h-[65px] flex flex-col relative rounded-md shadow-button px-5 justify-center cursor-pointer"
            onClick={(): void => {
                setIsOpen(!isOpen);
            }}
        >
            <div className="flex items-center gap-x-5 w-full justify-between">
                <span>{selected ? selected : placeholder}</span>
                <ArrowDownIcon className={`w-6 h-6 ${isOpen && 'rotate-180'} transition-all`} />
            </div>
            {isOpen && (
                <div className="bg-light-gray shadow-button absolute w-full right-0 top-[70px] rounded-md flex flex-col gap-y-2 px-5 py-4 transition-all">
                    {options.map((option, index) => (
                        <div
                            key={`${option.label}-${index}`}
                            onClick={(): void => {
                                setSelected(option.label);
                                onChangeSelect(option.value);
                            }}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
