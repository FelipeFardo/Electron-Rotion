import { app, Tray, Menu, nativeImage } from 'electron'
import path from 'node:path'
app.whenReady().then(() => {
  const icon = nativeImage.createFromPath(
    path.resolve(__dirname, 'rotionTemplate.png'),
  )

  const tray = new Tray(icon)

  const menu = Menu.buildFromTemplate([
    { label: 'Rotion', enabled: false },
    { type: 'separator' },
    {
      label: 'Criar novo documento',
      click: () => {
        console.log('Novo documento')
      },
    },
    { type: 'separator' },
  ])

  tray.setContextMenu(menu)
})
