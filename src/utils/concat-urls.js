export const concatUrls = (url1, url2) => {
    const separator = url1[url1.length - 1] === '/' ? '' : '/';
    return `${url1}${separator}${url2}`;
};
