"use client";

import {useParams} from "next/navigation";
import useSWR from 'swr';
import WeatherCard from "../../components/weatherCard";
import styled from "styled-components";
import {Weather} from "@/app/interfaces/weather";

const WeatherContentWrapper = styled.main`
    width: 80vw;
    margin: auto;
    margin-top: 10vh;
    background-color: #389ea1;
    padding: 2rem;
    border-radius: 20px;
    
`;

const CityName = styled.h1`
    font-size: calc(16px + 1.5vw);
    font-weight: bold;
    color: #ffffff;
    margin-bottom: 1rem;
`;


const WeatherCardsContainer = styled.div`
    display: flex;
    flex-wrap: row wrap;
    background-color: #f0f0f0;
    border-radius: 10px;
    margin-top: 1rem;
`;


export default function CityPage(){
    const params = useParams();

    //const {data, error} = useSWR(`/api/getWeatherData?city=${params.city}`, (url) => fetch(url).then((res) => res.json()));

    const { data, error } = useSWR(
        params.city ? `/api/getWeatherData?city=${params.city}` : null,
        (url) => fetch(url).then((res) => res.json())
    );

    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;

    const days = data?.days || [];

    return(
        <WeatherContentWrapper>
            <CityName>{params.city}</CityName>
            <WeatherCardsContainer>
                {
                    days.map((weather: Weather, i:number) =>
                        (
                        <WeatherCard
                            key={i}
                            datetime={weather.datetime}
                            conditions={weather.conditions}
                            description={weather.description}
                            tempmin={weather.tempmin}
                            tempmax={weather.tempmax}
                        />
                        )
                    )
                }
            </WeatherCardsContainer>
        </WeatherContentWrapper>
    );
}