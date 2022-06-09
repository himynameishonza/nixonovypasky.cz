import Meta from '../Meta';
import {useState} from 'react';
import router from 'next/router';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    fileStructure,
    HelpContent,
    TerminalPrompt,
    RadiolNewsContent,
    TerminalWelcomeMessage,
    LoanContent,
    LoanGrantedContent,
    LoanRejectedContent,
    RadiolIDContent,
    LoanNotAllowedContent,
    RadiolMessageWrapper,
    ReportTxtContent,
} from './data';
import {ReactTerminal, TerminalContextProvider} from 'react-terminal';
import * as rdd from 'react-device-detect';
import Link from 'next/link';

interface DeviceProps {
    children: (props: typeof rdd) => React.ReactNode;
}

export function Device(props: DeviceProps) {
    return <div className="device-layout-component">{props.children(rdd)}</div>;
}

export default function Terminal() {
    const [mainframeLocked, setMainframeLocked] = useState(true);
    const [bankStatement, setBankStatement] = useState(10304);
    const [loanBalance, setLoanBalance] = useState(0);
    const [attempts, setAttempts] = useState(0);
    const [currentDirectory, setCurrentDirectory] = useState('HOME');
    const files = [
        'README.txt',
        'RPREPORT.txt',
        'nice-dream.mp3',
        'strechy.mp3',
        'when-i-was-young.mp3',
    ];

    const takeLoan = amount => {
        let num = parseInt(amount);
        if (!amount) {
            return <LoanContent />;
        }

        if (num >= 5000 && num <= 20000) {
            if (loanBalance + num > 50000) {
                return <LoanNotAllowedContent />;
            } else {
                setLoanBalance(loanBalance + num);
                setBankStatement(bankStatement + num);
                return (
                    <LoanGrantedContent
                        bankStatement={bankStatement}
                        loanBalance={loanBalance}
                        loan={num}
                    />
                );
            }
        }

        if (num < 5000 || num > 20000) {
            return <LoanRejectedContent />;
        }
    };

    const randomWrongMessage = () => {
        const messages = [
            'Nenasloucháš okolí. Nápovědy jsou všude okolo tebe.',
            'Nedoufej v náhodné prolomení hesla. Oba přeci víme, že tolik štěstí nemáš.',
            'Nespěchej. Přemýšlej. Rozhlédni se.',
            'Opakovat stále stejný postup v očekávání jiného výsledku je bláhovost.',
            'Nezapomínej na Little People...',
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
            'Někdo konečně začal poslouchat. Jseš na správné cestě...',
            'Jsi na správné cestě! Tam, kde to všechno začalo. Tam, kde se zrodil nový příběh...',
            'Jsi velmi blízko! Stačí už jen správné klíčové slovo.',
            'Orwell byl optimista.',
            'Jmenuji se Aomame. Jsem tvá nápověda.',
            'Tam kde bývala devítka, leží nyní kyū.',
        ];
        const min = 0;
        const max = 6;
        const rand = Math.floor(min + Math.random() * (max - min));
        return messages[rand];
    };

    const passwordCheck = password => {
        if (!password || password === '') {
            setMainframeLocked(true);
            return (
                <TerminalPrompt
                    type="SYSTEM"
                    currentDirectory={currentDirectory}
                    content={
                        <>
                            Pro odemčení Mainframu využijte příkaz{' '}
                            <b className="bg-emerald-600 text-emerald-400 px-1">unlock</b>{' '}
                            následovaný heslem.
                        </>
                    }
                />
            );
        }

        if (password !== '1Q84') {
            setAttempts(attempts + 1);
            setMainframeLocked(true);

            if (attempts < 4) {
                return (
                    <TerminalPrompt
                        type="SYSTEM"
                        currentDirectory={currentDirectory}
                        content={'Chybné heslo, opakujte zadání'}
                    />
                );
            }

            if (attempts >= 4) {
                if (
                    password === 'orwell' ||
                    password === 'Orwell' ||
                    password === '1984' ||
                    password === 'George' ||
                    password === 'utopie'
                ) {
                    return (
                        <TerminalPrompt
                            type="AOMAME"
                            currentDirectory={currentDirectory}
                            content={randomCorrectMessage()}
                        />
                    );
                } else {
                    return (
                        <TerminalPrompt
                            type="AOMAME"
                            currentDirectory={currentDirectory}
                            content={
                                attempts === 4
                                    ? 'Kdopak se nám to sem snaží dostat? Ty nebudeš obyčejný občan, že? Pokud tomu tak je, heslo určitě znáš...'
                                    : randomWrongMessage()
                            }
                        />
                    );
                }
            }
        }

        if (password === '1Q84') {
            setMainframeLocked(false);
            return (
                <>
                    <div className="mt-5">
                        <TerminalPrompt
                            type="SYSTEM"
                            currentDirectory={currentDirectory}
                            content="Přístup občanovi XA49935 udělen, děkujeme za využívání služeb Radionetu."
                        />
                    </div>
                </>
            );
        }
    };

    const openDirectory = directory => {
        if (directory === 'NIXONOVY-PASKY' && mainframeLocked) {
            setBankStatement(bankStatement - 5000);
            return (
                <>
                    <div className="mt-5">
                        <TerminalPrompt
                            type="SYSTEM"
                            currentDirectory={currentDirectory}
                            content="Pokus o neoprávněné vniknutí do Mainframu!"
                        />
                    </div>
                    <RadiolMessageWrapper title="RadioPol Report">
                        Zjištěno narušení pravidel občaského soužití a zásad Radionetu. RadioPol Vám
                        uděluje pokutu ve výši 5 000 kreditů
                        <br />
                        Aktuální stav účtu RadiolPay: {bankStatement} kreditů
                    </RadiolMessageWrapper>
                </>
            );
        }
        if (directory === 'NIXONOVY-PASKY' && !mainframeLocked) {
            setCurrentDirectory('NIXONOVY-PASKY');
        }

        if (directory === 'HOME') {
            setCurrentDirectory('HOME');
        }
        if (directory !== 'NIXONOVY-PASKY' && directory !== 'HOME') {
            return (
                <div className="mt-5">
                    <TerminalPrompt
                        type="SYSTEM"
                        currentDirectory={currentDirectory}
                        content="Požadovaný adresář nebyl nalezen"
                    />
                </div>
            );
        }
    };

    const browseDirectories = directory => {
        if (directory === 'HOME') {
            return (
                <div className="pl-4 border-l-8 border-double border-purple-300 border-opacity-30 w-full leading-6 mt-5 text-purple-300  ">
                    <div>
                        <span className="opacity-40 mr-2">📂</span>HOME
                    </div>
                    {fileStructure.root.folders.map((folder, index) => {
                        return (
                            <div key={index}>
                                <span className="opacity-40 mr-2">╠══ 📂</span>
                                {folder.name} {mainframeLocked ? '🔒' : null}
                            </div>
                        );
                    })}
                    {fileStructure.root.files.map((file, index) => {
                        return (
                            <div key={index}>
                                <span className="opacity-40 mr-2">
                                    {index < fileStructure.archive.files.length - 1 ? '╠══' : '╚══'}
                                </span>
                                {file.name}
                            </div>
                        );
                    })}
                </div>
            );
        }

        if (directory === 'NIXONOVY-PASKY') {
            return (
                <div className="pl-4 border-l-8 border-double border-purple-300 border-opacity-30 w-full leading-6 mt-5 text-purple-300  ">
                    <div>
                        <span className="opacity-40 mr-2">📂</span>NIXONOVY-PASKY
                    </div>
                    {fileStructure.archive.folders.map((folder, index) => {
                        return (
                            <div key={index}>
                                <span className="opacity-40 mr-2">╠══ 📂</span>
                                {folder.name}
                            </div>
                        );
                    })}
                    {fileStructure.archive.files.map((file, index) => {
                        return (
                            <div key={index}>
                                <span className="opacity-40 mr-2">
                                    {index < fileStructure.archive.files.length - 1 ? '╠══' : '╚══'}
                                </span>
                                {file.name}
                            </div>
                        );
                    })}
                </div>
            );
        }
    };

    const openFile = file => {
        if (files.includes(file)) {
            switch (file) {
                case 'RPREPORT.txt':
                    return <ReportTxtContent />;
                    break;
                case 'nice-dream.mp3':
                    return (
                        <div className="ml-10 max-full leading-6 mt-5  text-amber-300">
                            <FontAwesomeIcon icon="draw-circle" className="animate-spin mr-2" />
                            Přehrávám soubor {file}{' '}
                            <span className="opacity-40">
                                [Pro přerušení stisknětě{' '}
                                <b className="bg-amber-600 text-amber-400 px-1">q</b>]
                            </span>
                        </div>
                    );
                default:
                    <TerminalPrompt
                        type="SYSTEM"
                        currentDirectory={currentDirectory}
                        content={<>Soubor {file} nenalezen</>}
                    />;
            }
        }
    };
    // Define commands here
    const commands = {
        killall: () => router.push('/'),
        unlock: password => passwordCheck(password),
        cd: directory => openDirectory(directory),
        open: file => openFile(file),
        q: (
            <TerminalPrompt
                type="SYSTEM"
                currentDirectory={currentDirectory}
                content="Nenalezen žádný aktivní proces"
            />
        ),
        dir: () => browseDirectories(currentDirectory),
        rlid: (
            <RadiolIDContent
                creditBalance={bankStatement}
                loanBalance={loanBalance}
                hoursLeft={loanBalance / 20}
            />
        ),
        rlloan: amount => takeLoan(amount),
        rlnews: <RadiolNewsContent />,
        help: <HelpContent />,
    };

    return (
        <>
            <Meta title="Radionet Mainframe" />

            <div className="w-full h-full bg-[#111] font-terminal overflow-hidden">
                <div className="terminal">
                    <div className="terminal-glitch" />
                    <div className="noise"></div>

                    <Device>
                        {({isMobile}) => {
                            if (isMobile)
                                return (
                                    <div className="top-0 left-0 right-0 bottom-0 fixed m-0  pb-12 pt-12">
                                        <div className="text-emerald-300 w-full h-full flex flex-col max-w-lg m-auto text-center p-12 items-center justify-center overflow-auto">
                                            <TerminalWelcomeMessage />
                                            <span className="text-xs leading-5">
                                                Zdá se, že máš příliš moderní zařízení, občane.
                                                Radiol Mainframe je podporován pouze sálovými a
                                                osobními počítači s klasickým klávesnicovým vstupem.
                                            </span>
                                            <div className="p-5 mt-10">
                                                <Link
                                                    href={'https://www.facebook.com/nixonovypasky'}
                                                    passHref
                                                >
                                                    <a className="w-7 h-7 inline-flex items-center justify-center mx-2">
                                                        <FontAwesomeIcon
                                                            icon={['fab', 'facebook']}
                                                            className="w-full h-full"
                                                        />
                                                    </a>
                                                </Link>
                                                <Link
                                                    href="https://www.instagram.com/nixonovypasky/"
                                                    passHref
                                                >
                                                    <a className="w-7 h-7 inline-flex items-center justify-center mx-2">
                                                        <FontAwesomeIcon
                                                            icon={['fab', 'instagram']}
                                                            className="w-full h-full"
                                                        />
                                                    </a>
                                                </Link>
                                            </div>
                                            <Link href={'/koncerty'} passHref>
                                                [ Koncerty ]
                                            </Link>
                                        </div>
                                    </div>
                                );
                            return (
                                <div className="grid h-screen overflow-y-auto pb-20">
                                    <TerminalContextProvider>
                                        <ReactTerminal
                                            commands={commands}
                                            themes={{
                                                radiol: {
                                                    themeBGColor: 'transparent',
                                                    themeToolbarColor: 'transparent',
                                                    themeColor: '#0cd787',
                                                    themePromptColor: 'transparent',
                                                },
                                            }}
                                            theme="radiol"
                                            errorMessage={
                                                <TerminalPrompt
                                                    type="SYSTEM"
                                                    currentDirectory={currentDirectory}
                                                    content={
                                                        <>
                                                            Neznámý příkaz, pro zobrazení nápovědy
                                                            využijte příkaz{' '}
                                                            <b className="bg-emerald-600 text-emerald-400 px-1">
                                                                help
                                                            </b>
                                                        </>
                                                    }
                                                />
                                            }
                                            prompt={
                                                <TerminalPrompt
                                                    locked={mainframeLocked}
                                                    currentDirectory={currentDirectory}
                                                    type={'INPUT'}
                                                />
                                            }
                                            showControlBar={false}
                                            welcomeMessage={<TerminalWelcomeMessage />}
                                        />
                                    </TerminalContextProvider>
                                </div>
                            );
                        }}
                    </Device>
                </div>
            </div>
        </>
    );
}
