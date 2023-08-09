'use client';
import { Button } from '@/components/button';
import { Card } from '@/components/card';
import { Input, SelectInput } from '@/components/input';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { getCountries } from '@/redux/countries/countries.slice';
import { useEffect } from 'react';

export default function Home() {
    const dispatch = useAppDispatch();
    const { countries } = useAppSelector(state => state.countries);
    useEffect(() => {
        dispatch(getCountries());
    }, []);

    console.log(countries);

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

            <section className="grid gap-y-10 sm:grid-cols-2 sm:gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-22 xl:grid-cols-4 xl:gap-48">
                {countries?.map((country, index) => (
                    <Card
                        key={country.name}
                        title={country.name}
                        characteristics={country.characteristics || []}
                        image={country.flag}
                    />
                ))}
            </section>
        </main>
    );
}
