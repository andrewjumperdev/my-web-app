import React, { useState, useEffect } from 'react';
import { gapi } from 'gapi-script';
import CalendarPicker from 'react-calendar';

const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
const SCOPES = "https://www.googleapis.com/auth/calendar.events";

const Calendar = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [selectedDateTime, setSelectedDateTime] = useState(null);
  const [eventCreated, setEventCreated] = useState(false);
  
  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      }).then(() => {
        const authInstance = gapi.auth2.getAuthInstance();
        if (authInstance) {
          setIsSignedIn(authInstance.isSignedIn.get());
          authInstance.isSignedIn.listen(setIsSignedIn);
          if (!authInstance.isSignedIn.get()) {
            authInstance.signIn();
          }
        } else {
          console.error('Auth instance not initialized');
        }
      }).catch(error => {
        console.error("Error initializing gapi client: ", error);
      });
    };

    gapi.load('client:auth2', initClient);
  }, []);

  const handleSignIn = () => {
    const authInstance = gapi.auth2.getAuthInstance();
    if (authInstance) {
      authInstance.signIn().then(() => {
        setIsSignedIn(true);
      }).catch(error => {
        console.error('Error signing in: ', error);
      });
    } else {
      console.error('Auth instance not initialized');
    }
  };

  const openGoogleCalendarPicker = () => {
    if (!isSignedIn) {
      console.error('User is not signed in.');
      return;
    }

    if (!selectedDateTime) {
      console.error('Please select both date and time.');
      return;
    }

    const startDateTime = new Date(selectedDateTime);
    const endDateTime = new Date(startDateTime);
    endDateTime.setHours(endDateTime.getHours() + 1); // Ajusta la hora de finalización

    const event = {
      'summary': 'Scheduled Consultation',
      'description': 'Scheduled Consultation',
      'start': {
        'dateTime': startDateTime.toISOString(),
        'timeZone': 'America/Los_Angeles'
      },
      'end': {
        'dateTime': endDateTime.toISOString(),
        'timeZone': 'America/Los_Angeles'
      },
    };

    gapi.client.calendar.events.insert({
      'calendarId': 'primary',
      'resource': event,
    }).then(response => {
      console.log('Event created: ', response);
      setEventCreated(true);
    }).catch(error => {
      console.error('Error creating event: ', error);
    });
  };

  const handleDateTimeChange = date => {
    setSelectedDateTime(date);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8">
          {!eventCreated ? (
            <>
              {isSignedIn ? (
                <>
                  <div className="mb-4">
                    <CalendarPicker
                      onChange={handleDateTimeChange}
                      value={selectedDateTime}
                      minDate={new Date()} 
                      calendarType="ISO 8601"
                    />
                  </div>
                  {selectedDateTime && (
                    <button className='btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder' onClick={openGoogleCalendarPicker}>
                      Schedule Meeting
                    </button>
                  )}
                </>
              ) : (
                <button className='btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder' onClick={handleSignIn}>
                  Sign in with Google
                </button>
              )}
            </>
          ) : (
            <div className="alert alert-success mt-4" role="alert">
              Meeting scheduled successfully!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
