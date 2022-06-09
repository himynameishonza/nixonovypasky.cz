import classnames from 'classnames';
export const TerminalWelcomeMessage = () => {
    return (
        <div className="text-center mb-16">
            <h1>Radionet Mainframe</h1>
            <h3>Copyright &copy; Radiol Technologies, v23.252.1</h3>
        </div>
    );
};

export const TerminalPrompt = ({
    type = 'INPUT',
    locked = true,
    currentDirectory,
    content,
}: {
    type: 'INPUT' | 'SYSTEM' | 'AOMAME',
    locked?: boolean,
    currentDirectory: string,
    content?: React.ReactNode,
}) => (
    <div className="my-3 inline-block">
        <span
            className={classnames('p-1 mr-2 rounded-sm uppercase  inline', {
                ['bg-amber-900 text-amber-200']: type === 'INPUT',
                ['bg-emerald-800 text-emerald-300']: type === 'SYSTEM',
                ['bg-purple-900 text-purple-200']: type === 'AOMAME',
            })}
        >
            {type !== 'AOMAME'
                ? type + ' ~ ' + (locked ? 'LOCKED' : 'UNLOCKED') + ' ~ ' + currentDirectory
                : 'INCOMING TRANSMISSION ~ MAOMAME'}
        </span>
        {content}
    </div>
);

export const fileStructure = {
    root: {files: [{name: 'RPREPORT.txt'}], folders: [{name: 'NIXONOVY-PASKY', locked: true}]},
    archive: {
        files: [{name: 'README.txt'}],
        folders: [{name: 'TRASH'}, {name: 'AUDIO'}, {name: 'VIDEO'}],
    },
};

export const TxtFileWrapper = ({title, children}) => {
    return (
        <div className="pl-4 border-l-8 border-double border-blue-300 border-opacity-30 max-w-2xl leading-6 mt-5 text-blue-300 ">
            <div className="underline decoration-double underline-offset-4 decoration-2 mb-4">
                TEXT VIEWER ::: {title} ::: v23.9.200
            </div>
            {children}
        </div>
    );
};
export const ReportTxtContent = () => {
    return (
        <TxtFileWrapper title="RPREPORT.txt">
            Občane/občanko, nacházíš se ve střeženém prostoru Mainframu. Pokud ti nepřísluší odznak
            a identifikační číslo příslušníka RadioPolu, opusť okamžitě tento prostor. Databáze
            RadioPolu obsahuje veškerý obsah, který byl shledán závadným a v rozporu s poklidným
            občanským soužitím, tedy obsah nevhodný pro další distribuci. Konzumace a distribuce
            obsahu bez předchozího svolení RadioPolu je tak v rozporu se zákonem.
            <br />
            <br />
            Každý nepovolený pokus o vniknutí do Mainframu je penalizován srážkou 5 000 kreditů z
            občanova RadiolPay účtu.
            <br />
            <br />
            <div className="text-right">Ředitelství RadioPolu, Severozápadní zóna</div>
        </TxtFileWrapper>
    );
};

export const RadiolMessageWrapper = ({title, children}) => {
    return (
        <div className="pl-4 border-l-8 border-double border-amber-300 border-opacity-30 w-full leading-6 mt-5 text-amber-300 ">
            <div className="underline decoration-double underline-offset-4 decoration-2 mb-4">
                {title} &copy; Copyright Radiol Technologies
            </div>
            {children}
        </div>
    );
};

export const LoanContent = () => {
    return (
        <RadiolMessageWrapper title="RadiolFinances">
            Vypadá to, že chcete zažádat o půjčku. Pro půjčku využijte příkaz{' '}
            <b className="bg-amber-600 text-amber-400 px-1">rlloan</b> následovaný částkou v
            kreditech.
            <br />
            Minimální půjčka činí 5000 kreditů, maximální 20000 kreditů.
        </RadiolMessageWrapper>
    );
};

export const LoanRejectedContent = () => {
    return (
        <RadiolMessageWrapper title="RadiolFinances">
            Nepovolená hodnota kreditů. Minimální půjčka činí 5000 kreditů, maximální 20000 kreditů.
        </RadiolMessageWrapper>
    );
};

export const LoanNotAllowedContent = () => {
    return (
        <RadiolMessageWrapper title="RadiolFinances">
            Přesáhli jste maximální možný úvěr. Pro další půjčku odpracujte alespoň 20 % dlužných
            hodin.
        </RadiolMessageWrapper>
    );
};

export const LoanGrantedContent = ({loan, loanBalance, bankStatement}) => {
    return (
        <RadiolMessageWrapper title="RadiolFinances">
            Gratulujeme! Vaše půjčka byla schválena. {loan} kreditů bylo převedeno na váš RadiolPay
            účet.
            <br />
            <br />
            Splátkový kalendář prací Vám bude oznámen ředitelem distriktu.
            <br />
            <br />
            Výška dluhu: {loanBalance}
            <br />
            Aktuální zůstatek na účtě RadiolPay: {bankStatement}
        </RadiolMessageWrapper>
    );
};

export const HelpContent = () => {
    return (
        <div className="max-w-2xl leading-6 mt-5 text-amber-300 border-l-8 border-double border-amber-300 border-opacity-30 pl-4 ">
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
                <span className="font-bold whitespace-nowrap">rlid</span>
                <span className="float-right whitespace-nowrap">... zobrazit kartu občana</span>
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

                <span className="float-right whitespace-nowrap">... ukončit aktuální proces</span>
            </div>
            <div className="grid grid-cols-2">
                <span className="font-bold whitespace-nowrap">killall</span>

                <span className="float-right whitespace-nowrap">
                    ... ukončit všechny procesy a odhlásit se
                </span>
            </div>
        </div>
    );
};

export const RadiolNewsContent = () => {
    return (
        <RadiolMessageWrapper title="RadiolNews">
            <br />
            &gt; Nová Ultravize 15k láme rekordy v prodejích
            <br />
            &gt; Nepokoje v severním distriktu byly úspěšně potlačeny
            <br />
            &gt; Nábor k RadioPolu bude probíhat celý měsíc
            <br />
            &gt; Ultravize 15k snižuje kriminalitu ve všech distriktech!
            <br />
            &gt; Bude oblačno, v nížinách pod 300 m jsou očekávány mírné radiační deště
        </RadiolMessageWrapper>
    );
};

export const RadiolIDContent = ({creditBalance, loanBalance, hoursLeft}) => {
    return (
        <RadiolMessageWrapper title="RadioPol Report">
            <h1 className="inline text-amber-700">Výpis z karty občana XA2093902</h1>
            <br />
            <br />
            Zařazení: Pracovní četa Distriktu A9
            <br />
            Aktuální lokalita: Distrikt A9 [203.22 231.20]
            <br />
            Občanský kredit: 76%
            <br />
            Občanská loajalita: 42%
            <br />
            <br />
            Poslední záznam EKG: bez výchylek
            <br />
            Poslední záznam KT: bez výchylek
            <br />
            Hodnota Radiolu+ v krvi: 24% [klesající]
            <br />
            <br /> Výpis systému RadiolPay:
            <br />
            &gt; Aktuální zůstatek: {creditBalance} kreditů
            <br />
            &gt; Aktuální dluh: {loanBalance} kreditů
            <br />
            &gt; Zbývající splátky: {hoursLeft} pracovních hodin
        </RadiolMessageWrapper>
    );
};
