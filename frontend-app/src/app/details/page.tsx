'use client';

import { Button } from '@/components/button';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { useEffect } from 'react';
import { getBorders } from '@/redux/countries/countries.slice';
import { useRouter } from 'next/navigation';

const Page: React.FC = () => {
    const { countryInformation, countryBorders } = useAppSelector(state => state.countries);
    const dispatch = useAppDispatch();
    const router = useRouter();

    useEffect(() => {
        dispatch(getBorders(countryInformation.borders));
    }, []);

    return (
        <main>
            <header className="mb-20">
                <Button onClick={(): void => router.push('/')}>Back</Button>
            </header>
            <section className="flex justify-between">
                <img src={countryInformation.flag} alt="flag-image" className="h-[35rem] w-[50rem] object-cover" />
                <div className="mt-16 w-[52rem]">
                    <h1 className="text-[30px] font-bold mb-8">{countryInformation.name}</h1>
                    <div className="flex gap-x-44">
                        <ul className="flex flex-col gap-y-3">
                            <li>
                                <span className="text-[16px] font-semibold mr-2">Native Name:</span>
                                <span className="text-[16px]">{countryInformation.native_names.join(', ')}</span>
                            </li>
                            <li>
                                <span className="text-[16px] font-semibold mr-2">Population:</span>
                                <span className="text-[16px]">{countryInformation.population}</span>
                            </li>
                            <li>
                                <span className="text-[16px] font-semibold mr-2">Region:</span>
                                <span className="text-[16px]">{countryInformation.region}</span>
                            </li>
                            <li>
                                <span className="text-[16px] font-semibold mr-2">Sub Region:</span>
                                <span className="text-[16px]">{countryInformation.subregion}</span>
                            </li>
                            <li>
                                <span className="text-[16px] font-semibold mr-2">Capital:</span>
                                <span className="text-[16px]">{countryInformation.capital}</span>
                            </li>
                        </ul>
                        <ul className="flex flex-col gap-y-3">
                            <li>
                                <span className="text-[16px] font-semibold mr-2">Top Level Domain:</span>
                                <span className="text-[16px]">{countryInformation.top_level}</span>
                            </li>
                            <li>
                                <span className="text-[16px] font-semibold mr-2">Currencies:</span>
                                <span className="text-[16px]">{countryInformation.currencies.join(', ')}</span>
                            </li>
                            <li>
                                <span className="text-[16px] font-semibold mr-2">Languages:</span>
                                <span className="text-[16px]">{countryInformation.languages.join(', ')}</span>
                            </li>
                        </ul>
                    </div>
                    <div className={`flex mt-10 ${countryBorders.length < 3 && 'items-center'}`}>
                        <span className="text-[16px] font-semibold mr-5">Border Countries:</span>
                        <div className="grid grid-cols-3 gap-x-3 gap-y-3">
                            {countryBorders.length ? (
                                <>
                                    {countryBorders
                                        ?.slice(0, 4)
                                        .map(border => (
                                            <div className="shadow-md py-2 px-5 rounded-md flex justify-center items-center text-center">
                                                {border}
                                            </div>
                                        ))}
                                </>
                            ) : (
                                <div className="shadow-md py-2 px-5 rounded-md text-center ">No border countries</div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Page;
