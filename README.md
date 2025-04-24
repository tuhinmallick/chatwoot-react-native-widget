# CallAPro React-Native Widget

Integrate CallAPro live-chat into any React Native app in minutes.  
100 % white-label — no extra branding.

---

## 📦 Installation

~~~bash
# with npm
npm install @callapro/react-native-widget \
            react-native-webview \
            @react-native-async-storage/async-storage

# with yarn
yarn add @callapro/react-native-widget \
         react-native-webview \
         @react-native-async-storage/async-storage
~~~

> **iOS (bare workflow)**
> 
> ~~~bash
> cd ios && pod install
> ~~~

---

## 🚀 Quick Start

~~~jsx
import React, { useState } from 'react';
import { SafeAreaView, TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import CallAProWidget from '@callapro/react-native-widget';

export default function App() {
  const [visible, setVisible] = useState(false);

  /* Optional: personalise the chat */
  const user = {
    identifier: 'user@example.com',
    name: 'Jane Doe',
    email: 'user@example.com',
    avatar_url: '',
  };

  const customAttributes = { plan: 'pro', accountStatus: 'active' };

  /* Replace these two values for each client/project */
  const websiteToken = 'PASTE_YOUR_CHANNEL_TOKEN';
  const baseUrl      = 'https://chatguru.callapro.ai';

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity style={styles.button} onPress={() => setVisible(true)}>
          <Text style={styles.buttonText}>Chat with us</Text>
        </TouchableOpacity>
      </View>

      {visible && (
        <CallAProWidget
          websiteToken={websiteToken}
          baseUrl={baseUrl}
          isModalVisible={visible}
          closeModal={() => setVisible(false)}
          user={user}
          customAttributes={customAttributes}
          locale="en"
          colorScheme="auto"
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  button:    { backgroundColor: '#1F93FF', borderRadius: 8, padding: 12 },
  buttonText:{ color: '#FFF', fontSize: 16 },
});
~~~

---

## ⚙️ Prop Reference

| Prop               | Type   | Required | Default | Description                                                                  |
| ------------------ | ------ | -------- | ------- | ---------------------------------------------------------------------------- |
| `baseUrl`          | string | **Yes**  | —       | URL of your CallAPro installation (`https://chatguru.callapro.ai`)           |
| `websiteToken`     | string | **Yes**  | —       | Channel token (see below)                                                    |
| `isModalVisible`   | bool   | **Yes**  | `false` | Controls widget visibility                                                   |
| `closeModal`       | func   | **Yes**  | —       | Callback to hide the widget                                                  |
| `user`             | object | No       | `{}`    | User info (`identifier`, `email`, `name`, etc.)                              |
| `customAttributes` | object | No       | `{}`    | Extra key-value metadata                                                     |
| `locale`           | string | No       | `"en"`  | Two-letter language code                                                     |
| `colorScheme`      | `"light" \| "dark" \| "auto"` | No | `"auto"` | Force light, dark, or follow system                                          |

---

## 🔑 Getting the Website Token

1. Log in to **CallAPro Dashboard**.  
2. Navigate to **Channels → Website**.  
3. Create or select your channel.  
4. Copy the **Website Token** and paste it into `websiteToken`.

---

## 🤝 Need help?

Email **contact@callapro.ai** and we’ll get you sorted. Happy chatting! 🎉
