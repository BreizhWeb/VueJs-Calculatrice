const app = Vue.createApp({
    data() {
        return {
            resultat: 0,
            calcul: '0',
            num1: 0,
            operateur: '',
            num2: 0,
            calculString: '',
            etat_virgule: false,
            etat_operateur: false,
            etat_sauvegarde: false,
            tableau: [],
        }
    },
    methods: {
        /**
         * Méthode pour ajouter un chiffre au calcul
         * @param {String} n - Le chiffre entré par l'utilisateur
         */
        lireCalcul(n){
            // Permet l'ajout du caractere saisi et limite le nombre de chiffre à 21
            if(this.calcul != '0' && this.etat_sauvegarde == false && this.calcul.length < 21){
                this.calcul = this.calcul + n
            }
            // Permet de recommencer à 0 si l'on ne veux pas continuer avec le resultat
            else if(this.etat_sauvegarde == true){
                this.etat_sauvegarde = false
                this.calcul = n
            }
            // Permet de limiter l'ajout de caractère a 21
            else if(this.calcul.length < 21){
                this.calcul = n
            }
        },
        /**
         * Méthode pour ajouter la virgule au nombre et qui modifie l'etat de la virgule pour pouvoir en ajouter une seul par nombre
         * @param {String} v - La virgule a ajouté au calcul
         */
        addVirgule(v){
            // Verifie si la virgule n'est pas deja entré et l'ajoute si celle-ci ne l'est pas
            if(this.etat_virgule == false){
                this.calcul += v
                this.etat_virgule = true
            }
        },
        /**
         * Méthode pour ajouter l'opérateur au calcul et qui le change si il est déjà entré
         * @param {String} o - L'opérateur choisit par l'utilisateur
         */
        addOperateur(o){
            // Ajout de l'opérateur au calcul et sauvegarde du premier nombre entré
            if(this.etat_operateur == false){
                this.num1 = parseFloat(this.calcul)
                this.operateur = o
                this.calcul = '0'
                this.etat_virgule = false
                this.etat_operateur = true
            }
            // Permet la modification de l'opérateur si aucun chiffre n'a été entrer
            else if(this.etat_operateur == true && this.calcul == '0'){
                this.operateur = o
            }
        },
        /**
         * Méthode qui calcul le resultat et vide les variables
         */
        lireResultat(){
            if(this.etat_operateur != false){
                // Empeche la division par 0
                if(!((this.operateur == '/') && (this.calcul == '0'))){
                    this.num2 = parseFloat(this.calcul)
                    // Réalisation du calcul
                    switch(this.operateur) {
                        case '+':
                            this.resultat = this.num1 + this.num2
                            break
                        case '-':
                            this.resultat = this.num1 - this.num2
                            break
                        case '*':
                            this.resultat = this.num1 * this.num2
                            break
                        case '/':
                            this.resultat = this.num1 / this.num2
                            break
                        default:
                            this.resultat = 0
                            break
                    }
                    this.calculString = this.num1+ " " + this.operateur + " " + this.num2
                    // Donne le resultat du calcul à la varible pour l'affichage de celui-ci
                    this.calcul = this.resultat.toString()
                    // Remise à l'etat de base des variables
                    this.num1 = 0
                    this.num2 = 0
                    this.operateur = ''
                    this.etat_operateur = false
                    this.etat_virgule = false
                    this.etat_sauvegarde = true
                    // Sauvergarde du calcul et du résultat dans un tableau pour l'historique des calculs
                    this.tableau.push({calcul: this.calculString, resultat: this.resultat})
                }
            }
        },
        /**
         * Méthode qui supprime de dernier caractère et qui modifie les etats si une virgule ou un opérateur est supprimé
         */
        supprNum(){
            // Remet l'etat de la virgule a false pour pouvoir en remettre une autre si on l'a supprime
            if(!(this.calcul % 1 != 0) && this.etat_virgule == true){
                this.etat_virgule = false
            }
            // Remet l'etat de l'operateur a false pour remettre un nouvelle opérateur et remet le numéro 1 dans la variable modifiable
            if(this.etat_operateur == true &&  this.calcul == '0'){
                this.operateur = ''
                this.etat_operateur = false
                this.calcul = this.num1+'0'
                this.num1 = 0
            }
            // Supprime le dernier caractère affiché
            this.calcul = this.calcul.slice(0,-1)
            // Mise en place d'un zero quand le calcul n'a plus de donnée
            if(this.calcul == ''){
                this.calcul = '0'
            }
        },
        /**
         * Méthode pour supprimer toutes les données et remettre à 0 les variables
         */
        supprAllNum(){
            this.resultat = 0
            this.calcul = '0'
            this.num1 = 0
            this.operateur = ''
            this.num2 = 0
            this.etat_virgule = false
            this.etat_operateur = false
            this.tableau = []
        },
        /**
         * Méthode pour reprendre le calcul à partir du résultat de l'historique que l'on vient sélectionner
         * @param {Int} res 
         */
        reprendreRes(res){
            this.resultat = 0
            this.num1 = 0
            this.operateur = ''
            this.num2 = 0
            if(res % 1 == 0){
                this.etat_virgule = false
            } else {
                this.etat_virgule = true
            }
            this.etat_operateur = false
            this.etat_sauvegarde = true
            this.calcul = res.toString()
        }
    }
})