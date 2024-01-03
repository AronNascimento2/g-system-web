import React, { useState, useRef } from "react";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "../../../../../../components/Modal";
import { DynamicButton } from "../../../../../../components/DynamicButton";
import { WrapperButton } from "../../../../../../components/WrapperButton/styles";
import { Container } from "./styles";
import heic2any from "heic2any";
import { AppointmentProps } from "../../../../types";
import { Loader } from "../../../../../../components/Button/styles";

interface Props {
  details?: AppointmentProps;
}

export const AttachmentsModal: React.FC<Props> = ({ details }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [fullscreenImage, setFullscreenImage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const toggleModal = () => {
    setIsOpen(!isOpen);
    if (!isOpen && fullscreenImage) {
      setFullscreenImage("");
    }
  };
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setLoading(true);

      const convertedFiles = await Promise.all(
        files.map(async (file) => {
          if (file.type === "image/heic" || file.type === "image/heif") {
            const jpeg = await heic2any({ blob: file, toType: "image/jpeg" });
            return new File([jpeg], `${file.name}.jpg`, { type: "image/jpeg" });
          }
          return file;
        })
      );

      const updatedFiles = [...selectedFiles, ...convertedFiles];
      setSelectedFiles(updatedFiles);

      const previews = await Promise.all(
        convertedFiles
          .filter((file) => file.type.startsWith("image/"))
          .map(async (file) => URL.createObjectURL(file))
      );

      const updatedPreviews = [...imagePreviews, ...previews];
      setImagePreviews(updatedPreviews);

      setLoading(false);
    }
  };
  const handleRemoveImage = (indexToRemove: number) => {
    const updatedPreviews = imagePreviews.filter(
      (_, index) => index !== indexToRemove
    );
    setImagePreviews(updatedPreviews);

    const updatedFiles = selectedFiles.filter(
      (_, index) => index !== indexToRemove
    );
    setSelectedFiles(updatedFiles);

    if (fullscreenImage && imagePreviews[indexToRemove] === fullscreenImage) {
      setFullscreenImage("");
    }

    if (isOpen) {
      setIsOpen(true);
    }
  };

  const handleImageClick = (preview: string) => {
    setFullscreenImage(preview);
  };

  const handleCloseFullscreen = () => {
    setFullscreenImage("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Arquivos selecionados:", selectedFiles);

    setSelectedFiles([]);
    setImagePreviews([]);
    if (fileInputRef && fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    toggleModal();
  };

  return (
    <>
      <DynamicButton
        width="120px"
        icon={faPaperclip}
        text="Anexos"
        onClick={toggleModal}
        disabled={!details?.Codigo}
      />
      <Container>
        <Modal
          show={isOpen}
          handleClose={toggleModal}
          title={"Anexos"}
          className="register-modal"
          top="50%"
        >
          {fullscreenImage ? (
            <div className="container-fullScreen-image">
              <img
                className="fullScreen-image"
                src={fullscreenImage}
                alt="Imagem em tela cheia"
              />
              <button
                className="button-close-fullimages"
                onClick={handleCloseFullscreen}
              >
                ×
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <label htmlFor="fileUpload">Selecione os arquivos:</label>
              <input
                type="file"
                id="fileUpload"
                name="fileUpload"
                multiple
                onChange={handleFileChange}
                ref={fileInputRef}
              />
              <input type="submit" title="Enviar" />
              <div className="container-images">
                {imagePreviews.map((preview, index) => (
                  <div className="images" key={index}>
                    <img
                      src={preview}
                      alt={`Imagem ${index}`}
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        cursor: "pointer",
                      }}
                      onClick={() => handleImageClick(preview)}
                    />
                    <button
                      className="button-remove-images"
                      onClick={() => handleRemoveImage(index)}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
              {loading && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "10px",
                  }}
                >
                  <Loader color="#333" />
                  <p style={{ marginLeft: "5px" }}>Carregando...</p>
                </div>
              )}

              <WrapperButton>
                <DynamicButton
                  text="Cancelar"
                  onClick={toggleModal}
                  width="100px"
                />
                {/* <DynamicButton
                  text="Enviar"
                  // onClick={()=>handleSubmit()}
                  width="100px"
                /> */}
              </WrapperButton>
            </form>
          )}
        </Modal>
      </Container>
    </>
  );
};
