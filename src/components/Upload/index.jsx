import { Container } from "./styles";
import { Uploader } from "./Uploader";
import { File } from "./File";
import { useState } from "react";
import { v4 as uuid } from "uuid";

export function Upload({ setAvatarUrl, uploadedFiles, setUploadedFiles }) {
  function handleUpload(files) {
    const uploadedFile = files.map((file) => ({
      id: uuid(),
      name: file.name,
      preview: URL.createObjectURL(file),
      type: file.type,
    }));

    setUploadedFiles(uploadedFile);

    setAvatarUrl(uploadedFile[0].preview);
  }
  return (
    <Container>
      <Uploader onUpload={handleUpload} />
      {uploadedFiles.length > 0 ? (
        <File
          files={uploadedFiles}
          resetFile={() => {
            setUploadedFiles([]);
            setAvatarUrl(null);
          }}
        />
      ) : (
        <p> Nenhuma imagem seleccionada </p>
      )}
    </Container>
  );
}
