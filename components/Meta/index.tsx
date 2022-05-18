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
            <title>{title ? title : 'Nixonovy Pásky'}</title>
            <meta
                name="description"
                content="Hledání ztraceného, ztrácení nechtěného. Každá cesta vede chvíli rovně. Každá rovná cesta nakonec zatočí."
            />
            <meta name="og:title" content={title ? title : 'Nixonovy Pásky'} />
            <meta
                name="og:description"
                content="Hledání ztraceného, ztrácení nechtěného. Každá cesta vede chvíli rovně. Každá rovná cesta nakonec zatočí."
            />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="/static/og_image.png" />
            <meta property="og:url" content="https://nixonovypasky.cz" />
            <meta property="og:site_name" content="Nixonovy pásky" />
            <meta name="fb:app_id" content="" />
            <meta name="twitter:title" content="Nixonovy pásky" />
            <meta name="pinterest" content="nopin" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="default" />
            <meta name="format-detection" content="telephone=no" />
            <meta
                name="twitter:description"
                content="Hledání ztraceného, ztrácení nechtěného. Každá cesta vede chvíli rovně. Každá rovná cesta nakonec zatočí."
            />
            <meta name="twitter:image" content="/static/og_image.png" />
            <meta name="twitter:site" content="@nixonovypasky" />
            <meta name="twitter:creator" content="@nixonovypasky" />
            <link rel="canonical" href="http://nixonovypasky.cz/" />
            <meta name="robots" content="index, follow" />
            <link rel="preload" as="font" href="/static/fonts/Phosphate.woff"></link>
            <link rel="preload" as="font" href="/static/fonts/Phosphate.woff2"></link>
        </Head>
    );
}
