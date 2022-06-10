import {useState} from 'react';
import router from 'next/router';
import useSound from 'use-sound';
import {fileStructure} from './fileStructure';
import {
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
    TerminalWrongDeviceMessage,
    KoncertyTxtContent,
    TerminalPlayer,
} from './components';
import {ReactTerminal, TerminalContextProvider} from 'react-terminal';
import {isBrowser, isMobile} from 'react-device-detect';
import TerminalScreen from '../TerminalScreen';

export default function Terminal() {
    const [mainframeLocked, setMainframeLocked] = useState(true);
    const [bankStatement, setBankStatement] = useState(10304);
    const [loanBalance, setLoanBalance] = useState(0);
    const [attempts, setAttempts] = useState(0);
    const [currentDirectory, setCurrentDirectory] = useState('HOME');
    const [playerActive, setPlayerActive] = useState(false);
    const [currentFile, setCurrentFile] = useState('none');

    const [play, {stop}] = useSound(currentFile);

    const playAudio = filename => {
        setPlayerActive(true);
        setCurrentFile('/static/drive/' + filename + '.mp3');
        play();
    };

    const stopAll = () => {
        return playerActive ? (
            (setPlayerActive(false),
            stop(),
            (
                <TerminalPrompt
                    type="SYSTEM"
                    locked={mainframeLocked}
                    currentDirectory={currentDirectory}
                    content={<>Proces úspěšně ukončen.</>}
                />
            ))
        ) : (
            <TerminalPrompt
                type="SYSTEM"
                locked={mainframeLocked}
                currentDirectory={currentDirectory}
                content={<>Nenalezen žádný aktivní proces.</>}
            />
        );
    };
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
                        bankStatement={bankStatement + num}
                        loanBalance={loanBalance + num}
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
            'Ministerstvo pravdy lže.',
            'Tam kde bývala devítka, leží nyní kyū.',
            'Peter-Cat bar bývalo útulné místo.',
        ];
        const min = 0;
        const max = 10;
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
                    locked={mainframeLocked}
                    currentDirectory={currentDirectory}
                    content={
                        <>
                            Pro odemčení Mainframu využijte příkaz{' '}
                            <b className="bg-emerald-900 text-emerald-100 px-1">unlock</b>{' '}
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
                setBankStatement(bankStatement - 5000);
                return (
                    <>
                        <div className="mt-5">
                            <TerminalPrompt
                                type="SYSTEM"
                                locked={mainframeLocked}
                                currentDirectory={currentDirectory}
                                content="Nesprávné heslo. Pokus o neoprávněné vniknutí do Mainframu. Kontaktování RadioPolu..."
                            />
                        </div>
                        <RadiolMessageWrapper title="RadioPol Report">
                            Zjištěno narušení pravidel občaského soužití a zásad Radionetu. RadioPol
                            Vám uděluje pokutu ve výši 5000 kreditů
                            <br />
                            <br />
                            Aktuální stav účtu RadiolPay: {bankStatement - 5000} kreditů
                        </RadiolMessageWrapper>
                    </>
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
                                    ? 'Kdopak se nám to sem snaží dostat? Ty nebudeš obyčejný občan, že? Tvé marné pokusy tě už stály mnoho kreditů. Přemostila jsem spojení s RadiolFinances, další pokusy máš zdarma. Heslo ale určitě znáš...'
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
                            locked={mainframeLocked}
                            currentDirectory={currentDirectory}
                            content="Přístup občanovi XA2093902 udělen, děkujeme za využívání služeb Radionetu."
                        />
                    </div>
                </>
            );
        }
    };

    const openDirectory = directory => {
        if (bankStatement < 0) {
            return (
                <>
                    <TerminalPrompt
                        type="SYSTEM"
                        locked={mainframeLocked}
                        currentDirectory={currentDirectory}
                        content="Operaci nelze provést."
                    />
                    <RadiolMessageWrapper title="RadiolFinances">
                        Nemáte dostatek kreditů na vašem RadiolPay účtě. Přístup k adresářové
                        struktuře je dovolen pouze občanům s kladným kreditovým stavem. V případě
                        potřeby zažádejte o úvěr pomocí příkazu{' '}
                        <b className="bg-amber-900 text-amber-300 px-1">rlloan</b>
                        <br />
                        <br />
                        Aktuální stav účtu RadiolPay: {bankStatement} kreditů
                    </RadiolMessageWrapper>
                </>
            );
        } else if (Object.keys(fileStructure).indexOf(directory) > -1) {
            if (mainframeLocked) {
                setBankStatement(bankStatement - 5000);
                return (
                    <>
                        <TerminalPrompt
                            type="SYSTEM"
                            locked={mainframeLocked}
                            currentDirectory={currentDirectory}
                            content="Pokus o neoprávněné vniknutí do Mainframu. Kontaktování RadioPolu..."
                        />
                        <RadiolMessageWrapper title="RadioPol Report">
                            Zjištěno narušení pravidel občaského soužití a zásad Radionetu. RadioPol
                            Vám uděluje pokutu ve výši 5000 kreditů
                            <br />
                            <br />
                            Aktuální stav účtu RadiolPay: {bankStatement - 5000} kreditů
                        </RadiolMessageWrapper>
                    </>
                );
            } else {
                setCurrentDirectory(directory);
            }
        } else {
            return (
                <TerminalPrompt
                    type="SYSTEM"
                    locked={mainframeLocked}
                    currentDirectory={currentDirectory}
                    content="Požadovaný adresář neexistuje."
                />
            );
        }
    };

    const browseDirectories = () => {
        if (bankStatement < 0) {
            return (
                <>
                    <TerminalPrompt
                        type="SYSTEM"
                        locked={mainframeLocked}
                        currentDirectory={currentDirectory}
                        content="Operaci nelze provést."
                    />
                    <RadiolMessageWrapper title="RadiolFinances">
                        Nemáte dostatek kreditů na vašem RadiolPay účtě. Přístup k adresářové
                        struktuře je dovolen pouze občanům s kladným kreditovým stavem. V případě
                        potřeby zažádejte o úvěr pomocí příkazu{' '}
                        <b className="bg-amber-900 text-amber-300 px-1">rlloan</b>
                        <br />
                        <br />
                        Aktuální stav účtu RadiolPay: {bankStatement} kreditů
                    </RadiolMessageWrapper>
                </>
            );
        } else {
            return (
                <div className="pl-4 border-l-8 border-double border-purple-300 border-opacity-30 w-full leading-6 mt-5 text-purple-300">
                    <div>
                        <span className="opacity-40 mr-2">📂</span>
                        {currentDirectory}
                    </div>

                    {'folders' in fileStructure[currentDirectory] &&
                        fileStructure[currentDirectory].folders.map((folder, index) => {
                            return (
                                <div key={index}>
                                    <span className="opacity-40 mr-2">╠══ 📂</span>
                                    {folder} {mainframeLocked ? '🔒' : null}
                                </div>
                            );
                        })}

                    {'files' in fileStructure[currentDirectory] &&
                        fileStructure[currentDirectory].files.map((file, index) => {
                            return (
                                <div key={index}>
                                    <span className="opacity-40 mr-2">
                                        {index < fileStructure[currentDirectory].files.length - 1
                                            ? '╠══'
                                            : '╚══'}
                                    </span>
                                    {file}
                                </div>
                            );
                        })}
                </div>
            );
        }
    };

    const openFile = file => {
        if (fileStructure[currentDirectory].files.includes(file)) {
            switch (file) {
                case 'rpreport.txt':
                    return <ReportTxtContent />;
                    break;
                case 'atlantik.mp3':
                    playAudio('atlantik');
                    return <TerminalPlayer filename={file} />;
                    break;
                case 'draty.mp3':
                    playAudio('draty');
                    return <TerminalPlayer filename={file} />;
                    break;
                case 'streda.mp3':
                    playAudio('streda');
                    return <TerminalPlayer filename={file} />;
                    break;
                case 'koncerty.txt':
                    return <KoncertyTxtContent />;
                    break;
                default:
                    return (
                        <TerminalPrompt
                            type="SYSTEM"
                            locked={mainframeLocked}
                            currentDirectory={currentDirectory}
                            content={<>Soubor {file} nenalezen</>}
                        />
                    );
            }
        } else {
            return (
                <TerminalPrompt
                    type="SYSTEM"
                    locked={mainframeLocked}
                    currentDirectory={currentDirectory}
                    content={<>Soubor {file} nenalezen</>}
                />
            );
        }
    };

    // Define commands here
    const commands = {
        killall: () => router.push('/'),
        unlock: password => passwordCheck(password),
        cd: directory => openDirectory(directory),
        open: file => openFile(file),
        q: () => stopAll(),
        dir: () => browseDirectories(),
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
        <TerminalScreen>
            {isMobile && <TerminalWrongDeviceMessage />}
            {isBrowser && (
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
                        className="hello"
                        theme="radiol"
                        errorMessage={
                            <TerminalPrompt
                                type="SYSTEM"
                                locked={mainframeLocked}
                                currentDirectory={currentDirectory}
                                content={
                                    <>
                                        Neznámý příkaz, pro zobrazení nápovědy využijte příkaz{' '}
                                        <b className="bg-emerald-900 text-emerald-100 px-1">help</b>
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
            )}
        </TerminalScreen>
    );
}
