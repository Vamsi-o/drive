import type { Metadata } from 'next';
import TeamPage from '@/components/pages/TeamPage';

export const metadata: Metadata = {
  title: 'Team',
  description: 'Meet the team behind eDrive JetCar.',
};

export default function Page() {
  return <TeamPage />;
}
