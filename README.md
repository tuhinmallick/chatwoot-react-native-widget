# CallAPro React-Native Widget

Integrate CallAPro live-chat into any React Native app in minutes.  

---

## 🌐 Language

Click on the tabs below to switch between English and German versions of the README.

<details>
<summary>English</summary>

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
| `baseUrl`          | string | **Yes**  | —       | URL of your CallAPro installation (`https://chatguru.callapro.ai`). This is a required field.           |
| `websiteToken`     | string | **Yes**  | —       | Channel token (see below). This is a required field.                                                    |
| `isModalVisible`   | bool   | **Yes**  | `false` | Controls widget visibility. This is a required field and defaults to `false`.                                                   |
| `closeModal`       | func   | **Yes**  | —       | Callback to hide the widget. This is a required field.                                                  |
| `user`             | object | No       | `{}`    | User info (`identifier`, `email`, `name`, etc.). This is optional and defaults to `{}`.                              |
| `customAttributes` | object | No       | `{}`    | Extra key-value metadata. This is optional and defaults to `{}`.                                                     |
| `locale`           | string | No       | `"en"`  | Two-letter language code. This is optional and defaults to `"en"`.                                                     |
| `colorScheme`      | `"light" \| "dark" \| "auto"` | No | `"auto"` | Force light, dark, or follow system. This is optional and defaults to `"auto"`.                                          |

### `baseUrl`
The `baseUrl` prop is the URL of your CallAPro installation. This is a required field. For example, `https://chatguru.callapro.ai`.

### `websiteToken`
The `websiteToken` prop is the channel token. This is a required field. You can obtain it from the CallAPro Dashboard.

### `isModalVisible`
The `isModalVisible` prop controls the visibility of the widget. This is a required field and defaults to `false`.

### `closeModal`
The `closeModal` prop is a callback function to hide the widget. This is a required field.

### `user`
The `user` prop is an object containing user information such as `identifier`, `email`, `name`, etc. This is optional and defaults to `{}`.

### `customAttributes`
The `customAttributes` prop is an object containing extra key-value metadata. This is optional and defaults to `{}`.

### `locale`
The `locale` prop is a two-letter language code. This is optional and defaults to `"en"`.

### `colorScheme`
The `colorScheme` prop can be `"light"`, `"dark"`, or `"auto"`. This is optional and defaults to `"auto"`.

---

## 🔑 Getting the Website Token

1. Log in to **CallAPro Dashboard**.  
2. Navigate to **Channels → Website**.  
3. Create or select your channel.  
4. Copy the **Website Token** and paste it into `websiteToken`.

---

## 🤝 Need help?

Email **contact@callapro.ai** and we’ll get you sorted. Happy chatting! 🎉

---

## 🏆 Best Practices

1. **Keep the `baseUrl` and `websiteToken` secure**: Do not expose these values in your client-side code. Use environment variables or a secure storage solution.
2. **Handle user data responsibly**: Ensure that you comply with data protection regulations when handling user information.
3. **Optimize performance**: Load the widget only when necessary to improve the performance of your app.
4. **Test thoroughly**: Test the integration in different scenarios to ensure that it works as expected.
5. **Stay updated**: Keep the widget and its dependencies up to date to benefit from the latest features and security patches.

</details>

<details>
<summary>Deutsch</summary>

# CallAPro React-Native Widget

Integrieren Sie CallAPro Live-Chat in jede React Native App in Minuten.  
100 % White-Label — keine zusätzliche Markenkennzeichnung.

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
  const [visible, setVisible] = useState(false);

  /* Optional: Personalisieren Sie den Chat */
  const user = {
    identifier: 'user@example.com',
    name: 'Jane Doe',
    email: 'user@example.com',
    avatar_url: '',
  };

  const customAttributes = { plan: 'pro', accountStatus: 'active' };

  /* Ersetzen Sie diese beiden Werte für jeden Kunden/Projekt */
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

## ⚙️ Prop-Referenz

| Prop               | Typ    | Erforderlich | Standard | Beschreibung                                                                  |
| ------------------ | ------ | ------------ | -------- | ---------------------------------------------------------------------------- |
| `baseUrl`          | string | **Ja**       | —        | URL Ihrer CallAPro-Installation (`https://chatguru.callapro.ai`). Dies ist ein erforderliches Feld.           |
| `websiteToken`     | string | **Ja**       | —        | Kanal-Token (siehe unten). Dies ist ein erforderliches Feld.                                                    |
| `isModalVisible`   | bool   | **Ja**       | `false`  | Steuert die Sichtbarkeit des Widgets. Dies ist ein erforderliches Feld und standardmäßig auf `false` gesetzt.                                                   |
| `closeModal`       | func   | **Ja**       | —        | Callback zum Ausblenden des Widgets. Dies ist ein erforderliches Feld.                                                  |
| `user`             | object | Nein         | `{}`     | Benutzerinformationen (`identifier`, `email`, `name`, etc.). Dies ist optional und standardmäßig auf `{}` gesetzt.                              |
| `customAttributes` | object | Nein         | `{}`     | Zusätzliche Schlüssel-Wert-Metadaten. Dies ist optional und standardmäßig auf `{}` gesetzt.                                                     |
| `locale`           | string | Nein         | `"en"`   | Zwei-Buchstaben-Sprachcode. Dies ist optional und standardmäßig auf `"en"` gesetzt.                                                     |
| `colorScheme`      | `"light" \| "dark" \| "auto"` | Nein | `"auto"` | Erzwingen Sie hell, dunkel oder folgen Sie dem System. Dies ist optional und standardmäßig auf `"auto"` gesetzt.                                          |

### `baseUrl`
Das `baseUrl` Prop ist die URL Ihrer CallAPro-Installation. Dies ist ein erforderliches Feld. Zum Beispiel, `https://chatguru.callapro.ai`.

### `websiteToken`
Das `websiteToken` Prop ist das Kanal-Token. Dies ist ein erforderliches Feld. Sie können es vom CallAPro Dashboard erhalten.

### `isModalVisible`
Das `isModalVisible` Prop steuert die Sichtbarkeit des Widgets. Dies ist ein erforderliches Feld und standardmäßig auf `false` gesetzt.

### `closeModal`
Das `closeModal` Prop ist eine Callback-Funktion zum Ausblenden des Widgets. Dies ist ein erforderliches Feld.

### `user`
Das `user` Prop ist ein Objekt, das Benutzerinformationen wie `identifier`, `email`, `name`, etc. enthält. Dies ist optional und standardmäßig auf `{}` gesetzt.

### `customAttributes`
Das `customAttributes` Prop ist ein Objekt, das zusätzliche Schlüssel-Wert-Metadaten enthält. Dies ist optional und standardmäßig auf `{}` gesetzt.

### `locale`
Das `locale` Prop ist ein Zwei-Buchstaben-Sprachcode. Dies ist optional und standardmäßig auf `"en"` gesetzt.

### `colorScheme`
Das `colorScheme` Prop kann `"light"`, `"dark"`, oder `"auto"` sein. Dies ist optional und standardmäßig auf `"auto"` gesetzt.

---

## 🔑 Erhalten des Website-Tokens

1. Melden Sie sich beim **CallAPro Dashboard** an.  
2. Navigieren Sie zu **Channels → Website**.  
3. Erstellen oder wählen Sie Ihren Kanal aus.  
4. Kopieren Sie das **Website-Token** und fügen Sie es in `websiteToken` ein.

---

## 🤝 Brauchen Sie Hilfe?

Senden Sie eine E-Mail an **contact@callapro.ai** und wir helfen Ihnen weiter. Viel Spaß beim Chatten! 🎉

---

## 🏆 Best Practices

1. **Halten Sie das `baseUrl` und `websiteToken` sicher**: Setzen Sie diese Werte nicht in Ihrem Client-seitigen Code aus. Verwenden Sie Umgebungsvariablen oder eine sichere Speicherlösung.
2. **Gehen Sie verantwortungsvoll mit Benutzerdaten um**: Stellen Sie sicher, dass Sie die Datenschutzbestimmungen einhalten, wenn Sie Benutzerinformationen verarbeiten.
3. **Optimieren Sie die Leistung**: Laden Sie das Widget nur bei Bedarf, um die Leistung Ihrer App zu verbessern.
4. **Testen Sie gründlich**: Testen Sie die Integration in verschiedenen Szenarien, um sicherzustellen, dass sie wie erwartet funktioniert.
5. **Bleiben Sie auf dem neuesten Stand**: Halten Sie das Widget und seine Abhängigkeiten auf dem neuesten Stand, um von den neuesten Funktionen und Sicherheitsupdates zu profitieren.

</details>