import {concatUrls} from 'utils/concat-urls';

export const createMakeBaseDocumentPath = match => path =>
    concatUrls(match.url, path);
