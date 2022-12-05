import React from 'react';

type Theme = 'light' | 'dark';

export const ThemeContext = React.createContext<Theme>('light');
