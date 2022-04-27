import Head from 'next/head';
import Skeleton from '../components/Skeleton';

export default function Homepage() {
    return (
        <>
            <Head>
                <title>Nixonovy pásky</title>
            </Head>
            <Skeleton />
        </>
    );
}
