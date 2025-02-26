import { useState } from "react";
import classnames from "classnames";
import styles from "./Calendar.module.css";

const Calendar = () => {
  const [view, setView] = useState("daily"); // Track selected view
  const [selectedDay, setSelectedDay] = useState("Sun"); // Track selected day
 
  const [currentMonth, setCurrentMonth] = useState(2); // Example month (February)
  const [events, setEvents] = useState({
    23: [
      {
        name: "Meeting",
        time: "10:00 AM - 12:00 PM",
        start: 10,
        duration: 2,
      },
    ],
    24: [
      {
        name: "Project Deadline",
        time: "2:00 PM - 4:00 PM",
        start: 14,
        duration: 2,
      },
    ],
    25: [
      {
        name: "Yoga Class",
        time: "6:00 PM - 7:00 PM",
        start: 18,
        duration: 1,
      },
    ],
    26: [
      {
        name: "Team Outing",
        time: "1:00 PM - 5:00 PM",
        start: 13,
        duration: 4,
      },
    ],
    27: [
      {
        name: "Submit Report",
        time: "9:00 AM - 10:00 AM",
        start: 9,
        duration: 1,
      },
    ],
    28: [
      {
        name: "Weekend Trip Planning",
        time: "7:00 PM - 9:00 PM",
        start: 19,
        duration: 2,
      },
    ],
    29: [
      {
        name: "Movie Night",
        time: "8:00 PM - 10:00 PM",
        start: 20,
        duration: 2,
      },
    ],
  });

  const days = [
    { name: "Sun", date: 23 },
    { name: "Mon", date: 24 },
    { name: "Tue", date: 25 },
    { name: "Wed", date: 26 },
    { name: "Thu", date: 27 },
    { name: "Fri", date: 28 },
    { name: "Sat", date: 29 },
  ];

  const [weeklyTasks, setWeeklyTasks] = useState([
    { date: 23, startTime: 9, duration: 6, text: "Team Meeting" },
    { date: 25, startTime: 14, duration: 4, text: "Client Presentation" },
    { date: 28, startTime: 16, duration: 1, text: "Gym Workout" },
  ]);
  

  const times = Array.from({ length: 24 }, (_, i) => i); // 12 AM - 11 PM

  return (
    <section className={styles.Calendar}>
      <div className={styles.mContainer}>
        <div className={styles.row1Title}>
          <h1>Calendar</h1>
          <h3>+ New Event</h3>
        </div>

        <nav>
          <button onClick={() => setView("daily")}>Daily</button>
          <button onClick={() => setView("weekly")}>Weekly</button>
          <button onClick={() => setView("monthly")}>Monthly</button>
        </nav>

        {view === "daily" && (
          <>
            <div className={styles.headerRow}>
              {days.map((day) => (
                <div
                  key={day.name}
                  className={classnames(styles.dayHeader, {
                    [styles.active]: selectedDay === day.name,
                  })}
                  onClick={() => setSelectedDay(day.name)}
                >
                  {day.name}
                  <p>{day.date}</p>
                </div>
              ))}
            </div>

            <div className={styles.eventContainer}>
              <ul>
                {events[
                  days.find((day) => day.name === selectedDay)?.date
                ]?.length > 0 ? (
                  events[
                    days.find((day) => day.name === selectedDay)?.date
                  ].map((event, index) => (
                    <li key={index} className={styles.eventItem}>
                      <div className={styles.leftSide}>
                        <span className={styles.eventTime}>
                          {event.time}
                        </span>
                        <span className={styles.eventText}>
                          {event.name}
                        </span>
                      </div>
                      <div className={styles.rightSide}>⋮</div>
                    </li>
                  ))
                ) : (
                  <li className={styles.eventItem}>
                    <div className={styles.leftSide}>
                      <span className={styles.eventText}>
                        No events
                      </span>
                    </div>
                  </li>
                )}
              </ul>
            </div>
          </>
        )}
{view === "weekly" && (
  <div className={styles.wWeeklyView}>
    {/* Header Row with Days */}
    <div className={styles.wHeaderRow}>
      <div className={styles.wTimeColumn}>Time</div>
      {days.map((day) => (
        <div key={day.date} className={styles.wDayHeader}>
          {day.name} <p>{day.date}</p>
        </div>
      ))}
    </div>

    {/* Weekly Grid */}
    <div className={styles.wGrid}>
      {/* Time Column (First Column) */}
      <div className={styles.wTimeColumnWrapper}>
        {times.map((time, rowIndex) => (
          <div key={rowIndex} className={styles.wTimeCell}>
            {time === 0 ? "12 AM" : time < 12 ? `${time} AM` : time === 12 ? "12 PM" : `${time - 12} PM`}
          </div>
        ))}
      </div>

      {/* Grid Cells for Days */}
      {days.map((day) =>
        times.map((_, timeIndex) => {
        
          // Check for weekly tasks
          const task = weeklyTasks.find((task) => task.date === day.date && task.startTime === timeIndex);
          console.log(timeIndex, task ? task.startTime : "No Task Found");

          if (task) {
            return (
              <div
                key={`${day.date}-${timeIndex}`}
                className={classnames(styles.wTaskCell, styles.wMergedCell)}
                style={{ gridRow: `span ${task.duration}` }}
              >
                {task.text} <br />
                <small>{`${task.startTime}:00 - ${task.startTime + task.duration}:00`}</small>
              </div>
            );
          }

          return <div key={`${day.date}-${timeIndex}`} className={styles.wCell}></div>;
        })
      )}
    </div>
  </div>
)}

{view === "monthly" && (
  <div className={styles.mMonthlyView}>
    <div className={styles.mNavigation}>
      <h2>February 2025</h2>
      <div>
          <button onClick={() => setCurrentMonth((prev) => prev - 1)}>❮</button>
          <button onClick={() => setCurrentMonth((prev) => prev + 1)}>❯</button>
      </div>
    </div>
    <div className={styles.mGrid}>
      {/* Previous month's last days (Jan 25-31) */}
      {[...Array(7)].map((_, index) => (
        <div key={`prev-${index}`} className={`${styles.mDay} ${styles.prevMonth}`}>
          {25 + index}
        </div>
      ))}

      {/* Current month (Feb 1-28) */}
      {[...Array(28)].map((_, index) => (
        <div key={`current-${index}`} className={`${styles.mDay} ${styles.currentMonth}`}>
          {index + 1}
          {events[index + 1] && (
            <div className={styles.mEventIcons}>
              {events[index + 1].map((event, i) => (
                <span key={i}>🎵</span>
              ))}
            </div>
          )}
        </div>
      ))}

      {/* Next month's first days (Mar 1-5) */}
      {[...Array(5)].map((_, index) => (
        <div key={`next-${index}`} className={`${styles.mDay} ${styles.nextMonth}`}>
          {index + 1}
        </div>
      ))}
    </div>
  </div>
)}




      </div>
    </section>
  );
};

export default Calendar;
