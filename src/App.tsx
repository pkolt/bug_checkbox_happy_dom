import { useState } from 'react';
import './App.css';

const App = () => {
  const [coffee, setCoffee] = useState(false);
  const [tea, setTea] = useState(false);
  return (
    <div id="app">
      <form>
        <fieldset>
          <legend>Menu</legend>
          <p className="field">
            <input
              type="checkbox"
              name="coffee"
              id="id_coffee"
              onChange={() => setCoffee((state) => !state)}
              checked={coffee}
              data-testid="coffee"
            />
            <label htmlFor="id_coffee">Coffee</label>
          </p>
          <p className="field">
            <input
              type="checkbox"
              name="tea"
              id="id_tea"
              onChange={() => setTea((state) => !state)}
              checked={tea}
              data-testid="tea"
            />
            <label htmlFor="id_tea">Tea</label>
          </p>
        </fieldset>
      </form>

      <p>
        {coffee && (
          <>
            Selected Coffee
            <br />
          </>
        )}
        {tea && (
          <>
            Selected Tea
            <br />
          </>
        )}
      </p>
    </div>
  );
};

export default App;
