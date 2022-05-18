import Meta from '../components/Meta';
import Image from 'next/image';

export default function Homepage() {
    return (
        <>
            <Meta />

            <div className="w-full h-full flex items-center justify-center bg-[#292929] p-5 select-none">
                <div className="w-full aspect-w-16 aspect-h-9">
                    <Image
                        src="/static/monoskop.jpg"
                        alt=""
                        layout="fill"
                        objectFit="cover"
                        className="rounded-xl"
                    />
                </div>
                <div className="absolute left-0 right-0 top-0 bottom-0  bg-[radial-gradient(_rgba(0,0,0,0.8),_#111)] bg-blend-multiply animate-glitch animate-terminal-glitch" />
                <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center p-5 flex-col ">
                    <div className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-slate-300 mt-10 font-bold uppercase text-center font-phosphate tracking-widest drop-shadow-[4px_4px_0_rgba(0,0,0,1)] transform-gpu">
                        Vyčkejte u přijímače prosím
                    </div>
                </div>
            </div>
        </>
    );
}