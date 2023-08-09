'use client';
import { Button } from '@/components/button';
import { Card } from '@/components/card';
import { Input, SelectInput } from '@/components/input';

export default function Home() {
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
            <section>
                <Card title="Germany" characteristics={[{ title: 'Population', description: '10.2003.44' }]} image="" />
            </section>
        </main>
    );
}
