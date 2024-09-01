import { ipcMain, BrowserWindow } from "electron";

ipcMain.on("closeApp", () => {
  BrowserWindow.getFocusedWindow()!.close();
});

ipcMain.on("minimizeApp", () => {
  BrowserWindow.getFocusedWindow()!.minimize();
});

ipcMain.on("maximizeRestoreApp", () => {
  const win = BrowserWindow.getFocusedWindow()!;
  if (win.isMaximized()) win.unmaximize();
  else win.maximize();
});
