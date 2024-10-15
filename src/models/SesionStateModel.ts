import type { Sesion } from './SesionModel'

export interface SesionState {
  loading: boolean
  data: Sesion | null // Puede ser nulo si no hay sesión activa
}
