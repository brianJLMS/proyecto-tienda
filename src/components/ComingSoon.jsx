import imgReloj from "../assets/img/exclusive.png";

const ComingSoon = () => {
  return (
    <div className="comsoon">
      <div className="container comsoon__container">
        <h3 className="comsoon__title">PROXIMAMENTE...</h3>
        <div className="comsoon__rel-desc">
          <img src={imgReloj} alt="Reloj" className="comsoon__png-clock" />

          <div className="comsoon__desc-container">
            <h4 className="comsoon__desc-title">Descripción</h4>
            <ul className="comsoon__desc-list">
              <li>Funcionaes de seguimiento de actividad</li>
              <li>Contador de pasos</li>
              <li>
                Barra de movimiento (se muestra en el dispositivo después de un
                período de inactivdad; camine durante un par de minutos para
                restablecerlo)
              </li>
              <li>
                Objetivo automático (aprende tu nivel de actividad y asigna un
                objetivo de paso diario)
              </li>
              <li>
                Monitoreo del sueño (monitorea el sueño total y los períodos de
                movimiento o sueño reparador)
              </li>
              <li>Distancia viajada</li>
              <li>Detección de incidentes durante actividades seleccionadas</li>
              <li>Monitor de energía Body Battery</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
