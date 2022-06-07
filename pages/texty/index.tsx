import Meta from '../../components/Meta';

const lyrics = [
    {
        title: 'Dráty',
        content: (
            <>
                <p>
                    Otvírám oči, dveře
                    <br />
                    Vycházim z baráku
                    <br />
                    Na plicích omítka
                    <br />
                    Na rukou krev
                </p>

                <p>
                    Obrázky v mojí hlavě
                    <br />
                    Zástupy vojáků
                    <br />
                    Na dásni tvoje řasa
                    <br />
                    Zrychlenej dech
                </p>

                <p>
                    Dejchám, ale dejchat jen mi nestačí
                    <br />
                    Dejchám a jak se Země otáčí
                    <br />
                    Zády otáčim se já
                    <br />
                    Zády otáčim se já
                </p>

                <p>
                    Před domem stojí muž
                    <br />
                    Za mužem žena
                    <br />
                    Za ženou dráty
                    <br />
                    Za dráty stěna
                </p>

                <p>
                    Ruce i nohy tuhnou
                    <br />
                    U koutku pěna
                    <br />
                    Už zase prší
                    <br />
                    Zůstaneš tu sama
                </p>

                <p>
                    Doufám, že výboj zdi mě omráčí
                    <br />
                    Doufám a jak se Země otáčí
                    <br />
                    Zády otáčim se já
                    <br />
                    Zády otáčim se já
                </p>

                <p>
                    Už bude svítat
                    <br />
                    Prach lítá z výhybek
                    <br />
                    Zhasnutý žárovky potemnělejch bytovek
                </p>

                <p>
                    Ve vzduchu voní jaro
                    <br />
                    Jaro a nafta
                    <br />
                    Cestu mi čistěj popelářský auta
                </p>

                <p>
                    A doufám, že v prach se ráno obrátí
                    <br />
                    Koukám a jak se Země otáčí
                    <br />
                    Zády otáčim se já
                    <br />
                    Zády otáčim se já
                    <br />
                    Zády otáčim se já
                </p>

                <p>Tak doufám, že prach se zase usadí</p>
            </>
        ),
    },
];
export default function Texty() {
    return (
        <>
            <Meta />

            <div className="w-full h-full overflow-y-auto">
                <div className="p-10">
                    {lyrics.map((item, index) => {
                        return (
                            <div
                                className="prose m-auto prose-invert prose-xl font-caption"
                                key={index}
                            >
                                <h1>{item.title}</h1>
                                <div>{item.content}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
