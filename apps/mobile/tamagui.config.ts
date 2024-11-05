import { createTamagui } from '@tamagui/core'

export const tamaguiConfig = createTamagui({})

type AppConfig = typeof tamaguiConfig
declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends AppConfig {}
}
