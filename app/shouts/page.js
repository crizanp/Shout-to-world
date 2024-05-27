import { Suspense } from 'react';
import Link from 'next/link';

import classes from './page.module.css';
import MealsGrid from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';

export const metadata = {
  title: 'Explore Everyone Views - Shout To Nepal',
  description: 'Explore everyone views and share your daily activities, thoughts, and ideas with the world. Express your view to the world with Shout To Nepal',
};

async function Meals() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Express Your View To {' '}
          <span className={classes.highlight}>The World</span>
        </h1>
        <p>
          Share your daily activities, thoughts, and ideas with the world.{' '}
        </p>
        <p className={classes.cta}>
          <Link href="/shouts/share">Share Exciting Happens</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Fetching contents...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
