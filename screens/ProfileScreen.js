import { StyleSheet, Text, View, SafeAreaView, Pressable, Image } from 'react-native';
import React from 'react';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const user = auth.currentUser;
  const navigation = useNavigation();

  const signOutUser = () => {
    signOut(auth).then(() => {
      navigation.replace("Login");
    }).catch(err => {
      console.log(err);
    });
  };


  return (
    <SafeAreaView style={styles.container}>
      <Image 
        source={{ uri: "data:image/png;base64,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" }}
        style={styles.logo}
      />

      <Text style={styles.welcomeText}>Welcome, {user.email}</Text>

      <Image 
        source={{ uri: "data:image/png;base64,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" }} // Kendi profil resminizin URL'sini kullanın
        style={styles.profilePic}
      />
      <Pressable style={styles.signOutButton} onPress={signOutUser}>
        <Text style={styles.signOutText}>Sign Out</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0a",
    padding: 20,
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 30,
  },
  profilePic: {
    width: 30,
    height: 30,
    marginBottom: 30,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 40,
  },
  signOutButton: {
    backgroundColor: "#088F8F",
    padding: 15,
    borderRadius: 7,
    marginTop: 20,
    width: '60%',
    alignItems: 'center',
  },
  signOutText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
});