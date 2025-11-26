'use client';

import dynamic from 'next/dynamic';
import '@excalidraw/excalidraw/index.css';
import { useState } from 'react';

const Excalidraw = dynamic(
  async () => (await import('@excalidraw/excalidraw')).Excalidraw,
  { ssr: false },
);

export default function ExcalidrawCanvas() {
  const [initialState] = useState({
    elements: [],
    appState: {
      viewBackgroundColor: '#ffffff',
    },
  });

  const saveToServer = (elements: any, appState: any) => {
    // Handle saving to server
    console.log('Saving to server:', elements, appState);
  };

  return (
    <div style={{ height: "71vh", }}>
      <Excalidraw initialData={initialState} onChange={saveToServer} />
    </div>
  );
} 