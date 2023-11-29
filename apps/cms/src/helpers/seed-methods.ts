export const methodPermissions = ['api::method.method.findOne', 'api::method.method.find'];

export const seedMethods = async () => {
  return Promise.all([
    strapi.db.query('api::method.method').createMany({
      data: [
        {
          Title: 'RegelSpraak',
          Description: `In ALEF worden specificaties opgesteld die bestaan uit regels, datadefinities en testgevallen. De regels zijn opgesteld in de taal RegelSpraak. Dit is een gecontroleerde Nederlandse taal die zowel voor juristen als voor computersystemen goed leesbaar is.`,
          Icon: 'ruler',
          Href: 'https://regels.overheid.nl/docs/methods/ALEF',
          publishedAt: new Date().toISOString(),
          locale: 'en',
        },
        {
          Title: 'FLINT',
          Description: `Flint is onderdeel van een protocol voor het uitvoeren van normatieve taken (Calculemus) en een expliciete taal om interpretaties van juridische bronnen vast te leggen (Flint).`,
          Icon: 'scale',
          Href: 'https://regels.overheid.nl/docs/methods/FLINT',
          publishedAt: new Date().toISOString(),
          locale: 'en',
        },
        {
          Title: 'RuleSpeak®',
          Description: `RuleSpeak® is een verzameling richtlijnen voor het formuleren van bedrijfsregels op een bedrijfsvriendelijke en precieze manier. Het is geen taal of syntax maar eerder een verzameling voorschriften voor Nederlandstalige formulering van bedrijfsregels gebaseerd op ervaringen in de praktijk.`,
          Icon: 'right-angle-ruler',
          Href: 'https://regels.overheid.nl/docs/methods/RULESPEAK',
          publishedAt: new Date().toISOString(),
          locale: 'en',
        },
        {
          Title: 'Avola',
          Description: `Avola is een platform waarmee regels binnen een organisatie op een gestandaardiseerde wijze vertaald kunnen worden naar een toetsbaar beslismodel. Er wordt gebruik gemaakt van de bekende DMN-standaard om logica van regels vast te leggen in beslistabellen die het model vormen.`,
          Icon: 'arch',
          Href: 'https://regels.overheid.nl/docs/methods/AVOLA',
          publishedAt: new Date().toISOString(),
          locale: 'en',
        },
      ],
    }),
  ]);
};
