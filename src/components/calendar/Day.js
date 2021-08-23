/*import React from 'react';
import { Calendar, Badge } from 'antd';



const getReminders = (day) => {
    const listData = [
        { type: 'success', content: 'Reminder!!!' },
    ];
    return listData || [];
}

// CHILD COMPONENT

const Day = (day) => {
    const reminders = getReminders(day);
    //console.log(reminders)
    return (
        <ul className="events">
            {reminders.map(item => (
                <li key={item.content}>
                    <Badge status={item.type} text={item.content} />
                </li>
            ))}
        </ul>
    );
}
export default Day*/

import React from 'react';
import { Badge } from 'antd';
import moment from 'moment';



const remindersOnDay = (reminders, currentDay) => {
    const isDay = (item, currentDay) => {
        const date = moment(item.date);
        if (date.format('DD') === currentDay.format('DD')
            && (date.format('MM') === currentDay.format('MM'))
            && (date.format('YYYY') === currentDay.format('YYYY'))
        ) {
            return true;
        }

        return false;
    }
    console.log('es día: '+isDay)
    const remindersOnDay = reminders.filter(item => isDay(item, currentDay));
    console.log('recordatorio: ')
    console.log(remindersOnDay)
    return remindersOnDay;
}

const Day = ({reminders,currentDay}) => {

    const RemindersOnDay = remindersOnDay(reminders, currentDay);

    return (
        <ul className="events">
            {RemindersOnDay.map(item => (
                <li key={item.reminder}>
                    <Badge color={item.color} text={item.reminder} />
                </li>
            ))}
        </ul>
    );
}
export default Day
