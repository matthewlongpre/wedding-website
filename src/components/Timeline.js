import React from 'react';
import './../styles/timeline.css';

const timelineData = [
  {
    id: 1,
    time: '4:00 pm',
    title: 'Ceremony',
    description: 'Watch us make it official'
  },
  {
    id: 2,
    time: '4:30 pm',
    title: 'Cocktails',
    description: 'Enjoy drinks & snacks'
  },
  {
    id: 3,
    time: '6:45 pm',
    title: 'Dinner & speeches'
  },
  {
    id: 4,
    time: '8:45 pm',
    title: 'Dancing'
  },
  {
    id: 5,
    time: '11:45 pm',
    title: 'Last call'
  },
  {
    id: 6,
    time: '12:00 am',
    title: 'Good night',
    description: 'See you at the after party...?'
  }
];

const TimelineItem = (props) => {

  const { time, title, description, id } = props.data;

  return (
    <li key={id}>
      <div className="time">
        <span className="text-uppercase text-italic text-right">{time}</span>
      </div>
      <div className="timeline-item">
        <h3 className="mt-0">{title}</h3>
        {description && <p>{description}</p>}
      </div>
    </li>
  );
}


const Timeline = () => {

  const timelineItems = timelineData.map(item => <TimelineItem key={item.id} data={item} />)

  return (
    <div className="timeline">

      <h2 className="font-blithe m-0 f-3 text-center">Timeline</h2>

      <ul className="pl-90 overflow-x-hidden">
        {timelineItems}
      </ul>
    </div>
  );
}

export default Timeline;