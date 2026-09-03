# Mémo — publier un site de cours

Vaut pour les trois sites de la saison : **phil27**, **hlp27**, **dgemc27**.

## Publier : quatre commandes

```bash
npm run build          # 1. vérifier que le site se construit
git status             # 2. regarder ce qui va partir
git add -A             # 3. tout prendre
git commit -m "Publie la leçon 03 (justice)"
git push               # 4. envoyer — le site est en ligne 1 à 2 min après
```

**Le `push` suffit.** GitHub Actions construit le site et le met en ligne tout seul. Il n'y a rien d'autre à lancer.

## Avant de pousser : quatre vérifications

0. **Regarder `git status`.** `git add -A` prend tout ce qui a changé, à l'instant où vous le lancez. Les dossiers lourds (`.venv/`, `node_modules/`, `build/`) sont ignorés, il n'y a donc rien à craindre de ce côté — mais si une publication est en cours depuis le coffre, vous commiteriez un état à moitié écrit. Un coup d'œil suffit à l'éviter.
1. **`npm run build` passe.** Un lien mort fait échouer la construction, et le site reste alors sur sa version précédente.
2. **Les PDF et les diaporamas sont dans le commit.** C'est le piège le plus fréquent : une page qui embarque un PDF non commité s'affiche parfaitement en local et reste **vide en ligne**. Vérifier `static/pdf/` et `static/slides/`.
3. **Rien de personnel.** Ces dépôts sont **publics** : pas de corrigé réservé, pas de nom d'élève, pas de document sous droits qu'on ne veut pas diffuser.
4. **Le message dit ce qui devient visible.** « Publie la leçon 02 (temps) » se retrouve dans six mois ; « up » ne dit rien.

## À ne pas faire

**`npm run deploy`** — la commande existe, mais elle pousse un site construit sur votre machine directement sur `gh-pages`, en court-circuitant GitHub Actions. Le résultat peut différer de ce que la CI aurait produit, et l'écraser. Le `git push` suffit, toujours.

**`npm install @docusaurus/core@latest`** — les versions sont **épinglées exprès** (`3.10.2`, sans `^`). Les monter casse la construction, et jamais au bon moment. Une montée de version se prépare, elle ne s'improvise pas la veille d'un cours.

**`rm -rf package-lock.json`** — ce fichier est ce qui garantit que la CI installe exactement les mêmes versions que vous. Le supprimer les laisse repartir vers les dernières publiées, avec les mêmes conséquences que ci-dessus. Supprimer `node_modules/` seul est en revanche sans danger.

**`npm install --force`** — passe outre les incompatibilités au lieu de les régler. Elles reviennent plus tard, et moins clairement.

## Travailler en local

```bash
npm install       # à la première ouverture du dépôt seulement
npm run start     # aperçu sur http://localhost:3000, se recharge à chaque sauvegarde
npm run build     # construction réelle : c'est elle qui détecte les liens morts
```

`npm run start` est indulgent, `npm run build` ne l'est pas. Un lien cassé ne se voit souvent qu'à la construction.

## Suivre le déploiement

```bash
gh run watch              # suit le déploiement en cours
gh run list --limit 5     # les derniers
gh run view --log-failed  # en cas d'échec
```

**Deux workflows s'enchaînent** : `Deploy to GitHub Pages` construit, puis `pages-build-deployment` met en ligne. Tant que le second tourne, les pages répondent 404 — c'est normal, ce n'est pas un échec. Attendre la fin des deux avant de conclure.

## Quand quelque chose ne va pas

```bash
npm run build            # les erreurs de liens y sont détaillées
npm run clear            # vide le cache Docusaurus
rm -rf node_modules && npm install   # sans toucher au package-lock.json
```

## Codespaces

Utile depuis une machine sans l'environnement installé — un poste du lycée, une tablette. Depuis GitHub : **Code › Codespaces › Create codespace**. Le dépôt s'ouvre dans VS Code en ligne, `npm install` se lance seul si `.devcontainer/devcontainer.json` existe, et le port 3000 est exposé automatiquement.

Le compte GitHub Education donne 180 heures par mois — trois fois l'usage courant. L'arrêt automatique se fait après 30 minutes d'inactivité.

Pour une correction d'une ligne, **github.dev** suffit et ne consomme aucune heure : appuyer sur `.` dans le dépôt sur GitHub.

Les commandes de publication sont **les mêmes** que ci-dessus.

## Adresses

| Site | En ligne | Saison précédente, archivée |
|---|---|---|
| phil27 | philo.profauda.fr | phil26.profauda.fr |
| dgemc27 | dgemc.profauda.fr | dgemc26.profauda.fr |
| hlp27 | *bascule à venir* — hlp27.profauda.fr | hlp.profauda.fr, encore servi par hlp25 |
