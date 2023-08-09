'use client';

import { Card } from '../card';
import { Input, SelectInput } from '../input';
import { getRegionsOptions } from '@/utils/options';
import { useHome } from './hooks/useHome';

export const HomePage: React.FC = () => {
    const { countries, handleClickCard, handleOnChangeInput, handleOnChangeSelect } = useHome();

    return (
        <main className="scroll-auto">
            <section className="flex flex-col gap-y-10 sm:flex-row justify-between">
                <Input withIcon placeholder="Search for a country..." onChangeInput={value => handleOnChangeInput(value)} />
                <SelectInput
                    options={getRegionsOptions()}
                    onChangeSelect={(value): void => handleOnChangeSelect(value)}
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
                        onClick={(): void => handleClickCard(country)}
                    />
                ))}
            </section>
        </main>
    );
};
