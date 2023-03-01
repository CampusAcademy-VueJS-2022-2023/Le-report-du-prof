export default {

    methods: {
        dateToDDMMYYYY(dateToTransform) {
            // Créer un objet Date à partir de la chaîne de caractères
            const date = new Date(dateToTransform);

            // Extraire le jour, le mois et l'année de l'objet Date
            const day = date.getDate();
            const month = date.getMonth() + 1; // Les mois commencent à 0, donc ajouter 1
            const year = date.getFullYear();

            // Créer une nouvelle chaîne de caractères avec le format souhaité
            return `${day}/${month}/${year}`;
        }
    }
}