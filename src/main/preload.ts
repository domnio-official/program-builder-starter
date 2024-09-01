import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electronAPI", {
  sendMessage: (message: string) => ipcRenderer.send("message", message),
  onMaximized: (callback: Function) =>
    ipcRenderer.on("maximized", (_event) => callback()),
  onRestored: (callback: Function) =>
    ipcRenderer.on("restored", (_event) => callback()),
});

contextBridge.exposeInMainWorld("app", {
  close: () => ipcRenderer.send("closeApp"),
  minimize: () => ipcRenderer.send("minimizeApp"),
  maximizeRestore: () => ipcRenderer.send("maximizeRestoreApp"),
});
