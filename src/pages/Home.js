import { PHOTOS } from '../data/Photos'

function Home() {
  return (
    <div>
      <h1>Bienvenue sur la page d’accueil</h1>
      <ul>
        {PHOTOS.map((photo) => (
          <li key={photo.id}>
            <img src={photo.url} alt={photo.name} width="200" loading="lazy"/>
            <p>{photo.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Home;
