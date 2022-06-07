import Head from 'next/head';

export default function Meta({title}: {title?: string}) {
    return (
        <Head>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
            />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta charSet="utf-8" />
            <title>{title ? title + ' - NIXONOVY PÁSKY' : 'NIXONOVY PÁSKY'}</title>
            <meta
                name="description"
                content="Hledání ztraceného, ztrácení nechtěného. Každá cesta vede chvíli rovně. Každá rovná cesta nakonec zatočí."
            />
            <meta
                name="og:title"
                content={title ? title + ' - NIXONOVY PÁSKY' : 'NIXONOVY PÁSKY'}
            />
            <meta
                name="og:description"
                content="Hledání ztraceného, ztrácení nechtěného. Každá cesta vede chvíli rovně. Každá rovná cesta nakonec zatočí."
            />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="/static/og_image.png" />
            <meta property="og:url" content="https://nixonovypasky.cz" />
            <meta property="og:site_name" content="NIXONOVY PÁSKY" />
            <meta name="fb:app_id" content="105095625361423" />
            <meta name="pinterest" content="nopin" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="#000000" />
            <meta name="format-detection" content="telephone=no" />
            <meta
                name="twitter:description"
                content="Hledání ztraceného, ztrácení nechtěného. Každá cesta vede chvíli rovně. Každá rovná cesta nakonec zatočí."
            />
            <meta name="twitter:title" content="NIXONOVY PÁSKY" />
            <meta name="twitter:image" content="/static/og_image.png" />
            <meta name="twitter:site" content="@nixonovypasky" />
            <meta name="twitter:creator" content="@nixonovypasky" />
            <link rel="canonical" href="http://nixonovypasky.cz/" />
            <meta name="robots" content="index, follow" />
            <link rel="preload" as="font" href="/static/fonts/Phosphate.woff"></link>
            <link rel="preload" as="font" href="/static/fonts/Phosphate.woff2"></link>
            <link rel="preload" as="font" href="/static/fonts/Phosphate.ttf"></link>
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/static/favicon/apple-touch-icon.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/static/favicon/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/static/favicon/favicon-16x16.png"
            />
            <link rel="manifest" href="/static/favicon/site.webmanifest" />
            <link rel="mask-icon" href="/static/favicon/safari-pinned-tab.svg" color="#444444" />
            <link rel="shortcut icon" href="/static/favicon/favicon.ico" />
            <meta name="msapplication-TileColor" content="#555555" />
            <meta name="msapplication-config" content="/static/favicon/browserconfig.xml" />
            <meta name="theme-color" content="#ffffff"></meta>
        </Head>
    );
}
