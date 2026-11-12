# Liste des utilisateurs (React + axios)

Application React qui récupère la liste des utilisateurs depuis
https://jsonplaceholder.typicode.com/users avec axios.

## Lancer le projet

```bash
npm install
npm start
```

Puis ouvrir http://localhost:3000.

## Points clés

- `src/UserList.js` : `useState` pour l'état `listOfUser`, `useEffect` + `axios.get` pour charger les données, `listOfUser.map(...)` pour l'affichage.
- `src/UserList.css` : mise en forme.
