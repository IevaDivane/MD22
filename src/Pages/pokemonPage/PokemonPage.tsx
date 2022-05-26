import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetPokemonByNameQuery } from '../../store/api/pokemonApi';
import { imgBaseUrl } from '../pokemonsPage/PokemonsPage';
import styles from './PokemonPage.module.scss';

const PokemonPage = () => {
  const { name } = useParams();
  // @ts-ignore
  const { data, isLoading, isSuccess } = useGetPokemonByNameQuery(name);

  return (
    <div>
      <img
        className={styles.bg}
        src="https://wallpaperaccess.com/full/2935466.jpg"
        alt=""
      />
      {isLoading && <h1>Loading...</h1>}

      {data && isSuccess && (
        <div className={styles.content}>
          <img src={`${imgBaseUrl}${data.id}.png`} alt="" />
          <h2>{name}</h2>
          <p>
            Weight:
            {data.weight}
          </p>
          <p>
            Height:
            {data.height}
          </p>
          <h4>Moves</h4>
          <div className={styles.btnMoves}>
            {data && data.moves.map(({ move }) => (
              <div>
                <button
                  className={styles.btn}
                >
                  {move.name}
                </button>
              </div>

            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default PokemonPage;
