import React from 'react';
import App from './App';
import { AccountProvider } from './context/AccountContext';
import { AudioProvider } from './context/AudioContext';
import { LanguageProvider } from './context/LanguageContext';
import { SceneProvider } from './context/SceneContext';
import { SoundProvider } from './context/SoundContext';
import { ViewProvider } from './context/ViewContext';
import './lib/localization/i18n';

export function CharacterCreator() {
  return (
    <AccountProvider>
      <LanguageProvider>
        <AudioProvider>
          <ViewProvider>
            <SceneProvider>
              <SoundProvider>
                <App />
              </SoundProvider>
            </SceneProvider>
          </ViewProvider>
        </AudioProvider>
      </LanguageProvider>
    </AccountProvider>
  );
}

export { SceneContext } from './context/SceneContext';
export { ViewContext, ViewMode, CameraMode } from './context/ViewContext';
export { AccountContext } from './context/AccountContext';
export { LanguageContext } from './context/LanguageContext';
export { SoundContext } from './context/SoundContext';
export { AudioContext } from './context/AudioContext';
