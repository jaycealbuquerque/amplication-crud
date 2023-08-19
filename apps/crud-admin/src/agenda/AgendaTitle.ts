import { Agenda as TAgenda } from "../api/agenda/Agenda";

export const AGENDA_TITLE_FIELD = "nome";

export const AgendaTitle = (record: TAgenda): string => {
  return record.nome || String(record.id);
};
