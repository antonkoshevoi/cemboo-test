import { RefObject } from "react";

export type TCast = {
    name: string,
    role: string
}

export type TMedia = {
    id: number,
    title: string,
    release_year: number,
    genre: string[],
    director: string,
    cast: TCast[],
    rating: number,
    duration_minutes: number,
    synopsis: string,
    thumbnail_horizontal: string,
    thumbnail_vertical: string
}