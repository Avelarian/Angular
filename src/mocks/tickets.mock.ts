import { Ticket } from '../models/ticket';

const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: "SI4 in Madrid",
    description: "",
    date: dateToday,
    author: "Paul",
    major: "SI",
    archived: false,
  },
  {
    title: "SI5 in Paris",
    description: "Description du voyage",
    date: dateToday,
    author: "Anakin",
    major: "SI",
    archived: false,
  },
  {
    title: "GE3 in Barcelone",
    description: "Gestion d'entreprise",
    date: dateToday,
    author: "Homer",
    major: "GE",
    archived: true,
  },
];
