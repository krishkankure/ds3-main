/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

type EventItem = {
  title: string;
  date: string;
  type: string;
  description: string;
};
export function useCalendarEvents() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const calendarId = import.meta.env.VITE_CALENDAR_ID;
  const apiKey = import.meta.env.VITE_CALENDAR_API_KEY;

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}`
        );
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        const now = new Date();
        // console.log(data);
        
        const mappedEvents = (data.items || [])
          .filter((item: any) => {
            const startDate = new Date(item.start?.dateTime || item.start?.date);
            return startDate > now;
          })
          .sort((a: any, b: any) => {
            const dateA = new Date(a.start?.dateTime || a.start?.date).getTime();
            const dateB = new Date(b.start?.dateTime || b.start?.date).getTime();
            return dateA - dateB;
          })
          .map((item: any) => {
            const dateObj = new Date(item.start?.dateTime || item.start?.date);

            const formattedDate = dateObj.toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            });

            const formattedTime = dateObj.toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            });

            const rawUrl = item.attachments?.[0]?.fileUrl || null;

            const image =
              rawUrl?.includes("drive.google.com") && rawUrl.includes("id=")
                ? `https://drive.google.com/thumbnail?id=${new URL(rawUrl).searchParams.get(
                    "id"
                  )}&sz=s1000`
                : rawUrl;

            return {
              title: item.summary || "No Title",
              date: `${formattedDate} ${formattedTime}`,
              location: item.location || "No location",
              description: item.description || "No description",
              image,
            };
          });
        console.log(mappedEvents);

        setEvents(mappedEvents);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setTimeout(()=>{setLoading(false)},5000)
        
      }
    };

    fetchEvents();
  }, [calendarId, apiKey]);

  return { events, loading, error };
}
