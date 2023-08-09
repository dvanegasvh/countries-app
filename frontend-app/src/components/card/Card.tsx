import { CardProps } from './types/cardProps';

export const Card: React.FC<CardProps> = ({ title, characteristics }) => {
    return (
        <div className="w-[300px] h-[340px] shadow-button rounded-md mt-10">
            <div className="h-[47%] w-full bg-slate-600 rounded-md"></div>
            <div className="px-8 mt-7">
                <h1 className="text-[16px] sm:text-[28px] font-bold">{title}</h1>
                <ul className="mt-4">
                    {characteristics?.map((characteristic, index) => (
                        <li key={index} className="font-medium text-[16px]">
                            <span className="font-semibold text-[16px]">{characteristic.title}:</span>{' '}
                            {characteristic.description}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
