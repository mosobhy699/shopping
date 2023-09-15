// there are a change we use now createClient from @sanity/client
// there are a change we use now imageUrlBuilder which use to crop images  from '@sanity/image-url'

import { createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'
export const client = createClient({
    projectId: '21h0zi5a',
    dataset: 'production',
    apiVersion: '2023-08-05',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
    ignoreBrowserTokenWarning: true
});
const builder = imageUrlBuilder(client)
export function urlFor(source) {
    return builder.image(source)
}