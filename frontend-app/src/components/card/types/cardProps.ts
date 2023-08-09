import { Characteristics, CountriesResponse } from '@/types/countries';

export interface CardProps {
    title: string;
    characteristics: Characteristics[];
    image: string;
    onClick: () => void;
}
