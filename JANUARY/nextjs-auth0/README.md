# Authentication using Auth0 in a server-side rendered app (Using Next.js)

Code sample for an integration between Next.js and Auth0.

First, please install all dependencies by executing `npm i`.

To launch the application please execute `npm run dev`.

To read more about the project please go to: https://fullstack-developer.academy/using-next-js-and-auth0/

## Configuration

Get the data from your `auth0` account and set the following parameters accordingly in `settings.js`

```
const clientID = process.env.CLIENT_ID || 'Xx0x0x0x0xxx0x0x0x00x00000xxxx0x0xXXX';
const domain = process.env.DOMAIN || 'xxxxx-xxxxx-xxxxx.eu.auth0.com';

```
