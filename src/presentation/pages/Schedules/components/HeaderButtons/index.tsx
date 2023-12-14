import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsRotate,
  faCheck,
  faClose,
  faDollar,
  faEdit,
  faEnvelope,
  faFile,
  faFilter,
  faGlobe,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../../../components/Button";

export const HeaderButtons = () => {
  return (
    <>
      <Button
        icon={<FontAwesomeIcon icon={faArrowsRotate} />}
        size="small"
        title="Atualizar"
      />
      <div className="input-label">
        <select name="" id=""></select>
      </div>
      <Button
        icon={<FontAwesomeIcon icon={faCheck} />}
        size="small"
        title="Confirmar"
      />
      <Button
        icon={<FontAwesomeIcon icon={faEdit} />}
        size="small"
        title="Editar"
      />
      <Button
        icon={<FontAwesomeIcon icon={faClose} />}
        size="small"
        title="Cancelar"
      />
      <Button
        icon={<FontAwesomeIcon icon={faEdit} />}
        size="small"
        title="Registrar"
      />
      <Button
        icon={<FontAwesomeIcon icon={faDollar} />}
        size="small"
        title="Faturar"
      />
      <Button
        icon={<FontAwesomeIcon icon={faTrash} />}
        size="small"
        title="Excluir"
      />
      <Button
        icon={<FontAwesomeIcon icon={faGlobe} />}
        size="small"
        title="Mapa de Serviços"
      />
      <Button
        icon={<FontAwesomeIcon icon={faFile} />}
        size="small"
        title="Documentos"
      />
      <Button
        icon={<FontAwesomeIcon icon={faEnvelope} />}
        size="small"
        title="Enviar"
      />
      <Button
        icon={<FontAwesomeIcon icon={faFilter} />}
        size="small"
        title="Filtrar"
      />
    </>
  );
};
