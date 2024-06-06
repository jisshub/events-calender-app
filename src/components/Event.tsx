import React from 'react';
import { Dayjs } from 'dayjs';
import styles from '../styles/Events.module.scss';

interface Event {
  date: Dayjs;
  description: string;
}

interface EventsProps {
  selectedDate: Dayjs;
  events: Event[];
}

const Events: React.FC<EventsProps> = ({ selectedDate, events }) => {
  const filteredEvents = events.filter(event =>
    event.date.isSame(selectedDate, 'month')
  );

  return (
    <div className={styles.eventsContainer}>
      {filteredEvents.map((event, index) => (
        <div key={index} className={styles.eventItem}>
          <h4>{event.date.format('MMMM D, YYYY')}</h4>
          <p>{event.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Events;
