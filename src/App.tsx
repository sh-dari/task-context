import { useState } from 'react';
import { data, IItem } from './data';
import { useTheme } from './Context';
import { ThemeContext } from './themeContext';
import './styles.css';

type Theme = 'light' | 'dark';

export function App() {
    const [currentTheme, setCurrentTheme] = useState<Theme>(useTheme());

    function changeTheme() {
        setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
    }

    const className = `app app_${currentTheme}`;
    return (
        <div className={className}>
            <button onClick={changeTheme}>Toggle theme</button>
            <ThemeContext.Provider value={currentTheme}>
                <List data={data} />
            </ThemeContext.Provider>
        </div>
    );
}

function List(props: { data: IItem[] }) {
    return (
        <div>
            {data.map((item) => (
                <ListItem caption={item.name} key={item.id} />
            ))}
        </div>
    );
}

function ListItem(props: { caption: string }) {
    const className = `listItem listItem_${useTheme()}`;
    return <div className={className}>{props.caption}</div>;
}
