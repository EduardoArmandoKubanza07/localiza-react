import { Container, FileInfo, Preview } from "./styles";
import { MdLink } from "react-icons/md";

export function File({ files, resetFile }) {
  return (
    <Container>
      {files.map((file) => (
        <li key={file.id}>
          <FileInfo>
            <Preview src={file.preview} alt={file.name} />
            <div>
              <strong> {file.name} </strong>
              <span>
                <button onClick={resetFile}> Excluir </button>
              </span>
            </div>
            <a href={file.preview} target="_blank" rel="noreferrer noopener ">
              <MdLink />
            </a>
          </FileInfo>
        </li>
      ))}
    </Container>
  );
}
