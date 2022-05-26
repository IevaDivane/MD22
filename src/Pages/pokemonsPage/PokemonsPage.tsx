import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetAllPokemonsQuery } from '../../store/api/pokemonApi';
import styles from './PokemonsPage.module.scss';

export const imgBaseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';

const PokemonsPage = () => {
  const { data, isLoading, isSuccess } = useGetAllPokemonsQuery();
  const navigate = useNavigate();
  console.log(data);

  return (
    <div className={styles.container}>
      <img
        className={styles.bg}
        src="https://wallpapercave.com/wp/wp2711084.jpg"
        alt=""
      />
      {isLoading && <h1>Loading...</h1>}
      {data && isSuccess && data.results.map(({ name, url }) => {
        const arr = url.split('/');
        const id = arr[arr.length - 2];
        return (
          <div key={Math.random()} className={styles.oneCard}>
            <img src={`${imgBaseUrl}${id}.png`} alt="" />
            <button
              className={styles.btn}
              onClick={() => navigate(`/pokemon/${name}`)}
            >
              {name}
            </button>
          </div>
        );
      }) }
    </div>
  );
};

export default PokemonsPage;
