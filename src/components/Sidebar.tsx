'use client'
import React from 'react'
import { 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText,
  Divider,
  Box,
  Typography,
  ThemeProvider,
  createTheme,
  CssBaseline
} from '@mui/material'
import { 
  Home, 
  Info, 
  ContactMail, 
  Settings, 
  Dashboard,
  Article 
} from '@mui/icons-material'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
})

const Sidebar = () => {
  const menuItems = [
    { text: 'Dashboard', icon: <Dashboard />, href: '#' },
    { text: 'Home', icon: <Home />, href: '#' },
    { text: 'Artigos', icon: <Article />, href: '#' },
    { text: 'Sobre', icon: <Info />, href: '#' },
    { text: 'Contato', icon: <ContactMail />, href: '#' },
    { text: 'Configurações', icon: <Settings />, href: '#' },
  ]

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        sx={{
          width: 280,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 280,
            boxSizing: 'border-box',
            position: 'relative',
            height: '100%',
            backgroundColor: '#f5f5f5',
          },
        }}
      >
        <Box sx={{ padding: 2 }}>
          <Typography variant="h6" sx={{ mb: 2, color: '#1976d2', fontWeight: 'bold' }}>
            📋 Sidebar MF Remote
          </Typography>
          <List>
            {menuItems.slice(0, 3).map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon sx={{ color: '#1976d2' }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {menuItems.slice(3).map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon sx={{ color: '#1976d2' }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </ThemeProvider>
  )
}

export default Sidebar 