import React, { useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm.js";
import { TileList } from "../../components/tileList/TileList.js";

export const AppointmentsPage = (props) => {
  // state variables for appointments and callback function for adding new appointment
  const appointments = props.appointments;
  const contacts = props.contacts;
  const addAppointment = props.addAppointment;

  // local variables
  const [title, setTitle] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addAppointment(title, contact, date, time);

    setTitle("");
    setContact("");
    setDate("");
    setTime("");
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          title={title}
          setTitle={setTitle}
          contact={contact}
          setContact={setContact}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          handleSubmit={handleSubmit}
          contacts={contacts}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList objArr={appointments} />
      </section>
    </div>
  );
};
