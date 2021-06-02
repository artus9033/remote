import * as Electron from 'electron';

// Taken from `RemoteMainInterface`
export var app: Electron.App;
export var autoUpdater: Electron.AutoUpdater;
export var BrowserView: typeof Electron.BrowserView;
export var BrowserWindow: typeof Electron.BrowserWindow;
export var ClientRequest: typeof Electron.ClientRequest;
export var clipboard: Electron.Clipboard;
export var CommandLine: typeof Electron.CommandLine;
export var contentTracing: Electron.ContentTracing;
export var Cookies: typeof Electron.Cookies;
export var crashReporter: Electron.CrashReporter;
export var Debugger: typeof Electron.Debugger;
export var desktopCapturer: Electron.DesktopCapturer;
export var dialog: Electron.Dialog;
export var Dock: typeof Electron.Dock;
export var DownloadItem: typeof Electron.DownloadItem;
export var globalShortcut: Electron.GlobalShortcut;
export var inAppPurchase: Electron.InAppPurchase;
export var IncomingMessage: typeof Electron.IncomingMessage;
export var ipcMain: Electron.IpcMain;
export var Menu: typeof Electron.Menu;
export var MenuItem: typeof Electron.MenuItem;
export var MessageChannelMain: typeof Electron.MessageChannelMain;
export var MessagePortMain: typeof Electron.MessagePortMain;
export var nativeImage: typeof Electron.NativeImage;
export var nativeTheme: Electron.NativeTheme;
export var net: Electron.Net;
export var netLog: Electron.NetLog;
export var Notification: typeof Electron.Notification;
export var powerMonitor: Electron.PowerMonitor;
export var powerSaveBlocker: Electron.PowerSaveBlocker;
export var protocol: Electron.Protocol;
export var screen: Electron.Screen;
export var ServiceWorkers: typeof Electron.ServiceWorkers;
export var session: typeof Electron.Session;
export var shell: Electron.Shell;
export var systemPreferences: Electron.SystemPreferences;
export var TouchBar: typeof Electron.TouchBar;
export var TouchBarButton: typeof Electron.TouchBarButton;
export var TouchBarColorPicker: typeof Electron.TouchBarColorPicker;
export var TouchBarGroup: typeof Electron.TouchBarGroup;
export var TouchBarLabel: typeof Electron.TouchBarLabel;
export var TouchBarOtherItemsProxy: typeof Electron.TouchBarOtherItemsProxy;
export var TouchBarPopover: typeof Electron.TouchBarPopover;
export var TouchBarScrubber: typeof Electron.TouchBarScrubber;
export var TouchBarSegmentedControl: typeof Electron.TouchBarSegmentedControl;
export var TouchBarSlider: typeof Electron.TouchBarSlider;
export var TouchBarSpacer: typeof Electron.TouchBarSpacer;
export var Tray: typeof Electron.Tray;
export var webContents: typeof Electron.WebContents;
export var WebRequest: typeof Electron.WebRequest;

// Taken from `Remote`
export function getCurrentWebContents(): Electron.WebContents;
export function getCurrentWindow(): Electron.BrowserWindow;
export function getGlobal(name: string): any;
export var process: NodeJS.Process;
export var require: NodeJS.Require;
