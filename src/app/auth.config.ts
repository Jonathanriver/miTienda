import { isPlatform } from '@ionic/angular';
import config from '../capacitor.config';

export const domain = 'dev-3k0q8b8y.us.auth0.com';
export const clientId = 'M5DT7kuzF3lPFd6TgmulCt3csyJy7eXs';
const { appId } = config;

// Use `auth0Domain` in string interpolation below so that it doesn't
// get replaced by the quickstart auto-packager
const auth0Domain = domain;
const iosOrAndroid = isPlatform('ios') || isPlatform('android');

export const callbackUri = iosOrAndroid
  ? `${appId}://${auth0Domain}/capacitor/${appId}/callback`
  : 'http://localhost:8100';