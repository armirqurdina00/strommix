import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Meta from '@/components/meta'
import '@/styles/globals.css'
import { UserProvider } from '@auth0/nextjs-auth0/client'
import { StyledEngineProvider } from '@mui/material/styles'

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<UserProvider>
				<StyledEngineProvider injectFirst>
					<ThemeProvider
						attribute='class'
						defaultTheme='system'
						disableTransitionOnChange
					>
						<Meta />
						<Component {...pageProps} />
					</ThemeProvider>
				</StyledEngineProvider>
			</UserProvider>
		</>
	)
}

export default App
