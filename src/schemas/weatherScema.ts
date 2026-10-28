
import { z } from "zod";

const ConditionSchema = z.object({
    text: z.string(),
    icon: z.string(),
    code: z.number(),
});

const HourWeatherSchema = z.object({
    time: z.string(),
    temp_c: z.number(),
    feelslike_c: z.number(),
    is_day: z.number(),
    condition: ConditionSchema,
    wind_kph: z.number(),
    humidity: z.number(),
    chance_of_rain: z.number(),
    chance_of_snow: z.number(),
    cloud: z.number(),
    vis_km: z.number(),
    uv: z.number(),
});

const LocationSchema = z.object({
    name: z.string(),
    region: z.string(),
    country: z.string(),
    lat: z.number(),
    lon: z.number(),
    tz_id: z.string(),
    localtime: z.string(),
});

const CurrentWeatherSchema = z.object({
    temp_c: z.number(),
    feelslike_c: z.number(),
    is_day: z.number(),
    condition: ConditionSchema,
    wind_kph: z.number(),
    humidity: z.number(),
    cloud: z.number(),
    vis_km: z.number(),
    uv: z.number(),
    last_updated: z.string(),
});

const DayWeatherSchema = z.object({
    maxtemp_c: z.number(),
    mintemp_c: z.number(),
    avgtemp_c: z.number(),
    maxwind_kph: z.number(),
    totalprecip_mm: z.number(),
    avghumidity: z.number(),
    daily_chance_of_rain: z.number(),
    daily_chance_of_snow: z.number(),
    condition: ConditionSchema,
    uv: z.number(),
});

const AstroSchema = z.object({
    sunrise: z.string(),
    sunset: z.string(),
    moonrise: z.string(),
    moonset: z.string(),
    moon_phase: z.string(),
});

const ForecastDaySchema = z.object({
    date: z.string(),
    date_epoch: z.number(),
    day: DayWeatherSchema,
    astro: AstroSchema,
    hour: z.array(HourWeatherSchema),
});

const ForecastSchema = z.object({
    forecastday: z.array(ForecastDaySchema),
});

export const WeatherSchema = z.object({
    location: LocationSchema,
    current: CurrentWeatherSchema,
    forecast: ForecastSchema,
});

export type Weather = z.infer<typeof WeatherSchema>;
