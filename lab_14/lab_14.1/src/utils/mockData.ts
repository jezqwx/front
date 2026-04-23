import { Contact } from '../types';

const COLORS = ["#FF5733", "#33FF57", "#3357FF", "#F333FF", "#33FFF5"];

export const generateMockContacts = (count: number): Contact[] => {
  return Array.from({ length: count }, (_, index) => ({
    id: `contact-${index}_${Date.now()}`,
    firstName: `User`,
    lastName: `Last Name ${index + 1}`,
    email: `user${index + 1}@almau.edu.kz`,
    avatarColor: COLORS[index % COLORS.length]
  }));
}