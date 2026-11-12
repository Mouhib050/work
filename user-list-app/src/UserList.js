import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserList.css";

const API_URL = "https://jsonplaceholder.typicode.com/users";

function UserList() {
  // État qui contient la liste des utilisateurs
  const [listOfUser, setListOfUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Appel à l'API une seule fois, après le premier rendu
  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setListOfUser(response.data);
      })
      .catch(() => {
        setError("Impossible de charger les utilisateurs. Vérifiez votre connexion et rechargez la page.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="status">Chargement des utilisateurs…</p>;
  if (error) return <p className="status status-error">{error}</p>;

  return (
    <main className="page">
      <header className="page-header">
        <h1>Utilisateurs</h1>
        <p className="count">{listOfUser.length} personnes</p>
      </header>

      <ul className="users">
        {listOfUser.map((user) => (
          <li className="user" key={user.id}>
            <span className="initials" aria-hidden="true">
              {user.name
                .split(" ")
                .filter((w) => !w.endsWith("."))
                .map((w) => w[0])
                .slice(0, 2)
                .join("")}
            </span>

            <div className="identity">
              <h2>{user.name}</h2>
              <p className="muted">@{user.username}</p>
            </div>

            <dl className="details">
              <div>
                <dt>E-mail</dt>
                <dd>
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </dd>
              </div>
              <div>
                <dt>Téléphone</dt>
                <dd>{user.phone}</dd>
              </div>
              <div>
                <dt>Ville</dt>
                <dd>{user.address.city}</dd>
              </div>
              <div>
                <dt>Entreprise</dt>
                <dd>{user.company.name}</dd>
              </div>
              <div>
                <dt>Site web</dt>
                <dd>
                  <a href={`https://${user.website}`} target="_blank" rel="noreferrer">
                    {user.website}
                  </a>
                </dd>
              </div>
            </dl>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default UserList;
