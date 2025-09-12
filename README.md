## Commands

- `npm i sass` -> installation. 
- `sass styles.scss styles.cs` -> file.css est le fichier qui se compilera automatiquement. 
- `sass --watch styles.scss styles.css` -> compil auto à chaque sauvegarde. 
- `sass --watch dossierSCSS:dossierCSS` -> compil auto à chaque sauvegarde (le même dossier est possible). 

> Quelque soit le nb de fichiers `scss`, il n'y aura tjr qu'un seul fichier CSS compilé. 

## Syntaxe

- `&` : référence au parent (&:hover). 
- `$` : utiliser les variable. 
- `@` : code logique (if, include, import, etc)

## Several SCSS files

/scss folder : `/layout.scss` (général / variables), `/page.scss` (custom), `/style.scss`.  
```css
// style.scss

@use 'layout.css';
@use 'page.css';

// ...
```

## Notes

**Tp noté** : unqmt le dernier. 

## Project tree

```
dev_front_et_integration_code
├─ .DS_Store
├─ css
│  ├─ style.css
│  └─ style.css.map
├─ index.html
└─ scss
   ├─ _home.scss
   ├─ _layout.scss
   └─ style.scss

```

## Ressources

[/cours](https://cours.univ-reims.fr/course/view.php?id=291)