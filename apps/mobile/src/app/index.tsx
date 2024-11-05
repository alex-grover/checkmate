import { useLoginWithFarcaster } from '@privy-io/expo'
import { useCallback } from 'react'
import { Button, Text, View } from 'react-native'

export default function Index() {
  const { loginWithFarcaster, state } = useLoginWithFarcaster()

  const handlePress = useCallback(
    () => loginWithFarcaster({ relyingParty: 'com.checkmate.app' }),
    [loginWithFarcaster],
  )

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Button
        title="Sign in with Farcaster"
        onPress={handlePress}
        disabled={state.status === 'polling-status'}
      />
      {state.status === 'error' && (
        <>
          <Text style={{ color: 'red' }}>There was an error</Text>
          {state.error && (
            <Text style={{ color: 'lightred' }}>{state.error.message}</Text>
          )}
        </>
      )}
    </View>
  )
}
