import MainHeader from '@/components/main-header/main-header';
import './globals.css';

export const metadata = {
  title: 'Shout To Nepal - Share Your Daily Activities, Thoughts, and Ideas',
  description: 'Share your daily activities, thoughts, and ideas with the world. Express your view to the world with Shout To Nepal',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
