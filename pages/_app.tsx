import '../styles/globals.css';
import {IconPack, library} from '@fortawesome/fontawesome-svg-core';
import {fad} from '@fortawesome/pro-duotone-svg-icons';
import {far} from '@fortawesome/pro-regular-svg-icons';
import {fas} from '@fortawesome/pro-solid-svg-icons';
import {fal} from '@fortawesome/pro-light-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';

library.add(fab as IconPack);
library.add(fad as IconPack);
library.add(far as IconPack);
library.add(fas as IconPack);
library.add(fal as IconPack);

function MyApp({Component, pageProps}) {
    return <Component {...pageProps} />;
}

export default MyApp;
