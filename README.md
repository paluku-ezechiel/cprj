# CPRJ Website

A responsive static website for CPRJ (Cadre de Paix pour la Réconciliation et la Justice), presenting the organization, services, gallery, and contact information.

## 📂 Project Structure

```
cprj/
├── index.html                # Accueil
├── about.html                # À propos + Principes
├── services.html             # Nos services (cartes + coordonnées)
├── contact.html              # Formulaire et coordonnées
├── gallery.html              # Galerie d'images
├── keeper.html               # Legacy gallery page (optionnel)
├── static/
│   ├── css/
│   │   ├── style.css         # Styles globaux
│   │   ├── responsive.css    # Styles responsive
│   │   └── font-face.css     # Fonts locales
│   ├── img/                  # Images
│   │   ├── services/         # Images des services
│   │   └── ...               # Logos, bannières, etc.
│   ├── js/
│   │   ├── main.js           # JS principal (menu, animations)
│   │   ├── gallery.js        # Pagination/Lightbox
│   │   └── countDown.js      # (si utilisé)
│   └── plugin/               # Librairies (Bootstrap, FontAwesome, etc.)
└── README.md
```

If you want, I can auto-apply this into `README.md` now.

## 🚀 Getting Started

### Prérequis
- Un navigateur moderne (Chrome, Firefox, Edge, Safari)
- Optionnel: un serveur local (Live Server VSCode, `python -m http.server`, etc.)

### Lancement en local
- Méthode 1: Ouvrir `index.html` dans votre navigateur (double-clic).
- Méthode 2: Servir en local (recommandé pour chemins relatifs et plugins):
  - Avec Python:
    ```
    cd cprj
    python -m http.server 8000
    ```
    Ouvrir: `http://localhost:8000/`
  - Avec VSCode: clic droit > “Open with Live Server”.

## 🧭 Pages et Navigation

- Accueil (`index.html`): présentation rapide de l’organisation.
- À propos (`about.html`): historique, valeurs, et Nos Principes.
- Services (`services.html`): cartes de services avec visuels et descriptifs, plus un bloc de coordonnées par service.
- Galerie (`gallery.html`): galerie d’images avec pagination/Lightbox.
- Contact (`contact.html`): formulaire, carte, adresses et téléphones.

Le menu est cohérent sur toutes les pages et le pied de page contient les liens utiles et les coordonnées.

## 🖼️ Images des services

Les cartes utilisent des images sous `static/img/services/`. Assurez-vous que les fichiers existent (ou remplacez-les) :

- `service_programme.jpg`
- `service_finance.jpg`
- `service_RH.jpg`
- `services_suivi_evaluation.png`
- `services_droits_humain.png`
- `services_autonomisation.jpg`
- `services_communication.jpg`
- `services_gouvernance.jpg`
- `services_enfants.jpg`
- `services_santeMentale.jpg`
- `services_conflit.jpg`
- `services_genres.jpg`

Astuce: gardez une taille cohérente (ex: 1200x800) pour un rendu uniforme.

## 🎨 Styles et Responsive

- Styles globaux: `static/css/style.css`
- Responsive: `static/css/responsive.css`
- La page Services utilise des cartes (Bootstrap + styles personnalisés).
- Des overrides garantissent la lisibilité du texte des sections services.

## 🧩 Plugins

Inclus dans `static/plugin/`:
- Bootstrap (CSS/JS)
- Font Awesome
- Simple Lightbox (galerie)
- jQuery (si nécessaire pour certains effets)

Les liens sont déjà référencés dans les pages HTML.

## ✍️ Contenu clé

- Les “Nos Principes” sont dans `about.html` (section `principes`).
- Tous les services et leurs descriptions/coordonnées sont centralisés dans `services.html`.

## 🔧 Maintenance

- Ajouter un service: éditez `services.html` et ajoutez une carte dans la grille + une entrée dans le bloc de coordonnées si nécessaire.
- Mettre à jour le menu/pied de page: modifiez dans chaque page (les blocs header/footer sont dupliqués).
- Images: placer les fichiers dans `static/img/services/` et mettre à jour les `src` dans `services.html`.

## 📦 Déploiement

Comme c’est un site statique, vous pouvez déployer via:
- GitHub Pages
- Netlify / Vercel (glisser-déposer du dossier)
- Hébergement classique (Apache/Nginx): uploadez tout le dossier `cprj/`.

## ✅ Qualité et Accessibilité

- Titres hiérarchisés (h1, h2, h3…)
- Navigation clavier/lecteurs d’écran (attributs alt sur images)
- Contraste lisible et responsive mobile

## 🧾 Licence

Propriété de CPRJ. Tous droits réservés, sauf mention contraire.

## 👥 Auteurs

- CPRJ
- Développement: EzSemBl
