import { Emitter } from 'mitt'
import { EventsForMitt } from '@/utils/types/emitter'
import { InjectionKey } from 'vue'

export const emitterKey: InjectionKey<Emitter<EventsForMitt>> = Symbol('$emitter')
export const modalKey: InjectionKey<Emitter<EventsForMitt>> = Symbol('$modal')
