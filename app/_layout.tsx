import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ClerkProvider } from '@clerk/clerk-expo'
import { Slot } from 'expo-router'
export default function RootLayout() {
  return(
    <ClerkProvider>
      <Slot />
    
    <SafeAreaProvider>
      <SafeAreaView style={{flex:1, backgroundColor:"black"}}>
        <Stack screenOptions={{headerShown:false}}>
        </Stack>
    </SafeAreaView>
    </SafeAreaProvider>
  </ClerkProvider>
  )
}

