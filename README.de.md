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

---

## 🔑 Erhalten des Website-Tokens

1. Melden Sie sich beim **CallAPro Dashboard** an.  
2. Navigieren Sie zu **Channels → Website**.  
3. Erstellen oder wählen Sie Ihren Kanal aus.  
4. Kopieren Sie das **Website-Token** und fügen Sie es in `websiteToken` ein.

---

## 🤝 Brauchen Sie Hilfe?

Senden Sie eine E-Mail an **contact@callapro.ai** und wir helfen Ihnen weiter. Viel Spaß beim Chatten! 🎉
