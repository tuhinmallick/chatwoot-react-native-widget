import React, {useState} from 'react';
import CallAProWidget from '@callapro/react-native-widget';

import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';

const App = () => {
  const [showWidget, toggleWidget] = useState(false);
  const [user, setUser] = useState({
    identifier: 'user@example.com',
    name: 'John Doe',
    avatar_url: 'https://i.pravatar.cc/150',
    email: 'user@example.com',
    identifier_hash: '',
  });
  const customAttributes = {
    accountId: '123',
    plan: 'pro',
    status: 'active',
  };
  const websiteToken = 'YOUR_WEBSITE_TOKEN';
  const baseUrl = 'https://chatguru.callapro.ai';
  const [locale, setLocale] = useState('en');

  const handleLanguageChange = (text) => {
    setLocale(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>CallAPro Widget Demo</Text>
        
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={text =>
            setUser(prevUser => ({
              ...prevUser,
              name: text,
            }))
          }
          value={user.name}
          placeholder="John Doe"
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={text =>
            setUser(prevUser => ({
              ...prevUser,
              email: text,
              identifier: text,
            }))
          }
          value={user.email}
          placeholder="user@example.com"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Language</Text>
        <TextInput
          style={styles.input}
          value={locale}
          onChangeText={handleLanguageChange}
          placeholder="en"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Avatar</Text>
        <TextInput
          style={styles.input}
          onChangeText={text =>
            setUser(prevUser => ({
              ...prevUser,
              avatar_url: text,
            }))
          }
          value={user.avatar_url}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => toggleWidget(true)}>
          <Text style={styles.buttonText}>Open Chat Widget</Text>
        </TouchableOpacity>
      </View>

      <CallAProWidget
        websiteToken={websiteToken}
        locale={locale}
        baseUrl={baseUrl}
        colorScheme="light"
        closeModal={() => toggleWidget(false)}
        isModalVisible={showWidget}
        user={user}
        customAttributes={customAttributes}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  modal: {
    flex: 1,
    paddingVertical: 32,
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  button: {
    height: 48,
    marginTop: 32,
    backgroundColor: '#1F93FF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  label: {
    marginTop: 16,
    marginBottom: 8,
    fontSize: 14,
    fontWeight: '500',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#E5E7EB',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 12,
    fontSize: 16,
    color: '#1F2937',
  },
});

export default App;
