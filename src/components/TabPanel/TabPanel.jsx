import React from 'react';
//styles
import "./TabPanel.css";
import Button from '../Button/Button';

const morningTimings = ["08:00", "08:30", "09:00", "09:30", "10:00"];
const afternoonTimings = ["13:00", "13:30", "14:00", "14:30", "15:00"];
const eveningTimings = ["18:00", "18:30", "19:00", "19:30", "20:00"];

const SlotSession = props => {
  const { type, timings, suffix, slotClick, slotDate, dateTime } = props;

  const displayButtons = () => {
    return timings.map(item => {
      let buttonColor = "blueButton-outlined";
      if (dateTime.time === item && slotDate === dateTime.date) {
        buttonColor = "blueButton-filled";
      }

      return (
        <Button
          key={item}
          clickFuntion={() => slotClick(slotDate, item)}
          text={`${item} ${suffix}`}
          buttonClass={`smallButton ${buttonColor}`}
        />
      );
    });
  };

  return (
    <div className='slotSession'>
      <p>{type}</p> {/* Label using <p> tag as per requirement */}
      <span className='timeButtonsArray'>{displayButtons()}</span>
    </div>
  );
};

const TabPanel = props => {
  const { children, value, index, customClass, slotClick, slotDate, dateTime, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
      className={`TabPanel ${customClass}`}
    >
      {value === index && (
        <>
          {/* <p>Today</p> Optional if you want to show "Today" as a heading */}
          <SlotSession
            dateTime={dateTime}
            slotDate={slotDate}
            slotClick={slotClick}
            type="Morning"
            timings={morningTimings}
            suffix="AM"
          />
          <span className='slotDivider'></span>

          <SlotSession
            dateTime={dateTime}
            slotDate={slotDate}
            slotClick={slotClick}
            type="Afternoon"
            timings={afternoonTimings}
            suffix="PM"
          />
          <span className='slotDivider'></span>

          <SlotSession
            dateTime={dateTime}
            slotDate={slotDate}
            slotClick={slotClick}
            type="Evening"
            timings={eveningTimings}
            suffix="PM"
          />
        </>
      )}
    </div>
  );
};

export default TabPanel;
