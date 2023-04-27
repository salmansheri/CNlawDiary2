import Layout from "@/components/Layout";
import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { getCases } from "@/libs/Cases";
import { useSession } from "next-auth/react";
import Login from "../auth/login";

const CalendarPage = ({ courtCases }) => {
  const { data: session } = useSession();

  const [events, setEvents] = useState([]);

  useEffect(() => {
    const Events = courtCases.map((cases) => ({
      title: cases.casename,
      date: cases.date,
    }));

    setEvents(Events);
  }, [courtCases]);

  

  if (!session?.user?.email) {
    return <Login />;
  }

  return (
    <Layout>
      <div className="mt-[100px]">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={events}
        />
      </div>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const cases = await getCases();

  return {
    props: {
      courtCases: cases,
    },
  };
};

export default CalendarPage;
