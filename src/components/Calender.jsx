import React, { useState, useEffect } from "react";
import { gapi } from "gapi-script";

const SCHEDULING_SCOPES = "https://www.googleapis.com/auth/calendar.events";
const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
const API_KEY = import.meta.env.VITE_API_KEY;

const CalendarScheduler = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [eventData, setEventData] = useState({
    summary: "",
    location: "",
    description: "",
    start: "",
    end: "",
  });

  useEffect(() => {
    const start = () => {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        scope: SCHEDULING_SCOPES,
      }).then(() => {
        const authInstance = gapi.auth2.getAuthInstance();
        setIsSignedIn(authInstance.isSignedIn.get());
        authInstance.isSignedIn.listen(setIsSignedIn);
      });
    };
    gapi.load("client:auth2", start);
  }, []);

  const handleAuthClick = () => {
    gapi.auth2.getAuthInstance().signIn();
  };

  const handleSignoutClick = () => {
    gapi.auth2.getAuthInstance().signOut();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleScheduleClick = (e) => {
    e.preventDefault();
    const event = {
      summary: eventData.summary,
      location: eventData.location,
      description: eventData.description,
      start: {
        dateTime: eventData.start,
        timeZone: "America/Los_Angeles",
      },
      end: {
        dateTime: eventData.end,
        timeZone: "America/Los_Angeles",
      },
      attendees: [{ email: "correo@ejemplo.com" }],
      reminders: {
        useDefault: false,
        overrides: [
          { method: "email", minutes: 24 * 60 },
          { method: "popup", minutes: 10 },
        ],
      },
    };

    gapi.client.calendar.events.insert({
      calendarId: "primary",
      resource: event,
    }).execute(event => {
      console.log("Event created: ", event.htmlLink);
    });
  };

  return (
    <div>
      {!isSignedIn ? (
        <button onClick={handleAuthClick}>Sign in with Google</button>
      ) : (
        <>
          <button onClick={handleSignoutClick}>Sign out</button>
          <form onSubmit={handleScheduleClick}>
            <label>
              Event Summary:
              <input type="text" name="summary" value={eventData.summary} onChange={handleInputChange} required />
            </label>
            <label>
              Location:
              <input type="text" name="location" value={eventData.location} onChange={handleInputChange} required />
            </label>
            <label>
              Description:
              <input type="text" name="description" value={eventData.description} onChange={handleInputChange} required />
            </label>
            <label>
              Start Date and Time:
              <input type="datetime-local" name="start" value={eventData.start} onChange={handleInputChange} required />
            </label>
            <label>
              End Date and Time:
              <input type="datetime-local" name="end" value={eventData.end} onChange={handleInputChange} required />
            </label>
            <button type="submit">Schedule Event</button>
          </form>
        </>
      )}
    </div>
  );
};

export default CalendarScheduler;
