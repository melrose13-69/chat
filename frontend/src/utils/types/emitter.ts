export type ModalNameEventStart = 'settings'

export type Events = keyof EventsForMitt

export type EventsForMitt = {
  sidebarAction: { sidebar: boolean; body?: boolean }
  settingsAction?: boolean
  darkModeAction?: boolean
  contactsAction: boolean
}
