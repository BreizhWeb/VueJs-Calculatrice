app.component('calcul-display',{
    template: `
        <div class="calc-total">
            <div class="calc-ligne">
                <button class="button_info" v-on:click="supprAllNumber()">Clear</button>
                <button class="button_info" v-on:click="supprNumber()">Del</button>
                <button class="button_operateur" v-on:click="updateOperateur('/')">/</button>
            </div>

            <div class="calc-ligne"> 
                <button class="button" v-on:click="ajoutCalcul('7')">7</button>
                <button class="button" v-on:click="ajoutCalcul('8')">8</button>
                <button class="button" v-on:click="ajoutCalcul('9')">9</button>
                <button class="button_operateur" v-on:click="updateOperateur('*')">x</button>
            </div>

            <div class="calc-ligne">
                <button class="button" v-on:click="ajoutCalcul('4')">4</button>
                <button class="button" v-on:click="ajoutCalcul('5')">5</button>
                <button class="button" v-on:click="ajoutCalcul('6')">6</button>
                <button class="button_operateur" v-on:click="updateOperateur('-')">-</button>
            </div>

            <div class="calc-ligne">
                <button class="button" v-on:click="ajoutCalcul('1')">1</button>
                <button class="button" v-on:click="ajoutCalcul('2')">2</button>
                <button class="button" v-on:click="ajoutCalcul('3')">3</button>
                <button class="button_operateur" v-on:click="updateOperateur('+')">+</button>
            </div>

            <div class="calc-ligne">
                <button class="button" v-on:click="ajoutCalcul('0')">0</button>
                <button class="button" v-on:click="updateVirgule('.')">.</button>
                <button class="button_egual" v-on:click="updateResultat()">=</button>
            </div>
        </div>`,
    data() {
        return {
        }
    },
    methods: {
        /**
         * Méthode d'envoi du chiffre saisie 
         * @param {String} num - Le chiffre selectionné
         */
        ajoutCalcul(num){
            this.$emit('calculaffiche', num)
        },
        /**
         * Méthode d'envoi de la virgule
         * @param {String} virgule - La virgule
         */
        updateVirgule(virgule){
            this.$emit('addvirgule', virgule)
        },
        /**
         * Méthode d'envoi de l'opérateur
         * @param {String} operateur - L'opérateur choisit
         */
        updateOperateur(operateur){
            this.$emit('addoperateur', operateur)
        },
        /**
         * Méthode pour faire le calcul et obtenir le resultat
         */
        updateResultat(){
            this.$emit('addegal')
        },
        /**
         * Méthode pour demander la suppression du dernier caractère  
         */
        supprNumber(){
            this.$emit('supprnumber')
        },
        /**
         * Méthode pour demander la suppression de toutes les données
         */
        supprAllNumber(){
            this.$emit('supprallnumber')
        }
    }
})