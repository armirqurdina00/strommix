import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import { Menu, MenuItem } from '@mui/material'

function ResponsiveAppBar() {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
	const open = Boolean(anchorEl)

	const handle_logout = (event: React.MouseEvent<HTMLElement>) => {
		// router.push('/api/auth/logout')
	}

	const handle_login = (event: React.MouseEvent<HTMLElement>) => {
		// router.push('/api/auth/login')
	}

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget)
	}

	const handle_close = () => {
		setAnchorEl(null)
	}

	return (
		<AppBar className='bg-zinc-100 text-zinc-600' position='static'>
			<Container maxWidth='xs'>
				<Toolbar
					disableGutters
					className='flex justify-between'
					variant='dense'
				>
					<div />
					<Box>
						<IconButton
							id='basic-button'
							aria-controls={open ? 'basic-menu' : undefined}
							aria-haspopup='true'
							aria-expanded={open ? 'true' : undefined}
							onClick={handleClick}
						>
							<Avatar sx={{ width: 36, height: 36 }} />
						</IconButton>

						<Menu
							id='basic-menu'
							anchorEl={anchorEl}
							open={open}
							onClose={handle_close}
							MenuListProps={{
								'aria-labelledby': 'basic-button',
							}}
						>
							<MenuItem onClick={handle_login}>Login</MenuItem>
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	)
}
export default ResponsiveAppBar
