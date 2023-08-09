'use client';
import { useEffect } from 'react';
import { Card } from '@/components/card';
import { Input, SelectInput } from '@/components/input';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { getCountries, setCountryInformation } from '@/redux/countries/countries.slice';
import { CountriesResponse } from '@/types/countries';
import { useRouter } from 'next/navigation';

export default function Home() {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const { countries, countryInformation } = useAppSelector(state => state.countries);

    useEffect(() => {
        dispatch(getCountries());
    }, []);

    const handleCLickCard = (country: CountriesResponse): void => {
        dispatch(setCountryInformation(country));
        router.push(`/details`);
    };

    return (
        <main className="">
            <section className="flex flex-col gap-y-10 sm:flex-row justify-between">
                <Input withIcon placeholder="Search for a country..." />
                <SelectInput
                    options={[{ label: 'Prueba', value: 'Pruebaa' }]}
                    onChangeSelect={(): void => {}}
                    placeholder="Filter by Region"
                />
            </section>

            <section className="grid gap-y-10 sm:grid-cols-2 sm:gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-22 xl:grid-cols-4 xl:gap-32">
                {countries?.map(country => (
                    <Card
                        key={country.name}
                        title={country.name}
                        characteristics={country.characteristics || []}
                        image={country.flag}
                        onClick={(): void => handleCLickCard(country)}
                    />
                ))}
            </section>
        </main>
    );
}
