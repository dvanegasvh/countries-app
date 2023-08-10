import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { getBorders } from '@/redux/countries/countries.slice';
import { CountriesResponse } from '@/types/countries';
import { Routes } from '@/types/general';
import { useRouter } from 'next/navigation';

export const useDetails = (): { countryInformation: CountriesResponse; countryBorders: string[]; handleBack: () => void } => {
    const { countryInformation, countryBorders } = useAppSelector(state => state.countries);
    const dispatch = useAppDispatch();
    const router = useRouter();

    useEffect(() => {
        !Object.values(countryInformation).length && router.push(Routes.HOME);
        dispatch(getBorders(countryInformation?.borders));
    }, []);

    const handleBack = (): void => {
        router.back();
    };

    return {
        countryInformation,
        countryBorders,
        handleBack,
    };
};
