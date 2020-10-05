import { parseISO, format } from 'date-fns';

export default function formatDate(date: Date): string {
  const dateString = String(date);
  const parse = parseISO(dateString);

  const formattedDate = format(parse, 'dd/MM/yyyy');
  return formattedDate;
}
