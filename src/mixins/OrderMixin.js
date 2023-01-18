export default({
  data() {
    return {
      cpt: 0,
      urlApi: 'http://localhost:3000/orders/',
      order: {},
      orders: [] /*
        {
          tjmHt: 1200,
          nbJours: 100,
          tva: 20,
          state: 'CONFIRMED',
          typePresta: 'Formation',
          client: 'M2I',
          comment: 'Merci pour la commande',
          id: 1
        },
        {
          tjmHt: 1000,
          nbJours: 20,
          tva: 20,
          state: 'CANCELED',
          typePresta: 'Coaching',
          client: 'MI2',
          comment: 'Oups',
          id: 22
        },
        {
          tjmHt: 1300,
          nbJours: 10,
          tva: 20,
          state: 'OPTION',
          typePresta: 'Formation',
          client: 'MI6',
          comment: 'En attente de la commande',
          id: 33
        }
      ]*/
    }
  },
  created() {
    // localStorage.setItem(key, value) stocke la valeur value (texte) dans la clé key
    //localStorage.getitem(key) récupère la valeur de la clé key
    //localStorage.remove(key) supprime la valeur de key
    //localStorage.clear() supprime toutes les clés
    /*console.log('récupération du contenu dans le LocalStorage');
    if(localStorage.getItem('orders')) {
      // récupération des orders et transformation String -> JSON
      this.orders = JSON.parse(localStorage.getItem('orders'));
      // vrai si connexion internet console.log(navigator.onLine);
      // PWA: Progressive Web App 
    }*/
    // appel API GET liste orders
    // axios retourne directement du JSON 
    this.axios.get(this.urlApi)
    .then(response => {
      //console.log(response);
      this.orders = response.data;
    })
    .catch(err => { console.log(err)});
    return this.orders;
  },
  methods: {
    /* CRUD: Create, Read, Update, Delete */
    increment() {
      this.cpt++;
    },
    decrement() {
      this.cpt--;
    },
    /* suppression d'un order dans l'API */
    supp(id) {
      this.$http.delete(this.urlApi + id)
      .then(response => {
        //rechargement de la page
        this.$router.go();
      })
      .catch(err => {
        console.log(err);
      });
    },
    /* sauvegarde/mise à jour d'un order dans l'API */
    save() {
      console.log(this.order);
      //si order.id => mise à jour => axios.put(url/id, order)
      if(this.order.id){
        this.axios.put(this.urlApi + this.order.id, this.order)
        .then(response => {
          this.$router.push('/orders');
        })
        .catch(err => {
          console.log(err);
        });
      }
      //sinon création => axios.post(url, order)
      // on peut mettre this.$http au lieu de this.axios
      // plugin vue-resource => this.$http n'existe plus
      else {
        this.$http.post(this.urlApi, this.order)
        .then(response => {
            // redirection vers tableau orders
            this.$router.push('/orders');
        })
        .catch(err => {
          console.log(err);
        });
      }
    },
    chgSts(order) {
      /*console.log(id);
      console.log(sts);*/
      // ici on travaille directement sur le tableau original
      /*this.orders.forEach((order) => {
        if(order.id === id) order.state = sts;
      });*/
      //console.log(order);
      // axios.put(http://localhost:300/orders/21, nouvelObjetOrder)
      this.axios.put(this.urlApi + order.id, order)
      .catch(err => {
        console.log(err);
      })

      //console.log(this.orders);
      //this.save();
      // on crée un nouveau tableau qu'il faudra utiliser pour remplacer l'original 
      /*let nouveauTableau = this.orders.map((order) => {
        if(order.id === id) order.state = sts;
        return order;
      });
      console.log(nouveauTableau);*/
    },
    /*save() {
      // stockage dans le localStorage après transformation du JSON en String
      localStorage.setItem('orders', JSON.stringify(this.orders));
      localStorage.setItem('truc', 'muche');
    },*/
    recupOrder(id) {
      //console.log(id);
    //return élément dont id = ... 
    // attention le paramamètre vient d'une URL donc type String
    //return this.orders.find(order => order.id === parseInt(id));
    this.axios.get(this.urlApi + id)
    .then(response => {
      //console.log(response);
      this.order = response.data;
    })
    .catch(err => { 
      console.log(err);
    });
    return this.order;
    }
  }
});