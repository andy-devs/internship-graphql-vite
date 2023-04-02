export const VITE_GRAPHQL_API_URL = import.meta.env.VITE_GRAPHQL_API_URL;
export const NODE_ENV = import.meta.env.NODE_ENV;
export const IS_DEVELOPMENT = NODE_ENV === 'development';

export const FILE_ACCEPTS = {
  image: { 'image/*': ['.jpeg', '.png'] },
  pdf: { 'application/pdf': ['.pdf'] },
};
