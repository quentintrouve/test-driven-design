import { v4 as uuidv4 } from 'uuid';

interface StaminaSession {
  id: string;
  distance?: number; /* meters */
  duration?: number; /* seconds */
  speed?: number; /* meters/seconds */
  date: Date;
  comments: string;
}

interface IdGenerator {
  (): string,
}
interface DateGenerator {
  (): Date,
}

export function createStaminaSession(
  idgenerator: IdGenerator, 
  dategenerator: DateGenerator):StaminaSession {
  return {
    id: idgenerator(),
    date: dategenerator(),
    comments:"",
  }
}