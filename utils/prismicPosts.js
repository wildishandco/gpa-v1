import Prismic from "prismic-javascript";

export const API_URL = process.env.NEXT_PUBLIC_PRISMIC_API;

export const client = Prismic.client(API_URL);
