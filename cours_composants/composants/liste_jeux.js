const liste_jeux = {
    template: `
        <h2 class="mt-5">{{ titre }}</h2>
        <slot name="presentation"></slot>
        <section class="d-flex mt-4">
            <div class="card" style="width: 18rem;" v-for="jeu in listjeux">
                <div class="card-body">
                    <h5 class="card-title"><slot name="jeunom" :nomjeu="jeu.nom"></slot></h5>
                    <p class="card-text">{{ jeu.description }}</p>
                    <button class="btn btn-primary btn-sm" @click="$emit('checkdispo')">Checker disponibilité</button>
                </div>
            </div>
        </section>
        <slot name="phrase_finale"></slot>
    `,
    props:['titre', 'listjeux']
}