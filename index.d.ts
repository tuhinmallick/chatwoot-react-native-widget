declare module '@callapro/react-native-widget' {
  import React from 'react';

  export interface CallAProWidgetProps {
    websiteToken: string;
    locale?: string;
    baseUrl: string;
    colorScheme?: 'light' | 'auto' | 'dark';
    closeModal: () => void;
    isModalVisible: boolean;
    user?: {
      identifier?: string;
      name?: string;
      avatar_url?: string;
      email?: string;
      identifier_hash?: string;
    };
    // This can actually be any object
    customAttributes?: Record<string, unknown>;
  }

  class CallAProWidget extends React.Component<CallAProWidgetProps, any> {}
  export default CallAProWidget;
}
