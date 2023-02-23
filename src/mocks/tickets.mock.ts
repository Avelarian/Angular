import { Ticket } from "../models/ticket";

const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: "SI4 in Madrid",
    description: "",
    date: dateToday,
    studentId: 1,
    major: "SI",
    archived: false,
  },
  {
    title: "SI5 in Paris",
    description: "Description du voyage",
    date: dateToday,
    studentId: 2,
    major: "SI",
    archived: false,
  },
  {
    title: "GE3 in Barcelone",
    description: "Gestion d'entreprise",
    date: dateToday,
    studentId: 3,
    major: "GE",
    archived: true,
  },
];
