import { useState } from 'react';
import './App.css';

enum Bake {
  Pizza = 'pizza',
  Burger = 'burger',
  Cookie = 'cookie',
}

const App = () => {
  const [coffee, setCoffee] = useState(false);
  const [tea, setTea] = useState(false);
  const [bake, setBake] = useState<Bake>();
  const handleChangeBake = (event: React.ChangeEvent<HTMLInputElement>) => setBake(event.target.value as Bake);
  return (
    <div id="app">
      <form>
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
        <hr />
        <p className="field">
          <input
            type="radio"
            name="bake"
            value={Bake.Pizza}
            id="id_pizza"
            onChange={handleChangeBake}
            checked={bake === Bake.Pizza}
            data-testid="pizza"
          />
          <label htmlFor="id_pizza">Pizza</label>
        </p>
        <p className="field">
          <input
            type="radio"
            name="bake"
            value={Bake.Burger}
            id="id_burger"
            onChange={handleChangeBake}
            checked={bake === Bake.Burger}
            data-testid="burger"
          />
          <label htmlFor="id_burger">Burger</label>
        </p>
        <p className="field">
          <input
            type="radio"
            name="bake"
            value={Bake.Cookie}
            id="id_cookie"
            onChange={handleChangeBake}
            checked={bake === Bake.Cookie}
            data-testid="cookie"
          />
          <label htmlFor="id_cookie">Cookie</label>
        </p>
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
      {bake && <p>Selected {bake}</p>}
    </div>
  );
};

export default App;
