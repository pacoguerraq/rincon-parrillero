// app/sitemap.ts
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    return [
        {
            url: `${process.env.NEXT_PUBLIC_HOST}`,
            lastModified: new Date(),
        },
        {
            url: `${process.env.NEXT_PUBLIC_HOST}/productos/pasteles`,
            lastModified: new Date(),
        },
        {
            url: `${process.env.NEXT_PUBLIC_HOST}/productos/pays`,
            lastModified: new Date(),
        },
        {
            url: `${process.env.NEXT_PUBLIC_HOST}/productos/brownies`,
            lastModified: new Date(),
        },
    ]
}