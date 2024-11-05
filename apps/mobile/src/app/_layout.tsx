import { PrivyProvider } from '@privy-io/expo'
import { Stack } from 'expo-router'

export default function RootLayout() {
  return (
    <PrivyProvider
      appId="cm326luuf00lhq82pedgywxsv"
      clientId="client-WY5dQjhgviLzhxDGjxNyZASXhW5VXHCWmrmdrbmXtNBDZ"
    >
      <Stack>
        <Stack.Screen name="index" />
      </Stack>
    </PrivyProvider>
  )
}
