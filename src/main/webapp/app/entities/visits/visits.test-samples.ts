import dayjs from 'dayjs/esm';

import { IVisits, NewVisits } from './visits.model';

export const sampleWithRequiredData: IVisits = {
  id: 35290,
  visitdate: dayjs('2023-01-31T14:18'),
  description: 'Personal Berkshire state',
};

export const sampleWithPartialData: IVisits = {
  id: 83531,
  visitdate: dayjs('2023-01-31T19:49'),
  description: 'Assurance',
};

export const sampleWithFullData: IVisits = {
  id: 49530,
  visitdate: dayjs('2023-01-31T21:38'),
  description: 'Avon Kids',
};

export const sampleWithNewData: NewVisits = {
  visitdate: dayjs('2023-02-01T08:32'),
  description: 'GB',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
