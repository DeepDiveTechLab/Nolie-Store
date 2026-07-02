export interface SEOData {
  title: string;
  description: string;
  keywords: string;
  image: string;
  url: string;
  type: string;
}
export const generateSEO = (data: SEOData) => {
  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    image: data.image,
    url: data.url,
    type: data.type
  };
};
