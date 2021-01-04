import Prismic from "prismic-javascript";

export const API_URL = process.env.NEXT_PUBLIC_PRISMIC_API;
export const SHOWROOM_URL = process.env.NEXT_PUBLIC_SHOWROOM_API;

export const client = Prismic.client(API_URL);
export const showroomClient = Prismic.client(SHOWROOM_URL);
