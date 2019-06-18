import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
export const isDev = !publicRuntimeConfig || publicRuntimeConfig.ENV !== 'PRODUCTION';

const {
    ENV, APP_VERSION, SUB_TITLE, LOCALE, URL_SERVER_API
} = publicRuntimeConfig;

export {
    ENV, APP_VERSION, SUB_TITLE, LOCALE, URL_SERVER_API
}


