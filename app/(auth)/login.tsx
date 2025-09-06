import { View, Text, Image, TouchableOpacity } from 'react-native'
import {styles} from "@/styles/auth.style"
import React from 'react'
import { useSSO } from "@clerk/clerk-expo";
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '@/constants/theme'

export default function login() {
  const { startSSOFlow } = useSSO();

  const handleGoogleSignIn = async () => {
    try {
      await startSSOFlow({ strategy: "oauth_google" });
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };

  return (
    <View style={styles.container}>
        <View style={styles.brandSection}>
            <View style={styles.logoContainer}>
                <Ionicons name="leaf" size={32} color={COLORS.primary}/>
            </View>
            <Text style={styles.appName}>spotlight</Text>
            <Text style={styles.tagline}>don't miss anyhting</Text>

        </View>
        {/* /* Illutration/* */}
        <View style={styles.illustrationContainer}>
            <Image 
            source={require("../../assets/images/Online world-cuate.png")}
            style={styles.illustration}
            resizeMode="cover"/>
        </View>

        {/* Logins */}
         <View style={styles.loginSection}>
        <TouchableOpacity
          style={styles.googleButton}
          onPress={handleGoogleSignIn}
          activeOpacity={0.9}
        >
          <View style={styles.googleIconContainer}>
            <Ionicons name="logo-google" size={20} color={COLORS.surface} />
          </View>
          <Text style={styles.googleButtonText}>Continue with Google</Text>
        </TouchableOpacity>

        <Text style={styles.termsText}>
          By continuing, you agree to our Terms and Privacy Policy
        </Text>
      </View>
    </View>
  )
}