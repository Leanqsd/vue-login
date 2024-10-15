import { defineStore } from 'pinia'
import type { SesionState } from '../models/SesionStateModel'
import type { Sesion } from '../models/SesionModel'

export const useSesionStore = defineStore('sesion', {
  state: (): SesionState => ({
    loading: false,
    data: null
  }),

  actions: {
    // Acción para actualizar el estado de la sesión
    update(newSesionData: Sesion) {
      this.loading = true

      // Actualiza el estado con los nuevos datos de sesión
      this.data = newSesionData

      // Simulamos que termina el proceso de carga
      setTimeout(() => {
        this.loading = false
      }, 500) // Simula un pequeño retraso
    }
  }
})
