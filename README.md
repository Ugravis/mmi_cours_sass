[![sass](https://skillicons.dev/icons?i=sass)](https://skillicons.dev)
# SASS / SCSS

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

## Generic functions

- `@if` / `@else`
- `@for` / `@each` / `@while`
- `@function`

## Unique functions

- `lighten($color, $amount)` : éclaircit une couleur selon un %. 
- `darken($color, $amount)` : assombrit une couleur selon un %. 
- `%placeholder` : simple placeholder. 
- `@mixin($arg1, $arg2)` : sorte de placeholder avec args (fonctionne aussi sans les args, mais moins opti). 

> Chaque appel de `@mixin` crée une copie. Alors que le `%placeholder` est juste une référence. 

```css
// %placeholder

%button-1 {
   color: blue;
   margin: 10px;
   border-radius: 8px;
}

div {
   @extend %button-1;
}
```
```css
// mixin()

@minin buton-1(color, margin: 10px, radius: 8px) {
   color: {color};
   margin: {margin};
   @if (radius) {
      border-radius: {radius};
   }
} 

div {
   @include button-1(red);
}
```

## Several SCSS files

**/scss** folder : `/layout.scss` (général / variables), `/page.scss` (custom), `/style.scss`.  
```css
// style.scss

@use 'layout.scss';
@use '_page.scss';

// ...
```

## Notes

**Tp noté** : unqmt le dernier. 

## Project tree

```
dev_front_integration_code
├─ .DS_Store
├─ example
│  ├─ css
│  │  ├─ style.css
│  │  └─ style.css.map
│  ├─ index.html
│  └─ scss
│     ├─ _home.scss
│     ├─ _layout.scss
│     └─ style.scss
├─ tp_1_basics
└─ tp_2_functions

```

## Ressources

[/cours](https://cours.univ-reims.fr/course/view.php?id=291)