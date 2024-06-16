/* eslint-disable react/no-unescaped-entities */
import './App.scss';

function App() {
  return (
    <main className="feuilleAventure">
      <section className="left-fiche">
        <h1>Feuille d'aventure</h1>
        <section className="liste-discipline">
          <h3 className="discipline-kai">Disciplines Kai</h3>
          <div className="list-discipline">
            <input
              type="text"
              className="discipline"
              placeholder="discipline"
            />
            <input
              type="text"
              className="discipline"
              placeholder="discipline"
            />
            <input
              type="text"
              className="discipline"
              placeholder="discipline"
            />
            <input
              type="text"
              className="discipline"
              placeholder="discipline"
            />
            <input
              type="text"
              className="discipline"
              placeholder="discipline"
            />
          </div>
          <h3 className="discipline-kai">Disciplines Kai Suppementaires</h3>
          <div className="list-discipline">
            <input
              type="text"
              className="discipline"
              placeholder="discipline"
            />
            <input
              type="text"
              className="discipline"
              placeholder="discipline"
            />
            <input
              type="text"
              className="discipline"
              placeholder="discipline"
            />
            <input
              type="text"
              className="discipline"
              placeholder="discipline"
            />
          </div>
        </section>

        <section className="my-bag">
          <h3>Sac à Dos</h3>
          <div className="my-bag-top">
            <h4>
              Objets <span>8 objets max, repas compris</span>
            </h4>
            <div className="my-bag-objets">
              <input
                type="text"
                placeholder="objet"
                className="my-bag-objets-list"
              />
              <input
                type="text"
                placeholder="objet"
                className="my-bag-objets-list"
              />
              <input
                type="text"
                placeholder="objet"
                className="my-bag-objets-list"
              />
              <input
                type="text"
                placeholder="objet"
                className="my-bag-objets-list"
              />
              <input
                type="text"
                placeholder="objet"
                className="my-bag-objets-list"
              />
              <input
                type="text"
                placeholder="objet"
                className="my-bag-objets-list"
              />
              <input
                type="text"
                placeholder="objet"
                className="my-bag-objets-list"
              />
              <input
                type="text"
                placeholder="objet"
                className="my-bag-objets-list"
              />
            </div>
          </div>
          <div className="my-bag-bottom">
            <div className="my-bag-bottom-eat">
              <h4>Repas</h4>
              <input type="number" className="nb-item input-number" />
            </div>
            <div className="my-bag-bottom-gold">
              <h4>
                Bourse <span>(50 pièces d'or max)</span>
              </h4>
              <input type="number" className="nb-item input-number" />
            </div>
          </div>
        </section>
      </section>

      <section className="middle-fiche">
        <h2>Loup Solitaire</h2>
        <article className="caracteristique">
          <article className="habilete">
            <h3>Habileté</h3>
            <input type="number" className="caract-valeur input-number" />
          </article>
          <article className="endurance">
            <h3>
              Endurance <span>0 = Mort</span>
            </h3>

            <input type="number" className="caract-valeur input-number" />
            <p>Ne peut jamais dépasser votre total de départ</p>
          </article>
        </article>
        <section className="ennemi">
          <div className="ennemi-stat">
            <h5>Habileté ennemi</h5>
            <div className="ennemi-stat-ligne">
              <input type="number" className="ennemi-stat-input input-number" />
              <input type="number" className="ennemi-stat-input input-number" />
              <input type="number" className="ennemi-stat-input input-number" />
              <input type="number" className="ennemi-stat-input input-number" />
            </div>
          </div>
          <div className="ennemi-stat">
            <h5>Quotien d'attaque</h5>
            <div className="ennemi-stat-ligne">
              <input type="number" className="ennemi-stat-input input-number" />
              <input type="number" className="ennemi-stat-input input-number" />
              <input type="number" className="ennemi-stat-input input-number" />
              <input type="number" className="ennemi-stat-input input-number" />
            </div>
          </div>
          <div className="ennemi-stat">
            <h5>endurance ennemi</h5>
            <div className="ennemi-stat-ligne">
              <input type="number" className="ennemi-stat-input input-number" />
              <input type="number" className="ennemi-stat-input input-number" />
              <input type="number" className="ennemi-stat-input input-number" />
              <input type="number" className="ennemi-stat-input input-number" />
            </div>
          </div>
        </section>
        <article className="fight">
          <button className="fight" type="button">
            ATTAQUE
          </button>
        </article>
      </section>

      <section className="right-fiche">
        <h2>Liste des armes et des objets spéciaux</h2>
        <section className="my-arms">
          <h3>
            Armes <span>(2armes maximum)</span>
          </h3>
          <input type="text" placeholder="épée" className="my-arms-item" />
          <input type="text" placeholder="hache" className="my-arms-item" />
          <p className="my-arms-info">
            Combat livré avec une arme et la maitrise de cette arme: +2pts
            Habileté
          </p>
          <p className="my-arms-info">Combat livré sans arme: -4pts Habileté</p>
        </section>
        <div className="special-item">
          <h4 className="special-item-title">Objets Spéciaux</h4>
          <div className="special-item-list">
            <div className="special-item-name">
              <h5>Nom de l'objet</h5>
              <div className="special-item-list-description">
                <input
                  type="text"
                  placeholder="objet"
                  className="special-item-list-input"
                />
                <input
                  type="text"
                  placeholder="objet"
                  className="special-item-list-input"
                />
                <input
                  type="text"
                  placeholder="objet"
                  className="special-item-list-input"
                />
                <input
                  type="text"
                  placeholder="objet"
                  className="special-item-list-input"
                />
              </div>
            </div>
            <div className="special-item-list-description">
              <h5>Effets</h5>
              <input
                type="text"
                placeholder="effet"
                className="special-item-list-input"
              />
              <input
                type="text"
                placeholder="effet"
                className="special-item-list-input"
              />
              <input
                type="text"
                placeholder="effet"
                className="special-item-list-input"
              />
              <input
                type="text"
                placeholder="effet"
                className="special-item-list-input"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
