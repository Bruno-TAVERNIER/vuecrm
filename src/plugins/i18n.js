/* internationalization => i18n */
//plugin qui doit être déclaré et injecté dans main.js 

export default {
  //fonction d'installation du plugin 
  install: (app, options) => {
    // injection d'une fonction globale $translate
    app.config.globalProperties.$translate = (key) => {
      return key.split('.').reduce((o, i) => {
        if(o) return o[i]
      }, options.default)
    };

    //une fonction juste pour le fun
    app.config.globalProperties.$maFonction = () => "Hello les devs front!";

    //une fonction pour retourner le double d'un nombre
    app.config.globalProperties.$double = (nb) => (nb * 2);

    //fonction totallHT & totalTTC

  }
}