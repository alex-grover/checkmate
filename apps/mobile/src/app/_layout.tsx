import { PrivyProvider } from '@privy-io/expo'
import { TamaguiProvider } from '@tamagui/core'
import { Stack } from 'expo-router'
import { tamaguiConfig } from '../../tamagui.config'

export default function RootLayout() {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <PrivyProvider
        appId="cm326luuf00lhq82pedgywxsv"
        clientId="client-WY5dQjhgviLzhxDGjxNyZASXhW5VXHCWmrmdrbmXtNBDZ"
      >
        <Stack>
          <Stack.Screen name="index" />
        </Stack>
      </PrivyProvider>
    </TamaguiProvider>
  )
}
