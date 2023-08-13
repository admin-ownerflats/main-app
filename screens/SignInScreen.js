import { Button, SafeAreaView, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import OwnerFlatsLogo from "../components/OwnerFlatsLogo";

export default function SignInScreen({ promptAsync }) {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <OwnerFlatsLogo />
      
      <Text style={{ fontSize: 32, fontWeight: "bold" }}>
        Sign In to{" "}
        <Text style={{ color: "#4285F4" }}>
          <Text style={{ color: "#EA4336" }}>O</Text>
          <Text style={{ color: "#FBBC04" }}>w</Text>
          <Text style={{ color: "#4285F4" }}>n</Text>
          <Text style={{ color: "#34A853" }}>e</Text>
          <Text style={{ color: "#EA4336" }}>r</Text>
          flats.com
        </Text>
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: "#4285F4",
          width: "90%",
          padding: 10,
          borderRadius: 15,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 15,
          marginTop: 80,
          marginBottom: 150,
        }}
        onPress={() => promptAsync()}
      >
        <AntDesign name="google" size={30} color="white" />
        <Text style={{ fontWeight: "bold", color: "white", fontSize: 17 }}>
          Sign In with Google
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}