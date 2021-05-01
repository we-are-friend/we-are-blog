import client from './sanity';
import imageUrlBuilder from '@sanity/image-url';

const blogFields = `
title,
subtitle,
'slug': slug.current,
date,
'author': author->{name, 'avatar': avatar.asset->url},
coverImage,
`;

const authorFields = `
'avatar': avatar.asset->url,
name,
position,
cation,
social,
`;

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

// offset = how many data you want to skip, limit = how many date you want to fetch
export async function getAllBlogs() {
  const results = await client.fetch(
    `*[_type == "blog"] | order(date desc) {${blogFields}}`,
  );
  return results;
}

export async function getPaginatedBlogs(
  { offset = 0, date = 'desc' } = { offset: 0, date: 'desc' },
) {
  const results = await client.fetch(
    `*[_type == "blog"] | order(date ${date}) {${blogFields}}[${offset}...${
      offset + 6
    }]`,
  );
  return results;
}

export async function getBlogBySlug(slug, preview) {
  const result = await client
    .fetch(
      `*[_type == "blog" && slug.current == $slug] {
      ${blogFields}
      content[]{..., "asset": asset->}
    }`,
      { slug },
    )
    .then((res) => (preview ? (res?.[1] ? res[1] : res[0]) : res?.[0]));

  return result;
}

export async function getAllAuthors() {
  const results = await client.fetch(
    `*[_type == "author"] | order(date desc) {${authorFields}}`,
  );
  return results;
}
