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
                <div className="drop-shadow-[0_0_10px_rgba(251,191,36,0.6)] text-center text-amber-400 absolute top-0 left-0 right-0 bottom-0 flex items-center font-bold justify-center text-sm sm:text-xl tracking-wide">
                    [ Vyčkejte u přijímače prosím ]
                </div>
            </TerminalScreen>
        </>
    );
}
