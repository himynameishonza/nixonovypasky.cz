import classnames from 'classnames';
import React from 'react';

export default function TerminalScreen({
    withWrapper,
    children,
}: {
    withWrapper?: boolean,
    children: JSX.Element | JSX.Element[],
}) {
    return (
        <div className="w-full h-full bg-[#111] font-terminal overflow-hidden relative">
            <div className="pointer-events-none absolute w-full h-full bg-opacity-10 z-50 bg-amber-500 mix-blend-overlay" />
            <div className="fixed border-4 md:border-8 border-x-neutral-900 border-y-neutral-800 rounded-3xl p-0 top-4 left-4 bottom-4 right-4 md:top-8 md:left-8 md:right-8 md:bottom-8 opacity-50 overflow-hidden z-30">
                <div className="pointer-events-none absolute w-full h-full bg-opacity-100 animate-glitch bg-white z-20" />
                <div className="pointer-events-none absolute w-full h-full bg-cover bg-[url('https://media3.giphy.com/media/Yqn9tE2E00k4U/giphy.gif?cid=ecf05e47jzlp61zt8zg5s63nicm5qc06coexclbwr5naa61d&rid=giphy.gif&ct=g')] opacity-[0.02] z-10"></div>
                <div
                    className={classnames(
                        'absolute terminal-gradient top-2 left-2 right-2 bottom-2 md:top-4 md:left-4 md:right-4 md:bottom-4 rounded-2xl md:rounded-md overflow-hidden',
                        {['wrapper']: withWrapper}
                    )}
                >
                    {children}
                </div>
            </div>
        </div>
    );
}
