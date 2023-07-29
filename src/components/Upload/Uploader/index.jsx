import Dropzone from "react-dropzone";
import { DropContainer, UploadMessage } from "./styles";

export function Uploader({ onUpload }) {
  const renderDragMessage = (isDragActive, isDragReject) => {
    if (!isDragActive) {
      return <UploadMessage> Arraste a imagem aqui ou clique </UploadMessage>;
    }

    if (isDragReject) {
      return (
        <UploadMessage type="error"> Arquivo não suportado </UploadMessage>
      );
    }

    return <UploadMessage type="sucess"> Solte a imagem aqui </UploadMessage>;
  };

  return (
    <Dropzone
      accept={{ "image/*": ["image/*"] }}
      maxFiles={1}
      onDropAccepted={(prop) => {
        onUpload(prop);
      }}
    >
      {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
        <DropContainer
          {...getRootProps()}
          isDragActive={isDragActive}
          isDragReject={isDragReject}
        >
          <input {...getInputProps()} />
          {renderDragMessage(isDragActive, isDragReject)}
        </DropContainer>
      )}
    </Dropzone>
  );
}
