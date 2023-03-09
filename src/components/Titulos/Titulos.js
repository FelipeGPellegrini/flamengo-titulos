import "./Titulos.css";

const Titulos = () => {
  return (
    <div id="containerTitulos">
      <div className="subTitulos">
        <h2>Internacionais</h2>
        <div className="infoSubTitulos">
          <ul>
            <li>Mundial interclubes - 1981</li>
            <li>Taça Libertadores da América - 1981, 2019 e 2022</li>
            <li>Copa Mercosul - 1999</li>
            <li>Copa Ouro Sul-americana - 1996 (invicto)</li>
            <li>Recopa Sul-Americana - 2020</li>
          </ul>
          <img
            width={200}
            height={200}
            src="./assets/mundial.jpg"
            alt="Mundial"
          />
        </div>
      </div>
      <div className="subTitulos">
        <h2>NACIONAIS E INTERESTADUAIS</h2>
        <div className="infoSubTitulos">
          <ul>
            <li>
              Campeonato Brasileiro (8 títulos) - 1980, 1982, 1983, 1987, 1992,
              2009, 2019 e 2020
            </li>
            <li>Copa do Brasil - 1990 (invicto), 2006, 2013 e 2022</li>
            <li>Supercopa do Brasil - 2020 e 2021</li>
            <li>Torneio Rio-São Paulo - 1940 e 1961</li>
            <li>Copa dos Campeões Regionais - 2001</li>
            <li>Copa dos Campeões Mundiais - 1997 (invicto)</li>
            <li>Taça dos Campeões Estaduais - 1956</li>
            <li>Taça dos Campeões Brasileiros - 1992</li>
            <li>Torneio do Povo - 1972</li>
          </ul>
          <img
            width={200}
            height={200}
            src="./assets/brasileiro.jpg"
            alt="Mundial"
          />
        </div>
      </div>
    </div>
  );
};

export default Titulos;
