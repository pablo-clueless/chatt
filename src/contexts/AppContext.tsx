import { ReactNode, createContext, useState } from 'react'

interface Props {
    children: ReactNode
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AppContext = createContext<any | null>(null)
AppContext.displayName = ''

const AppProvider = ({children}:Props) => {
    const [chatBackground, setChatBackground] = useState<ArrayBuffer | string | null>('https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80')
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