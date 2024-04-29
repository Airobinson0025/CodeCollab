'use client'
import "@stream-io/video-react-sdk/dist/css/styles.css";
import {
    StreamCall,
    StreamVideo,
    StreamVideoClient,
    StreamTheme,
    CallControls,
    SpeakerLayout,
  } from '@stream-io/video-react-sdk';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
  
  const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
  // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiY2x1enRhY2JsMDAwMHN5bWw2ZWFhMWV0OCJ9.0SrRXrF_UXzkiYzJWRMcMsmn1O5_K8BNLBRCjo9gROw';
  const tokenProvider = async () => {
    const response = await fetch('/api/stream');
    const data = await response.json();
    const token = data.token;
  // console.log(token);
    return token
  }

  export const CollaboratorVideo = ({ sessionId }) => {

    const session = useSession();
    const [client, setClient ] = useState(null)
    const [call, setCall ] = useState(null)

    useEffect(() => {
        if (!session.data) { 
            return;
        }
        const userId = session.data.user.id;
        const client = new StreamVideoClient({ 
          apiKey, 
          user: { id: userId }, 
          tokenProvider: tokenProvider, 
        });
        const call = client.call('default', sessionId);
        call.join({ create: true });
        setClient(client)
        setCall(call)

        return () => {
            call.leave();
            client.disconnectUser();
        }
    }, [session, sessionId ])


    return client && call && (
      <StreamVideo client={client}>
        <StreamTheme>
        <StreamCall call={call}>
            <SpeakerLayout />
            <CallControls />
        </StreamCall>
        </StreamTheme>
      </StreamVideo>
    );
  };