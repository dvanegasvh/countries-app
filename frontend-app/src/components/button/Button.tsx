import { ArrowBackIcon } from '../icons';
import { ButtonProps } from './types/button';

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="!border-none rounded-md h-12 px-12 text-light-blue-dark shadow-button flex justify-center items-center gap-x-3"
        >
            <ArrowBackIcon className="h-6 w-6" />
            {children}
        </button>
    );
};
