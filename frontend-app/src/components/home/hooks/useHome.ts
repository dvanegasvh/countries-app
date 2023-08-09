import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { getCountries, setCountryInformation } from '@/redux/countries/countries.slice';
import { CountriesResponse } from '@/types/countries';
import { Routes } from '@/types/general';

export const useHome = (): {
    countries: CountriesResponse[];
    handleClickCard: (country: CountriesResponse) => void;
    handleOnChangeInput: (value: string) => void;
    handleOnChangeSelect: (value: string) => void;
} => {
    const { countries } = useAppSelector(state => state.countries);
    const dispatch = useAppDispatch();
    const router = useRouter();
    const [search, setSearch] = useState<string>('');
    const [region, setRegion] = useState<string>('');

    useEffect(() => {
        dispatch(getCountries());
    }, []);

    const handleClickCard = (country: CountriesResponse): void => {
        dispatch(setCountryInformation(country));
        router.push(Routes.DETAILS);
    };

    const handleOnChangeInput = (value: string): void => {
        setSearch(value);
    };

    const handleOnChangeSelect = (value: string): void => {
        setRegion(value);
    };

    const filterSearch = useMemo(() => {
        if (search && region) {
            return countries?.filter(
                country => country.name.toLowerCase().includes(search.toLowerCase()) && country.region === region,
            );
        }
        if (region) {
            return countries?.filter(country => country.region === region);
        }

        return countries?.filter(country => country.name.toLowerCase().includes(search.toLowerCase()));
    }, [search, countries, region]);

    return {
        countries: filterSearch,
        handleClickCard,
        handleOnChangeInput,
        handleOnChangeSelect,
    };
};
