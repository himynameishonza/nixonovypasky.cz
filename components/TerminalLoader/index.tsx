// 1. Loding mainframu
// 2. Udejte sve sitove jmeno:
// 3. Vypis z karty faObjectsAlignCenterVertical
// 4. prechod na prikazovou radku

import React, {useEffect, useRef, useState} from 'react';
import TerminalScreen from '../TerminalScreen';
import {useKey} from 'rooks';
import useSound from 'use-sound';

export default function TerminalLoader({children}) {
    const [launchTerminal, setLaunchTerminal] = useState(false);
    const [userName, setUsername] = useState(null);

    const inputReference = useRef(null);

    const [playHD] = useSound('/static/sounds/terminal.wav');

    useEffect(() => {
        inputReference.current.focus();
        setUsername(inputReference.current.value);
    }, []);

    function saveUsername(e) {
        setUsername(e.target.value);
        alert(userName);
        setLaunchTerminal(true);
    }

    useKey(['Enter'], e => !launchTerminal && (saveUsername(e), playHD()));

    return (
        <TerminalScreen withWrapper={launchTerminal}>
            {!launchTerminal && (
                // step 1
                // <div className="text-amber-400 p-10 w-full h-full flex-col flex items-center justify-center">
                //     <div className="mb-4 select-none text-center">
                //         <div>╭━━━┳━━━┳━━━┳━━┳━━━┳━╮╱╭┳━━━┳━━━━╮</div>
                //         <div>┃╭━╮┃╭━╮┣╮╭╮┣┫┣┫╭━╮┃┃╰╮┃┃╭━━┫╭╮╭╮┃</div>
                //         <div>┃╰━╯┃┃╱┃┃┃┃┃┃┃┃┃┃╱┃┃╭╮╰╯┃╰━━╋╯┃┃╰╯</div>
                //         <div>┃╭╮╭┫╰━╯┃┃┃┃┃┃┃┃┃╱┃┃┃╰╮┃┃╭━━╯╱┃┃╱╱</div>
                //         <div>┃┃┃╰┫╭━╮┣╯╰╯┣┫┣┫╰━╯┃┃╱┃┃┃╰━━╮╱┃┃╱╱</div>
                //         <div>╰╯╰━┻╯╱╰┻━━━┻━━┻━━━┻╯╱╰━┻━━━╯╱╰╯╱╱</div>
                //         <div className="text-xs text-right">v23.252.1</div>
                //     </div>

                //     <div className="text-sm uppercase font-bold tracking-widest text-center">
                //         ⣿⣀⣿⣀⣿ Zavádění jádra ⣿⣀⣿⣀⣿
                //         <br />
                //         ⣿⣀⣿⣀⣿ KONTROLA VITÁLNÍCH FUNKCÍ ⣿⣀⣿⣀⣿
                //         <br />
                //         ⣿⣀⣿⣀⣿ SPOJENÍ S RADIONETEM NAVÁZÁNO ⣿⣀⣿⣀⣿
                //     </div>
                // </div>

                // step 2
                <div className="text-amber-400 p-10 w-full h-full flex-col flex items-center justify-center">
                    <div className="mb-8 select-none text-center">
                        <div>╭━━━┳━━━┳━━━┳━━┳━━━┳━╮╱╭┳━━━┳━━━━╮</div>
                        <div>┃╭━╮┃╭━╮┣╮╭╮┣┫┣┫╭━╮┃┃╰╮┃┃╭━━┫╭╮╭╮┃</div>
                        <div>┃╰━╯┃┃╱┃┃┃┃┃┃┃┃┃┃╱┃┃╭╮╰╯┃╰━━╋╯┃┃╰╯</div>
                        <div>┃╭╮╭┫╰━╯┃┃┃┃┃┃┃┃┃╱┃┃┃╰╮┃┃╭━━╯╱┃┃╱╱</div>
                        <div>┃┃┃╰┫╭━╮┣╯╰╯┣┫┣┫╰━╯┃┃╱┃┃┃╰━━╮╱┃┃╱╱</div>
                        <div>╰╯╰━┻╯╱╰┻━━━┻━━┻━━━┻╯╱╰━┻━━━╯╱╰╯╱╱</div>
                    </div>
                    <div className="text-base text-center">
                        Uveďte své síťové jméno a stikněte ENTER
                        <br />
                        <input
                            ref={inputReference}
                            type="text"
                            name="blabla"
                            tabIndex={1}
                            autoFocus
                            placeholder="GEORGE84"
                            className="text-center placeholder-amber-400 placeholder-opacity-30 appereance-none py-2 uppercase px-2.5 bg-transparent border-amber-400 mt-4 border-4 rounded-md border-double ring-2 ring-amber-400 ring-opacity-10 outline-none"
                        />
                    </div>
                    {/* <div className="text-base text-center">
                        [
                        <span className="animate-pulse">
                            {' '}
                            Pro přechod do konzole mainframu stiskněte mezerník{' '}
                        </span>
                        ]
                    </div> */}
                </div>
            )}
            {launchTerminal && children}
        </TerminalScreen>
    );
}
