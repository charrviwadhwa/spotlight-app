import { Image, Pressable, Text, TouchableOpacity, View} from "react-native";
import { Link } from "expo-router";
import {styles} from "../../styles/auth.style"
export default function Index() {
  return (
    <View
      style={styles.container}
    >
     <Link href={"/notifications"}>Feed screen</Link>
        
    </View>
  );
}
