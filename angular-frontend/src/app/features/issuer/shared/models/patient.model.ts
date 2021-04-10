export interface Patient {
  id?: 0;
  userId: string; // GUID
  hpdid: string;
  firstName: string;
  lastName: string;
  givenNames: string;
  preferredFirstName: string;
  preferredMiddleName: string;
  preferredLastName: string;
  dateOfBirth: string;
  email: string;
  phone: string;
}