import Meta from '../components/Meta';
import TerminalScreen from '../components/TerminalScreen';
import Image from 'next/image';

export default function Homepage() {
    return (
        <>
            <Meta />

            <TerminalScreen>
                <div className="w-full h-full">
                    <Image
                        src="/static/monoskop.jpg"
                        layout="fill"
                        objectFit="cover"
                        alt=""
                        className="opacity-[0.03]"
                    />
                </div>
                <div className=" text-center drop-shadow-[4px_4px_0_rgba(0,0,0,1)] tracking-widest absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center font-phosphateDisplay text-lg sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white">
                    Vyčkejte u přijímače prosím
                </div>
            </TerminalScreen>
        </>
    );
}
