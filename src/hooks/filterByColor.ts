import { SelectEvent } from "../types/Event.types";

export const filterByColor = (
  e: SelectEvent,
  setFilter: React.SetStateAction<string[] | any>
) => {
  setFilter(e.target.value);
};
