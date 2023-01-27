const liste_legumes = {
    template: `
        <div v-for="legume in legumes" class="mt-2">
             Des {{ legume.nom }}, j'en possède {{ legume.quantite }}
             <button type="button" class="btn btn-sm btn-primary" @click="legume.quantite++">En acheter un</button>
        </div>
    `,
    props:['legumes']
}