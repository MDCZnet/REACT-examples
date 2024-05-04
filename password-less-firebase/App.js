import React from "react";
import { email, StyleSheet, Text, View, TextInput, Button } from "react-native";
import "./firebaseConfig";
import { getAuth, linkWithCredential, EmailAuthProvider } from "firebase/auth";

export default function App() {
  // Construct the email link credential from the current URL.
const credential = EmailAuthProvider.credentialWithLink(
  email, window.location.href);

// Link the credential to the current user.
const auth = getAuth();
linkWithCredential(auth.currentUser, credential)
  .then((usercred) => {
    // The provider is now successfully linked.
    // The phone user can now sign in with their phone number or email.
  })
  .catch((error) => {
    // Some error occurred.
  });

  return (
    <View style={styles.container}>
      <Text>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
      ></TextInput>
      <Text>Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        secureTextEntry={true}
      ></TextInput>
      <Button title="Sign Up!" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10
  }
});