import React, { useEffect } from 'react';
import { Calendar, } from 'antd';
import Month from './Month';
import Day from './Day';
import { connect } from 'react-redux';
import { READ_REMINDERS } from '../../redux/ActionTypes';




/*const DayToFn = (day) => {
    return (
        <Day currentDay={day}></Day>
    );
}*/




//const MyCalendar = (props) => {
 //   const onSelect = (e) => {
 //       alert(e)
 //   }
//    return (
 //       <Calendar
 //           dateCellRender={DayToFn}
   /*         monthCellRender={Month}
            onSelect={onSelect}
        />
    )
}*/

const MyCalendar = ({readReminders, reminderState}) => {

    const DayToFn = (day) => {
        return (
            <Day
                reminders={reminderState.reminders}
                currentDay={day}>
            </Day>
        );
    }

    const onSelect = (e) => {
        alert(e)
    }

    useEffect(()=>{
        readReminders()
    },[readReminders])

    return (
        <Calendar
            dateCellRender={DayToFn}
            monthCellRender={Month}
            onSelect={onSelect}
        />
    )
}

const mapStateToProps = ({ reminderState }) => {
    return {
        reminderState
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        readReminders: () => dispatch({ type: READ_REMINDERS }),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyCalendar);







