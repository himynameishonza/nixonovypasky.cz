import Meta from '../components/Meta';
import {ReactTerminal, TerminalContextProvider} from 'react-terminal';
import {useState} from 'react';
import router from 'next/router';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function Vault() {
    const [lockedStatus, setLockedStatus] = useState('locked');
    const [locked, setLocked] = useState(true);
    const [bankStatement, setBankStatement] = useState(10304);
    const [loanBalance, setLoanBalance] = useState(0);
    const [attempts, setAttempts] = useState(0);
    const [currentDirectory, setCurrentDirectory] = useState('HOME');
    const files = ['nice-dream.mp3', 'strechy.mp3', 'when-i-was-young.mp3'];

    const takeLoan = loan => {
        if (!loan || loan === '') {
            return (
                <div className="ml-2 md:ml-10 max-w-lg leading-6 mt-10  text-amber-300 text-sm sm:text-sm">
                    <div className="underline decoration-double underline-offset-4 decoration-2 mb-4">
                        RadiolFinances &copy; Copyright Radiol Technologies
                    </div>
                    Vypadá to, že chcete zažádat o půjčku. Pro půjčku využijte příkaz{' '}
                    <b className="bg-amber-600 text-amber-400 px-1">rlloan</b> následovaný částkou v
                    kreditech. Minimální půjčka činí 5000 kreditů, maximální 20000 kreditů.
                </div>
            );
        }

        if (loan >= 5000 && loan <= 20000) {
            setLoanBalance(parseInt(loanBalance + loan));
            setBankStatement(bankStatement + loan);
            return (
                <div className="ml-2 md:ml-10 max-w-lg leading-6 mt-10  text-amber-300 text-sm sm:text-sm">
                    <div className="underline decoration-double underline-offset-4 decoration-2 mb-4">
                        RadiolFinances &copy; Copyright Radiol Technologies
                    </div>
                    Gratulujeme! Vaše půjčka byla schválena. {loan} kreditů bylo převedeno na váš
                    RadiolPay účet.
                    <br />
                    <br />
                    Splátkový kalendář prací Vám bude oznámen ředitelem distriktu.
                    <br />
                    <br />
                    Výška dluhu: {loanBalance}
                    <br />
                    Aktuální zůstatek na účtě RadiolPay: {bankStatement}
                </div>
            );
        }

        if (loan < 5000 && loan > 20000) {
            return (
                <div className="ml-2 md:ml-10 max-w-lg leading-6 mt-10  text-amber-300 text-sm sm:text-sm">
                    <div className="underline decoration-double underline-offset-4 decoration-2 mb-4">
                        RadiolFinances &copy; Copyright Radiol Technologies
                    </div>
                    Nepovolená hodnota kreditů. Minimální půjčka činí 5000 kreditů, maximální 20000
                    kreditů.
                </div>
            );
        }
    };

    const randomWrongMessage = () => {
        const messages = [
            'Nenasloucháš okolí. Nápovědy jsou všude okolo tebe.',
            'Nedoufej v náhodné prolomení hesla. Oba přeci víme, že tolik štěstí nemáš.',
            'Nespěchej. Přemýšlej. Rozhlédni se.',
            'Opakovat stále stejný postup v očekávání jiného výsledku je bláhovost.',
            'V Arroyu by si nepřežil.',
            'Byly i dny, kdy věci nebyly zcela ztracené.',
            'Vzpomínáš, když ještě baráky vrhaly stín?',
        ];
        const min = 0;
        const max = 6;
        const rand = Math.floor(min + Math.random() * (max - min));
        return messages[rand];
    };

    const randomCorrectMessage = () => {
        const messages = [
            'Ale, ale, ale! Někdo konečně začal poslouchat. Jseš na správné cestě!',
            'Jsi na správné cestě! Tam, kde to všechno začalo. Tam, kde se zrodil nový příběh...',
            'Jsi velmi blízko! Stačí už jen správné klíčové slovo.',
            'Jedno slovo, jedno dvjčíslí.',
            'Jmenuji se Martin. Lidé se mění, jména zůstávají. Je nás více, ale jen jeden z nás tě dovede na správné místo.',
            'Často čtu v denících svého předchůdce Jacorena...',
        ];
        const min = 0;
        const max = 6;
        const rand = Math.floor(min + Math.random() * (max - min));
        return messages[rand];
    };

    const passwordCheck = password => {
        if (!password || password === '') {
            setLocked(true);
            setLockedStatus('locked');
            return (
                <div className="mt-5">
                    <span className="p-1 mr-2 rounded-sm uppercase bg-emerald-900 text-emerald-500 text-sm">
                        SYSTEM ~ {lockedStatus}
                    </span>{' '}
                    Pro odemčení Mainframu využijte příkaz{' '}
                    <b className="bg-emerald-600 text-emerald-400 px-1">unlock</b> následovaný
                    heslem
                </div>
            );
        }

        if (password !== 'Vault13') {
            setAttempts(attempts + 1);
            setLocked(true);
            setLockedStatus('locked');

            if (attempts < 4) {
                return (
                    <div className="mt-5">
                        <span className="p-1 mr-2 rounded-sm uppercase bg-emerald-900 text-emerald-500 text-sm">
                            SYSTEM ~ {lockedStatus} ~ {currentDirectory}
                        </span>{' '}
                        Chybné heslo, opakujte zadání
                    </div>
                );
            }

            if (attempts >= 4) {
                if (
                    password === 'Fallout' ||
                    password === 'fallout' ||
                    password === 'vault' ||
                    password === 'Vault' ||
                    password === 'Arroyo'
                ) {
                    return (
                        <div className="mt-5">
                            <span className="p-1 mr-2 rounded-sm uppercase bg-purple-900 text-purple-200 text-sm">
                                <b>TRANSMISSION::MFROBISHER</b>
                            </span>
                            <span className="text-purple-300">{randomCorrectMessage()}</span>
                        </div>
                    );
                } else {
                    return (
                        <div className="mt-5">
                            <span className="p-1 mr-2 rounded-sm uppercase bg-purple-900 text-purple-200 text-sm">
                                <b>TRANSMISSION::MFROBISHER</b>
                            </span>
                            <span className="text-purple-300">
                                {attempts === 4
                                    ? 'Kdopak se nám to sem snaží dostat? Ty nebudeš obyčejný občan, že? Pokud tomu tak je, heslo určitě znáš...'
                                    : randomWrongMessage()}
                            </span>
                        </div>
                    );
                }
            }
        }

        if (password === 'Vault13') {
            setAttempts(attempts + 1);
            setLocked(false);
            setLockedStatus('unlocked');
            return (
                <>
                    <div className="mt-5">
                        <span className="p-1 mr-2 rounded-sm uppercase bg-emerald-900 text-emerald-500 text-sm">
                            SYSTEM ~ {lockedStatus} ~ {currentDirectory}
                        </span>{' '}
                        Přístup občanovi XA49935 udělen, děkujeme za využívání služeb Radionetu.
                    </div>
                </>
            );
        }
    };

    const openDirectory = directory => {
        if (directory === 'ARCHIVE' && locked) {
            setBankStatement(bankStatement - 5000);
            return (
                <>
                    <div className="mt-5">
                        <span className="p-1 mr-2 rounded-sm uppercase bg-emerald-900 text-emerald-500 text-sm">
                            SYSTEM ~ {lockedStatus} ~ {currentDirectory}
                        </span>{' '}
                        Pokus o neoprávněné vniknutí do Mainframu!
                    </div>
                    <div className="ml-2 md:ml-10 max-full leading-6 mt-10  text-amber-300 text-sm sm:text-sm">
                        <div className="underline decoration-double underline-offset-4 decoration-2 mb-4">
                            RadioPol Report
                        </div>
                        <p>
                            Zjištěno narušení pravidel občaského soužití a zásad Radionetu. RadioPol
                            Vám uděluje pokutu ve výši 5 000 kreditů
                            <br />
                            Aktuální stav účtu RadiolPay: {bankStatement} kreditů
                        </p>
                    </div>
                </>
            );
        }
        if (directory === 'ARCHIVE' && !locked) {
            setCurrentDirectory('ARCHIVE');
        }

        if (directory === 'HOME') {
            setCurrentDirectory('HOME');
        }
        if (directory !== 'ARCHIVE' && directory !== 'HOME') {
            return (
                <div className="mt-5">
                    <span className="p-1 mr-2 rounded-sm uppercase bg-emerald-900 text-emerald-500 text-sm">
                        SYSTEM ~ {lockedStatus}
                    </span>{' '}
                    Požadovaný adresář nebyl nalezen
                </div>
            );
        }
    };

    const browseDirectories = directory => {
        if (directory === 'HOME') {
            return (
                <div className="ml-2 md:ml-10 max-w-2xl leading-6 mt-10 text-purple-300 text-sm sm:text-sm">
                    <div>
                        <span className="opacity-40 mr-2">📂</span>HOME
                    </div>
                    <div>
                        <span className="opacity-40 mr-2">╚══</span>
                        {locked && '🔒'} ARCHIVE/
                    </div>
                </div>
            );
        }

        if (directory === 'ARCHIVE') {
            return (
                <div className="ml-2 md:ml-10 max-w-2xl leading-6 mt-10 text-purple-300 text-sm sm:text-sm">
                    <div>
                        <span className="opacity-40 mr-2">📂</span>ARCHIVE
                    </div>
                    {files.map((file, index) => {
                        return (
                            <div key={index}>
                                <span className="opacity-40 mr-2">╠══</span>
                                {file}
                            </div>
                        );
                    })}
                    <div>
                        <span className="opacity-40 mr-2">╚══</span>
                        README.md
                    </div>
                </div>
            );
        }
    };

    const openFile = file => {
        if (files.includes(file)) {
            return (
                <div className="ml-2 md:ml-10 max-full leading-6 mt-5  text-amber-300 text-sm sm:text-sm">
                    <FontAwesomeIcon icon="draw-circle" className="animate-spin mr-2" />
                    Přehrávám soubor {file}{' '}
                    <span className="opacity-40">
                        [Pro přerušení stisknětě{' '}
                        <b className="bg-amber-600 text-amber-400 px-1">q</b>]
                    </span>
                </div>
            );
        } else {
            return (
                <div className="mt-5">
                    <span className="p-1 mr-2 rounded-sm uppercase bg-emerald-900 text-emerald-500 text-sm">
                        SYSTEM ~ {lockedStatus} ~ {currentDirectory}
                    </span>{' '}
                    Soubor {file} nenalezen
                </div>
            );
        }
    };
    // Define commands here
    const commands = {
        killall: () => router.push('/'),
        unlock: password => passwordCheck(password),
        cd: directory => openDirectory(directory),
        open: file => openFile(file),
        q: (
            <div className="mt-5">
                <span className="p-1 mr-2 rounded-sm uppercase bg-emerald-900 text-emerald-500 text-sm">
                    SYSTEM ~ {lockedStatus} ~ {currentDirectory}
                </span>{' '}
                Nenalezen žádný aktivní proces
            </div>
        ),
        dir: () => browseDirectories(currentDirectory),
        rlpay: (
            <div className="ml-2 md:ml-10 max-full leading-6 mt-10  text-amber-300 text-sm sm:text-sm">
                <div className="underline decoration-double underline-offset-4 decoration-2 mb-4">
                    RadiolPay &copy; Copyright Radiol Technologies
                </div>
                &gt; Aktuální zůstatek: {bankStatement} kreditů
            </div>
        ),
        rlloan: (amount: number) => takeLoan(amount),
        rlnews: (
            <div className="ml-2 md:ml-10 max-full leading-6 mt-10  text-amber-300 text-sm sm:text-sm">
                <div className="underline decoration-double underline-offset-4 decoration-2 mb-4">
                    RadiolNews &copy; Copyright Radiol Technologies
                </div>
                &gt; Nová mutace viru zpozorována na území USS
                <br />
                &gt; Nová Ultravize 15k láme rekordy v prodejích
                <br />
                &gt; Nepokoje v severním distriktu byly úspěšně potlačeny
                <br />
                &gt; Nábor k RadioPolu bude probíhat celý měsíc
                <br />
                &gt; Bude oblačno, v nížinách pod 300 m jsou očekávány mírné radiační deště
            </div>
        ),

        help: (
            <div className="ml-2 md:ml-10 max-w-2xl leading-6 mt-10 text-amber-300 text-sm sm:text-sm">
                <div className="grid grid-cols-2">
                    <span className="font-bold whitespace-nowrap">dir</span>
                    <span className="float-right whitespace-nowrap">
                        ... zobrazit strukturu aktuálního adresáře
                    </span>
                </div>
                <div className="grid grid-cols-2">
                    <span className="font-bold whitespace-nowrap">cd [foldername]</span>
                    <span className="float-right whitespace-nowrap">... otevřít adresář</span>
                </div>
                <div className="grid grid-cols-2">
                    <span className="font-bold whitespace-nowrap">open [filename]</span>
                    <span className="float-right whitespace-nowrap">... otevřít soubor</span>
                </div>

                <div className="grid grid-cols-2">
                    <span className="font-bold whitespace-nowrap">rlpay</span>
                    <span className="float-right whitespace-nowrap">
                        ... zobrazit kreditový zůstatek RadiolPay
                    </span>
                </div>
                <div className="grid grid-cols-2">
                    <span className="font-bold whitespace-nowrap">rlloan</span>
                    <span className="float-right whitespace-nowrap">... zažádat o půjčku</span>
                </div>

                <div className="grid grid-cols-2">
                    <span className="font-bold whitespace-nowrap">rlnews</span>
                    <span className="float-right whitespace-nowrap">
                        ... zobrazit rychlý výpis RadiolNews
                    </span>
                </div>
                <div className="grid grid-cols-2">
                    <span className="font-bold whitespace-nowrap">unlock [password]</span>
                    <span className="float-right whitespace-nowrap">... odemkout mainframe</span>
                </div>
                <div className="grid grid-cols-2">
                    <span className="font-bold whitespace-nowrap">clear</span>
                    <span className="float-right whitespace-nowrap">... vyčistit terminál</span>
                </div>
                <div className="grid grid-cols-2">
                    <span className="font-bold whitespace-nowrap">q</span>

                    <span className="float-right whitespace-nowrap">
                        ... ukončit aktuální proces
                    </span>
                </div>
                <div className="grid grid-cols-2">
                    <span className="font-bold whitespace-nowrap">killall</span>

                    <span className="float-right whitespace-nowrap">
                        ... ukončit všechny procesy a odhlásit se
                    </span>
                </div>
            </div>
        ),
    };

    return (
        <>
            <Meta title="Radionet Mainframe" />

            <div className="w-full h-full bg-black grid font-terminal">
                <div className="terminal-glitch"></div>
                <div className="terminal h-full ">
                    <TerminalContextProvider>
                        <ReactTerminal
                            commands={commands}
                            theme="matrix"
                            errorMessage={
                                <div className="mt-5">
                                    <span className="p-1 mr-2 rounded-sm uppercase bg-emerald-900 text-emerald-500 text-sm">
                                        SYSTEM ~ {lockedStatus} ~ {currentDirectory}
                                    </span>{' '}
                                    Neznámý příkaz, pro zobrazení nápovědy využijte příkaz{' '}
                                    <b className="bg-emerald-600 text-emerald-400 px-1">help</b>
                                </div>
                            }
                            prompt={
                                <span className="p-1 text-sm mr-2 rounded-sm uppercase bg-amber-900 text-amber-200">
                                    INPUT ~ {lockedStatus} ~ {currentDirectory}
                                </span>
                            }
                            showControlBar={false}
                            welcomeMessage={
                                <div className="text-center mb-10">
                                    <h1 className="text-lg md:text-2xl">Radionet Mainframe</h1>
                                    <h3 className="text-xs sm:text-sm">
                                        Copyright &copy; Radiol Technologies, v23.252.1
                                    </h3>
                                    <h3 className="text-xs text-rose-600 mt-4">
                                        {locked
                                            ? 'Mainframe locked, password required'
                                            : 'Mainframe unlocked'}
                                    </h3>
                                </div>
                            }
                        />
                    </TerminalContextProvider>
                </div>
            </div>
        </>
    );
}
