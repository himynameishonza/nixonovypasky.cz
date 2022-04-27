import classnames from 'classnames';
import {useEffect, useState} from 'react';
import styles from './Skeleton.module.scss';

export default function Skeleton() {
    const [color, setColor] = useState('bg-black text-white');
    const [themeIndex, setThemeIndex] = useState(0);
    const [prevThemeIndex, setPrevThemeIndex] = useState(0);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const themes = [
        'bg-black text-white',
        'bg-red-500 text-yellow-500',
        'bg-yellow-400 text-black',
        'bg-green-500 text-rose-700',
        'bg-black text-rose-700',
        'bg-zinc-500 text-yellow-300',
        'bg-black text-emerald-400',
        'bg-sky-500 text-emerald-400',
        'bg-lime-500 text-orange-500',
        'bg-teal-500 text-red-400',
        'bg-cyan-500 text-yellow-300',
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            const getRandom = () => {
                const min = 0;
                const max = themes.length - 1;
                const rand = min + Math.random() * (max - min);
                const colorRand = Math.round(rand);
                return colorRand;
            };

            const generateNewThemeIndex = () => {
                const tempRand = getRandom();
                if (tempRand === prevThemeIndex) {
                    tempRand < themes.length
                        ? setColor(themes[tempRand + 1])
                        : setColor(themes[tempRand - 1]);
                } else {
                    setPrevThemeIndex(themeIndex);
                    setThemeIndex(tempRand);
                    setColor(themes[tempRand]);
                }
            };

            generateNewThemeIndex();

            return () => clearInterval(interval);
        }, 1000);

        return () => clearInterval(interval);
    }, [prevThemeIndex, themeIndex, themes, themes.length]);

    return (
        <div className={classnames(styles['skeleton'], color, 'transition-all')}>
            <div>Nixonovy pásky</div>
        </div>
    );
}
