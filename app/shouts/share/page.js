'use client';

import { useFormState } from 'react-dom';

// import ImagePicker from '@/components/meals/image-picker';
import classes from './page.module.css';
import { shareMeal } from '@/lib/actions';
import MealsFormSubmit from '@/components/meals/meals-form-submit';

export default function ShareMealPage() {
  const [state, formAction] = useFormState(shareMeal, { message: null });

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share Your <span className={classes.highlight}>Inner Feeling To World</span>
        </h1>
        Disclaimer: Your shared content will be visible to everyone.
        <p>
          <small className={classes.small}> <i>
            1. Harresment, spam, and other inappropriate content will be removed and blocked.<br/>
            2. Your shared content will be visible to everyone.<br/>
            3. Shout To Nepal is not responsible for any shared content.<br/>
            4. Ones shared content cant be removed [ contact us for appeal ]<br/>
          </i></small>
        </p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">View in brief</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          {/* <ImagePicker label="Your image" name="image" /> */}
          {state.message && <p>{state.message}</p>}
          <p className={classes.actions}>
            <MealsFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}
