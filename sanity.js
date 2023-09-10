import sanityClient from "@sanity/client";
import { imageUrlBuilder } from '@sanity/image-url';

const client = sanityClient({
    projectId:"i9fyion6",
    dataset:"production",
useCdn:true,
apiVersion:"2022-05-05",
})

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);



export default client;