'use client';
import { Button } from '@/components/button';
import { useDetails } from './hooks/useDetails';

const Details: React.FC = () => {
    const { countryBorders, countryInformation, handleBack } = useDetails();

    return (
        <section>
            <Button onClick={handleBack}>Back</Button>
            <div className="flex flex-col md:flex-col xl:flex-row gap-x-32 justify-between mt-10 sm:mt-20">
                <img
                    src={countryInformation?.flag}
                    alt="flag-image"
                    className="h-[15rem] sm:h-[35rem]  lg:w-full xl:h-[40rem] xl:w-[48%] object-cover"
                />
                <div className="mt-16 w-full sm:max-w-[55rem]">
                    <h1 className="text-[30px] font-bold mb-8">{countryInformation?.name}</h1>
                    <div className="flex flex-col sm:flex-row sm:gap-x-44 item">
                        <ul className="flex flex-col gap-y-5">
                            <li>
                                <span className="text-[16px] font-semibold mr-2">Native Name:</span>
                                <span className="text-[16px]">{countryInformation?.native_names?.join(', ')}</span>
                            </li>
                            <li>
                                <span className="text-[16px] font-semibold mr-2">Population:</span>
                                <span className="text-[16px]">{countryInformation?.population}</span>
                            </li>
                            <li>
                                <span className="text-[16px] font-semibold mr-2">Region:</span>
                                <span className="text-[16px]">{countryInformation?.region}</span>
                            </li>
                            <li>
                                <span className="text-[16px] font-semibold mr-2">Sub Region:</span>
                                <span className="text-[16px]">{countryInformation?.subregion}</span>
                            </li>
                            <li>
                                <span className="text-[16px] font-semibold mr-2">Capital:</span>
                                <span className="text-[16px]">{countryInformation?.capital}</span>
                            </li>
                        </ul>
                        <ul className="mt-10 sm:mt-0 flex flex-col gap-y-3">
                            <li>
                                <span className="text-[16px] font-semibold mr-2">Top Level Domain:</span>
                                <span className="text-[16px]">{countryInformation?.top_level}</span>
                            </li>
                            <li>
                                <span className="text-[16px] font-semibold mr-2">Currencies:</span>
                                <span className="text-[16px]">{countryInformation?.currencies?.join(', ')}</span>
                            </li>
                            <li>
                                <span className="text-[16px] font-semibold mr-2">Languages:</span>
                                <span className="text-[16px]">{countryInformation?.languages?.join(', ')}</span>
                            </li>
                        </ul>
                    </div>
                    <div className="sm:flex mt-16 items-center">
                        <span className="text-[16px] font-semibold mr-5">Border Countries:</span>
                        <div className="grid grid-cols-3 gap-x-3 gap-y-3 mt-3 sm:mt-0">
                            {countryBorders.length ? (
                                <>
                                    {countryBorders.map(border => (
                                        <div
                                            key={border}
                                            className="shadow-md py-3 sm:py2 sm:px-5 rounded-md flex justify-center items-center text-center dark:bg-dark-blue-dark"
                                        >
                                            {border}
                                        </div>
                                    ))}
                                </>
                            ) : (
                                <div className="shadow-md py-2 px-5 rounded-md text-center dark:bg-dark-blue-dark">
                                    No border countries
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Details;
