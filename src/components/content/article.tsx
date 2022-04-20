import React from "react";
import styles from "./content.module.css";

//ax.get("https://midaiganes.irw.ee/api/list/66db6ed7");
//   const response = ax.get("https://midaiganes.irw.ee/api/list/66db6ed7");
//   console.log(response);
/* let data: any;
fetch("https://midaiganes.irw.ee/api/list/66db6ed7")
  .then((response) => response.json())
  .then((d) => {
    if (d.id) {
      data = d;
    }
  });
 */
class Article extends React.Component<{}> {
  render() {
    return (
      <div>
        <h1> pealkiri </h1>
        <h2> Autori nimi</h2>
        <div className={styles.intro}>
          <p>
            Mattis leo at aliquam lorem malesuada dictumst viverra, est blandit
            condimentum curabitur posuere mollis, nam consequat nulla aliquet
            ornare quisque. Enim hac facilisi est ut maximus erat nibh, nullam
            blandit lacus consequat nascetur auctor pulvinar magnis, mattis
            ipsum vitae parturient facilisis sem. Ultrices quisque duis diam
            aenean facilisis platea erat lacus, taciti litora commodo libero
            quam blandit orci feugiat, elit rhoncus nisl fringilla tristique
            aptent urna. Eu ultrices enim conubia dis penatibus aliquet
            himenaeos porta erat et ex consequat, sollicitudin venenatis est at
            efficitur eget justo habitasse magna vivamus ad, vulputate cubilia
            ac mi per leo nulla consectetur facilisis iaculis ridiculus.
            Imperdiet porttitor et suspendisse mauris mollis leo est aenean
            magnis, metus justo euismod integer rutrum orci litora lobortis
            iaculis fringilla, tellus ipsum facilisi volutpat dignissim pulvinar
            mus at. Aliquet laoreet dis posuere ad quam efficitur torquent,
            magnis porttitor augue dolor magna libero, dapibus placerat lectus
            mus maecenas eu.
          </p>
        </div>
        <img
          src="http://midaiganes.irw.ee/api/imgs/medium/60645b09.jpg"
          alt="article"
          title="article image title"
        />
        <div className="image__title">article image title</div>
        <p>
          Phasellus consequat convallis arcu tempor penatibus lobortis sagittis,
          posuere duis litora maecenas quam ut dis hac, lacus erat commodo eget
          varius semper. Laoreet condimentum augue finibus malesuada feugiat
          suspendisse, per auctor hac metus erat efficitur consectetur, ac
          gravida blandit sagittis porttitor. Litora hac penatibus primis
          parturient cursus posuere donec, eros ultricies fermentum convallis
          risus dis curae est, dictumst feugiat accumsan pulvinar hendrerit
          fames. Convallis malesuada faucibus sagittis class torquent magna
          eros, hendrerit porta nascetur adipiscing tempus integer placerat
          dictum, diam mattis pretium tellus euismod efficitur.
        </p>
        <p>
          Lacinia nostra eleifend curae ultrices duis maximus dolor suscipit,
          nascetur fermentum nunc convallis fringilla pellentesque vestibulum
          etiam litora, class condimentum penatibus dictumst curabitur odio
          blandit. Convallis praesent mattis himenaeos diam urna, neque
          fermentum nascetur orci vitae, mi tristique sociosqu venenatis.
          Integer dis justo etiam sit convallis ridiculus placerat, cras porta
          rhoncus lobortis libero iaculis augue maximus, faucibus sed nisl
          montes mauris posuere. Eu etiam cras mus maecenas sagittis habitasse
          cubilia arcu volutpat, potenti nulla natoque sodales placerat
          malesuada curae interdum torquent egestas, consequat iaculis ridiculus
          integer massa velit nostra congue. Ex diam tellus nam orci at mattis
          hac tempus quam lacus mi pretium, facilisi mauris ad nulla habitasse
          litora viverra leo penatibus ultrices id congue, blandit fringilla sit
          mollis per dui finibus eget sociosqu purus cursus. Cursus porta mollis
          dapibus torquent inceptos id magnis suscipit condimentum dolor,
          conubia vehicula luctus sed arcu quis quam ornare ullamcorper
          maecenas, duis magna ex rhoncus nostra nulla faucibus penatibus fames.
        </p>
        <p>
          Nibh blandit scelerisque praesent finibus consectetur quam eleifend,
          himenaeos arcu purus imperdiet habitasse dictumst ante, hac pretium
          faucibus proin elementum sed. Tristique sollicitudin sed elementum
          mollis tempor iaculis, sagittis cursus litora laoreet fusce et, amet
          suspendisse dis purus neque. Placerat hac amet elit tempor nascetur
          mattis iaculis ridiculus laoreet, egestas pulvinar metus luctus
          interdum habitasse sagittis habitant nibh condimentum, leo in
          dignissim et fusce commodo blandit urna. Adipiscing diam lacinia
          congue nec egestas quisque justo mollis cursus, nam ligula lacus
          praesent dis vehicula morbi erat interdum, donec primis massa a
          scelerisque curabitur ad mattis.
        </p>
        <p>
          Varius rhoncus a suspendisse adipiscing leo maecenas pellentesque
          malesuada, mollis maximus laoreet ligula porta est ullamcorper,
          fermentum gravida dictum libero cras conubia aptent. Justo netus
          mollis mattis pulvinar mauris mi, curabitur eleifend urna nullam
          inceptos fermentum sem, gravida sodales elit platea ridiculus.
          Ullamcorper sem varius nisl purus habitasse primis commodo cras,
          potenti efficitur natoque maecenas tristique elementum blandit integer
          nulla, suspendisse consequat proin magna metus ex praesent. Dignissim
          eros odio et nullam quam arcu facilisis tempor nostra ridiculus
          quisque fringilla leo ipsum, a risus euismod dui ultricies erat aptent
          magna sociosqu accumsan vitae pellentesque adipiscing. Purus id litora
          dui accumsan arcu lorem dictum pretium ac condimentum fermentum,
          tempor platea donec laoreet diam aptent duis ipsum lectus per
          porttitor sociosqu, etiam vivamus suscipit euismod penatibus cubilia
          eu taciti venenatis iaculis. Fames adipiscing quam potenti volutpat
          dictum a mollis porta hendrerit morbi gravida augue id, ipsum massa
          sit pulvinar nulla luctus egestas velit fusce mi tortor. Purus nec
          sodales dis ac proin tempor conubia, semper sem dictum hac velit augue
          quisque, mattis quam libero nulla nisl dignissim. Euismod tempor
          cubilia cras ridiculus adipiscing dolor facilisi, suspendisse dictum
          eu enim curabitur sem fringilla, duis quis pellentesque pulvinar
          potenti egestas.
        </p>
      </div>
    );
  }
}

export default Article;
