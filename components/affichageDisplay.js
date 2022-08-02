app.component('affichage-display',{
    template: `
    <div class=calc-affichage>
        <p>{{ ecritNum1 }} {{ operateur }} {{ calcul }}</p>
    </div>`,
    data() {
        return {
            
        }
    },
    computed: {
        /**
         * Modifie l'affichage du premier numéro
         * @returns Retourne l'affichage du premier numéro
         */
        ecritNum1(){
            temp = ''
            if(this.num1 != 0 || this.operateur != ''){
                temp = this.num1
            }
            return temp
        }
    },
    props: {
        /**
         * Variable pour l'affichage du calcul
         */
        num1: {
            type: Number
        },
        calcul: {
            type: String
        },
        operateur: {
            type: String
        },
        etat_operateur: {
            type: Boolean
        }
    }
})