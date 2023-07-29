import { Container } from "./styles";

export function OutInfo({
  handleConfirmBtnClick,
  handleCancelBtnClick,
  isOpen,
}) {
  if (isOpen) {
    return (
      <Container>
        <section>
          <p> Tens a certeza que pretendes sair ? </p>
          <div>
            <button onClick={handleCancelBtnClick}> Cancelar </button>
            <button onClick={handleConfirmBtnClick}> Confirmar </button>
          </div>
        </section>
      </Container>
    );
  }

  return null;
}
