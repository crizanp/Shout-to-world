import classes from './main-header-background.module.css';

export default function MainHeaderBackground() {
  return (
    <div className={classes['header-background']}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <defs>
          <linearGradient id="newGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: '#ff7e5f', stopOpacity: '1' }}
            />
            <stop
              offset="100%"
              style={{ stopColor: '#feb47b', stopOpacity: '1' }}
            />
          </linearGradient>
        </defs>
        <path
          fill="url(#newGradient)"
          d="M0,320L48,293.3C96,267,192,213,288,176C384,139,480,117,576,128C672,139,768,181,864,186.7C960,192,1056,160,1152,160C1248,160,1344,192,1392,208L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
        <path
          fillOpacity="0.5"
          fill="url(#newGradient)"
          d="M0,160L48,144C96,128,192,96,288,96C384,96,480,128,576,149.3C672,171,768,181,864,165.3C960,149,1056,107,1152,85.3C1248,64,1344,64,1392,64L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
}
