import React from 'react';
import styles from './App.module.css';
import logo from './logo.svg';

const RemoteModule1 = React.lazy(
  // @ts-ignore
  () => import('module1/App')
);

function App() {
  return (
    <div className={styles.conatiner}>
      <header className={styles.header}>
        <h1>APP</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className={styles.link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div style={{ border: '5px red solid', backgroundColor: '#ccc' }}>
        <React.Suspense fallback={<h1>Loading...</h1>}>
          <RemoteModule1 />
        </React.Suspense>
      </div>
    </div>
  );
}

export default App;
