import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, StatusBar } from 'react-native';

function LoginScreen() {

  return (

    <SafeAreaView style={styles.mainContainer}>

      <StatusBar barStyle="light-content" />

      <ScrollView style={styles.scroll}>

        
        <View style={styles.topRow}>
          <Text style={styles.back}> ← </Text>
         
        </View>

        
        <View style={styles.logoBox}>
          <View style={styles.blueCircle}>
            <Text style={styles.fLetter}>f</Text>
          </View>
        </View>

        
        <View style={styles.formArea}>

          <TextInput
            style={styles.textBox}
            placeholder="Mobile number or email"
            placeholderTextColor="#777777"
          />

          <TextInput
            style={styles.textBox}
            placeholder="Password"
            placeholderTextColor="#777777"
            secureTextEntry={true}
          />

          <TouchableOpacity style={styles.blueButton}>
            <Text style={styles.buttonText}>Log in</Text>
          </TouchableOpacity>

          <Text style={styles.smallLink}>Forgot password?</Text>

        </View>

        
        

      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },

  scroll: {
    flex: 1,
  },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },

  back: {
    color: 'White',
    fontSize: 30,
  },

  lang: {
    color: '#1877f2',
    fontSize: 16,
  },

  logoBox: {
    alignItems: 'center',
    marginTop: 80,
    marginBottom: 80,
  },

  blueCircle: {
    width: 70,
    height: 70,
    backgroundColor: '#1877f2',
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },

  fLetter: {
    color: 'white',
    fontSize: 60,
    fontWeight: 'bold',
  },

  formArea: {
    paddingLeft: 30,
    paddingRight: 30,
  },

  textBox: {
    backgroundColor: 'white',
    color: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#333333',
  },

  blueButton: {
    backgroundColor: '#1877f2',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  smallLink: {
    color: '#1877f2',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 25,
  },

  outlineButton: {
    borderColor: '#1877f2',
    borderWidth: 2,
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
  },

  outlineText: {
    color: '#1877f2',
    fontSize: 17,
    fontWeight: 'bold',
  },

 
});

export default LoginScreen;

