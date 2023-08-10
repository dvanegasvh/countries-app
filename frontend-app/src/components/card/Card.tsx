import { CardProps } from './types/cardProps';

export const Card: React.FC<CardProps> = ({ title, characteristics, image, onClick }) => {
    return (
        <div
            className="w-[100%] h-[410px] xl:h-[500px] custom-shadow rounded-md mt-10 cursor-pointer bg-light-gray  dark:bg-dark-blue-dark"
            onClick={onClick}
        >
            <img src={image} alt={`${title}-flag`} className="h-[50%] w-full object-cover rounded-tr-md rounded-tl-md" />
            <div className="px-8 mt-7">
                <h1 className="text-[20px] font-bold">{title}</h1>
                <ul className="mt-4">
                    {characteristics?.map(characteristic => (
                        <li key={characteristic.title} className="font-medium text-[16px] mb-3">
                            <span className="font-semibold text-[16px] mr-3">{characteristic.title}:</span>
                            {characteristic.description}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
