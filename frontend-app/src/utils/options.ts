import { SelectOptions } from '@/components/input/types/inputProps';

export const getRegionsOptions = (): SelectOptions[] => {
    return [
        { value: '', label: 'Filter by Region' },
        { value: 'Africa', label: 'Africa' },
        { value: 'Americas', label: 'Americas' },
        { value: 'Asia', label: 'Asia' },
        { value: 'Europe', label: 'Europe' },
        { value: 'Oceania', label: 'Oceania' },
    ];
};
