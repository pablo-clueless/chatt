import { ReactNode, createContext, useState } from 'react'

import landscape from 'assets/images/landscape.jpg'

interface Props {
    children: ReactNode
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AppContext = createContext<any | null>(null)
AppContext.displayName = ''

const AppProvider = ({children}:Props) => {
    const [chatBackground, setChatBackground] = useState<ArrayBuffer | string | null>(landscape)
    const [currentMode, setCurrentMode] = useState<string>('dark')

    const setMode = (mode: string) => {
		setCurrentMode(mode)
		localStorage.setItem('mode', JSON.stringify(mode))
	}

    const setBackground = (file:File) => {
        const fileReader = new FileReader()
        fileReader.onload = () => setChatBackground(fileReader.result)
        fileReader.readAsDataURL(file)
    }

    const value = {chatBackground, currentMode, setBackground, setMode}

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider