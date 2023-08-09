import { CardProps } from './types/cardProps';

export const Card: React.FC<CardProps> = ({ title, characteristics, image, onClick }) => {
    return (
        <div className="w-[100%] h-[410px] xl:h-[500px]  shadow-button rounded-md mt-10 cursor-pointer" onClick={onClick}>
            <img src={image} alt="flag" className="h-[50%] w-full object-cover" />
            <div className="px-8 mt-7">
                <h1 className="text-[20px] font-bold">{title}</h1>
                <ul className="mt-4">
                    {characteristics?.map((characteristic, index) => (
                        <li key={index} className="font-medium text-[16px] mb-3">
                            <span className="font-semibold text-[16px]">{characteristic.title}:</span>
                            {characteristic.description}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
