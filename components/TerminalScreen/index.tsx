export default function TerminalScreen({children}) {
    return (
        <div className="w-full h-full bg-black font-terminal overflow-hidden relative">
            <div className="fixed border-8 border-x-slate-800 border-y-slate-700 rounded-3xl p-0 top-8 left-8 right-8 bottom-8 opacity-50 overflow-hidden z-30">
                <div className="pointer-events-none absolute w-full h-full bg-opacity-100 animate-glitch bg-white z-20" />
                <div className="pointer-events-none absolute w-full h-full bg-cover bg-[url('https://media3.giphy.com/media/Yqn9tE2E00k4U/giphy.gif?cid=ecf05e47jzlp61zt8zg5s63nicm5qc06coexclbwr5naa61d&rid=giphy.gif&ct=g')] opacity-[0.02] z-10"></div>
                <div className="absolute bg-amber-900 bg-opacity-20 top-4 left-4 right-4 bottom-4 rounded-md overflow-hidden z-0 animate-pulse-terminal">
                    {children}
                </div>
            </div>
        </div>
    );
}
