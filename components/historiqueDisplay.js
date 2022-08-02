
app.component('historique-display',{
    template: 
    `
    <div class="calc-historique">
        <ul>
            <li v-for="tab in tableau">
                <button v-on:click="recupererResultat(tab.resultat)">{{ tab.calcul }} = {{tab.resultat}}</button>
            </li>
        </ul> 
    </div>`,
 

    data() {
        return {
            
        }
    },
    methods: {
        /**
         * On récupere du parent le tableau pour l'historique de calcul
         * @param {Int} resultat 
         */
        recupererResultat(resultat){
            this.$emit('recupresultat',resultat)
        },
    },
    props: {
        /**
         * Variable pour affichage de l'historique
         */
        tableau: {
            type: Array
        },
    },
    computed: {
    
    },
})