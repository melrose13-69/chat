import { BodyTheme } from '@/utils/triggers/BodyTriggers'
import { Emitter } from 'mitt'
import { EventsForMitt } from '@/utils/types/emitter'
import { ReactiveVariable } from 'vue/macros'
import { reactive } from 'vue'

export class DarkMode {
  private _darkMode: ReactiveVariable<{ value: boolean }>

  constructor (emitter: Emitter<EventsForMitt>) {
    const currentDarkMode = localStorage.getItem('dark-mode')
    const booleanDarkMode = currentDarkMode === 'true'

    if (currentDarkMode === null) {
      localStorage.setItem('dark-mode', 'true')
    }

    this._darkMode = reactive({ value: booleanDarkMode })

    BodyTheme.BodyClassTrigger(booleanDarkMode)

    emitter.on('darkModeAction', () => {
      this._darkMode.value = !this._darkMode.value

      localStorage.setItem('dark-mode', this._darkMode.value.toString())
      BodyTheme.BodyClassTrigger(this._darkMode.value)
    })
  }

  get mode () {
    return this._darkMode.value
  }
}
