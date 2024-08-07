import Link from "next/link";
const Resume = () => {
  return (
    <div className="section resume">
      <div className="content">
        <div className="cols">
          <div className="col col-md">
            <div className="title">
              <div className="title_inner">Experiences</div>
            </div>
            <div className="resume-items">
              <div className="resume-item active">
                <div className="date">2021 - 2024</div>
                <div className="name">Technicien Logiciel & Hardware (bornes intéractives)</div>
                <p>
                  IPM France, expert en bornes tactiles, m'apporte un nouveau challenge côté hardware.
                </p><br/>
                <Link
                  href="/entreprises/ipm-fr"
                  className="more"
                >
                  En savoir plus
                </Link>               
              </div>
              <div className="resume-item">
                <div className="date">2019 - 2021</div>
                <div className="name">Technicien Logiciel (de caisse, comptabilité, stock) NIV N2+</div>
                <p>
                  Passionné par le logiciel, je rejoins ProGmag pour ma première expérience professionnelle.
                </p><br/>
                <Link
                  href="/entreprises/progmag"
                  className="more"
                >
                  En savoir plus
                </Link>
              </div>
            </div>
          </div>
          <div className="col col-md">
            <div className="title">
              <div className="title_inner">Diplômes</div>
            </div>
            <div className="resume-items">
              <div className="resume-item">
                <div className="date">2017</div>
                <div className="name">BTS - Solutions Logicielles et Applications Métiers</div>
                <p>
                  Acquisition d'un portefeuille de compétences, de l'analyse du cahier des charges, définition et gestion des ressources, conception de la solution applicative et rédaction des documentations techniques.
                </p>
              </div>
              <div className="resume-item">
                <div className="date">2014</div>
                <div className="name">BACCALAUREAT - Systèmes d'Information de Gestion</div>
                <p>
                  Acquisition d'une base de compétences dans le domaine de l'informatique en entreprise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Resume;
