export default({
  data() {
    return {
      urlApi: 'http://localhost:3000/clients/',
      clients: [],
      client: {}
    }
  },
  // récupération des données à la création
  created() {
    this.$http.get(this.urlApi)
    .then(response => {
      this.clients = response.data;
    })
    .catch(err => {
      console.log(err);
    })
  },
  /* fonctions utiles (CREATE, READ, UPDATE, DELETE) */
  methods: {
    // récupération des infos d'un client (pour formulaire update)
    readClient(id) {
      this.$http.get(this.urlApi + id)
      .then(response => {
        this.client = response.data;
      })
      .catch(err => {
        console.log(err);
      });
      return this.client;
    },
    // changement de statut d'un client
    chgSts(client) {
      this.$http.put(this.urlApi + client.id, client)
      .catch(err => {
        console.log(err);
      });
    },
    /* sauvegarde / mise à jour d'un client */
    save(){
      //si id => mise à jour, sinon ajout
      if(this.client.id) {
        this.$http.put(this.urlApi + this.client.id, this.client)
        .then(response => {
          this.$router.push('/clients');
        })
        .catch(err => {
          console.log(err);
        });
      }
      else {
        this.$http.post(this.urlApi, this.client)
        .then(response => {
          this.$router.push('/clients');
        })
        .catch(err => {
          console.log(err);
        });
      }
    },
    /* suppression d'un client */
    supp(id) {
      this.$http.delete(this.urlApi + id)
      .then(response => {
        this.$router.go();
      })
      .catch(err => {
        console.log(err);
      });
    }
  }
});