const ACCESS_REQUEST_BASE_PATH = '/api/accessrequest';

const normalizeAccessRequestBase = (rawUrl: string) => {
  const cleanedUrl = rawUrl.trim().replace(/\/+$/, '');

  if (!cleanedUrl) {
    return '';
  }

  const basePathIndex = cleanedUrl.indexOf(ACCESS_REQUEST_BASE_PATH);
  if (basePathIndex >= 0) {
    return cleanedUrl.slice(0, basePathIndex + ACCESS_REQUEST_BASE_PATH.length);
  }

  return `${cleanedUrl}${ACCESS_REQUEST_BASE_PATH}`;
};

export const getAccessRequestApiBase = () => {
  const explicitBaseUrl =
    import.meta.env.VITE_ACCESS_REQUEST_API_BASE?.trim() ||
    import.meta.env.VITE_BACKEND_URL?.trim() ||
    import.meta.env.BACKEND_URL?.trim();

  if (explicitBaseUrl) {
    return normalizeAccessRequestBase(explicitBaseUrl);
  }

  throw new Error('Missing backend base URL. Set VITE_ACCESS_REQUEST_API_BASE or VITE_BACKEND_URL in .env.');
};

export const getAccessRequestApiUrl = (path: string) => {
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path;
  return `${getAccessRequestApiBase()}/${normalizedPath}`;
};
