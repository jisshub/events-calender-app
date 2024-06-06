import React, { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import Calendar from './components/Calender';
import Events from './components/Event';
import './styles/App.module.scss';

interface Event {
  date: Dayjs;
  description: string;
}

const generateDummyEvents = (): Event[] => {
  const descriptions = [
    'Go to gym',
    'Grocery shopping',
    'Team meeting',
    'Work on project',
    'Family dinner',
    'Read a book',
    'Watch a movie',
    'Clean the house',
    'Visit friends',
    'Go for a run',
    'Attend a workshop',
    'Doctor appointment',
    'Yoga class',
    'Play tennis',
    'Volunteer work',
    'Car maintenance',
    'Plan a trip',
    'Cook a new recipe',
    'Attend a concert',
    'Go hiking',
    'Visit a museum',
    'Relax at home',
    'Study for exam',
    'Gardening',
    'Attend a party',
    'Write a blog post',
    'Photography session',
    'Laundry day',
    'Bake a cake',
    'Visit grandparents'
  ];

  const events: Event[] = [];
  for (let i = 1; i <= 30; i++) {
    events.push({
      date: dayjs(`2024-06-${String(i).padStart(2, '0')}`),
      description: descriptions[i % descriptions.length],
    });
  }
  return events;
};

const events: Event[] = generateDummyEvents();

const App: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());

  return (
    <div className="appContainer">
      <div className="calendar">
        <Calendar selectedDate={selectedDate} onDateChange={setSelectedDate} />
      </div>
      <div className="events">
        <Events selectedDate={selectedDate} events={events} />
      </div>
    </div>
  );
};

export default App;
