# CallAPro React-Native Widget

Integrate CallAPro live-chat into any React Native app in minutes.  

---

## 🌐 Language

Click on the tabs below to switch between English and German versions of the README.

<details>
<summary>English</summary>

# CallAPro React-Native Widget

Integrate CallAPro live-chat into any React Native app in minutes.  

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
  const [showWidget, toggleWidget] = useState(false);

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
        <TouchableOpacity style={styles.button} onPress={() => toggleWidget(true)}>
          <Text style={styles.buttonText}>Chat with us</Text>
        </TouchableOpacity>
      </View>

      <CallAProWidget
        websiteToken={websiteToken}
        baseUrl={baseUrl}
        isModalVisible={showWidget}
        closeModal={() => toggleWidget(false)}
        user={user}
        customAttributes={customAttributes}
        locale="en"
        colorScheme="auto"
      />
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
| `baseUrl`          | string | **Yes**  | —       | URL of your CallAPro installation                                           |
| `websiteToken`     | string | **Yes**  | —       | Channel token from CallAPro Dashboard                                       |
| `isModalVisible`   | bool   | **Yes**  | —       | Controls widget visibility                                                  |
| `closeModal`       | func   | **Yes**  | —       | Callback to hide the widget                                                 |
| `user`             | object | No       | `{}`    | User info (`identifier`, `email`, `name`, etc.)                            |
| `customAttributes` | object | No       | `{}`    | Extra key-value metadata                                                    |
| `locale`           | string | No       | `"en"`  | Two-letter language code                                                    |
| `colorScheme`      | string | No       | `"light"` | Color theme (`"light"`, `"dark"`, or `"auto"`)                          |

---

## 🔑 Getting the Website Token

1. Log in to **CallAPro Dashboard**.  
2. Navigate to **Channels → Website**.  
3. Create or select your channel.  
4. Copy the **Website Token** and paste it into `websiteToken`.

---

## 🤝 Need help?

Email **contact@callapro.ai** and we'll get you sorted. Happy chatting! 🎉

</details>

<details>
<summary>Deutsch</summary>

# CallAPro React-Native Widget

Integrieren Sie CallAPro Live-Chat in jede React Native App in Minuten.  

---

## 📦 Installation

~~~bash
# mit npm
npm install @callapro/react-native-widget \
            react-native-webview \
            @react-native-async-storage/async-storage

# mit yarn
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

## 🚀 Schnellstart

~~~jsx
import React, { useState } from 'react';
import { SafeAreaView, TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import CallAProWidget from '@callapro/react-native-widget';

export default function App() {
  const [showWidget, toggleWidget] = useState(false);

  /* Optional: Chat personalisieren */
  const user = {
    identifier: 'user@example.com',
    name: 'Jane Doe',
    email: 'user@example.com',
    avatar_url: '',
  };

  const customAttributes = { plan: 'pro', accountStatus: 'active' };

  /* Diese beiden Werte für jeden Kunden/Projekt ersetzen */
  const websiteToken = 'PASTE_YOUR_CHANNEL_TOKEN';
  const baseUrl      = 'https://chatguru.callapro.ai';

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity style={styles.button} onPress={() => toggleWidget(true)}>
          <Text style={styles.buttonText}>Chat mit uns</Text>
        </TouchableOpacity>
      </View>

      <CallAProWidget
        websiteToken={websiteToken}
        baseUrl={baseUrl}
        isModalVisible={showWidget}
        closeModal={() => toggleWidget(false)}
        user={user}
        customAttributes={customAttributes}
        locale="de"
        colorScheme="auto"
      />
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

## ⚙️ Prop-Referenz

| Prop               | Typ    | Erforderlich | Standard | Beschreibung                                                           |
| ------------------ | ------ | ------------ | -------- | ---------------------------------------------------------------------- |
| `baseUrl`          | string | **Ja**       | —        | URL Ihrer CallAPro-Installation                                        |
| `websiteToken`     | string | **Ja**       | —        | Kanal-Token vom CallAPro Dashboard                                     |
| `isModalVisible`   | bool   | **Ja**       | —        | Steuert die Sichtbarkeit des Widgets                                  |
| `closeModal`       | func   | **Ja**       | —        | Callback zum Ausblenden des Widgets                                    |
| `user`             | object | Nein         | `{}`     | Benutzerinformationen (`identifier`, `email`, `name`, etc.)           |
| `customAttributes` | object | Nein         | `{}`     | Zusätzliche Schlüssel-Wert-Metadaten                                  |
| `locale`           | string | Nein         | `"en"`   | Zwei-Buchstaben-Sprachcode                                            |
| `colorScheme`      | string | Nein         | `"light"` | Farbschema (`"light"`, `"dark"`, oder `"auto"`)                     |

---

## 🔑 Website-Token erhalten

1. Melden Sie sich beim **CallAPro Dashboard** an.
2. Navigieren Sie zu **Channels → Website**.
3. Erstellen oder wählen Sie Ihren Kanal.
4. Kopieren Sie das **Website-Token** und fügen Sie es in `websiteToken` ein.

---

## 🤝 Brauchen Sie Hilfe?

Senden Sie eine E-Mail an **contact@callapro.ai** und wir helfen Ihnen weiter. Viel Spaß beim Chatten! 🎉

</details>