import { useState } from 'react';
import { ArrowDownIcon } from '../icons';
import { SearchIcon } from '../icons/SearchIcon';
import { ISelectProps, InputProps } from './types/inputProps';

export const Input: React.FC<InputProps> = ({ withIcon, placeholder, onChangeInput = (): void => {} }) => {
    return (
        <div className="w-full sm:w-[400px] h-[65px] rounded-md custom-shadow flex items-center gap-x-5 px-10 dark:bg-dark-blue-dark">
            {withIcon && <SearchIcon className="h-7 w-7" />}
            <input
                placeholder={placeholder}
                className="bg-light-gray dark:bg-dark-blue-dark h-full w-full rounded-md outline-none font-base text-light-blue-dark dark:text-light-gray placeholder:text-light-gray-dark  placeholder:dark:text-light-gray font-medium"
                onChange={(e: React.ChangeEvent<HTMLInputElement>): void => onChangeInput(e.target.value)}
            />
        </div>
    );
};

export const SelectInput: React.FC<ISelectProps> = ({ placeholder, onChangeSelect, options }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selected, setSelected] = useState<string>('');

    return (
        <div
            className="w-[180px] sm:w-[250px] h-[65px] flex flex-col relative rounded-md custom-shadow px-5 justify-center dark:bg-dark-blue-dark"
            onClick={(): void => {
                setIsOpen(!isOpen);
            }}
        >
            <div className="flex items-center gap-x-5 w-full justify-between cursor-pointer">
                <span>{selected ? selected : placeholder}</span>
                <ArrowDownIcon className={`w-6 h-6 ${isOpen && 'rotate-180'} transition-all`} />
            </div>
            {isOpen && (
                <div className="bg-light-gray dark:bg-dark-blue-dark custom-shadow absolute w-full right-0 top-[70px] rounded-md flex flex-col  py-4 transition-all">
                    {options.map((option, index) => (
                        <div key={`${option.label}-${index}`} className="hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
                            <div
                                className="px-5 py-2"
                                onClick={(): void => {
                                    setSelected(option.label);
                                    onChangeSelect(option.value);
                                }}
                            >
                                {option.label}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
