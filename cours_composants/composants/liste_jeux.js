const liste_jeux = {
    template: `
        <h2 class="mt-5">{{ titre }}</h2>
        <section class="d-flex mt-4">
            <div class="card" style="width: 18rem;" v-for="jeu in listjeux">
                <div class="card-body">
                    <h5 class="card-title">{{ jeu.nom }}</h5>
                    <p class="card-text">{{ jeu.description }}</p>
                    <button class="btn btn-primary btn-sm" @click="$emit('checkdispo')">Checker disponibilité</button>
                </div>
            </div>
        </section>
    `,
    props:['titre', 'listjeux']
}