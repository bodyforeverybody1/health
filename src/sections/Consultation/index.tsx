import { Container } from "../../styled.root.ts";
import {
  Section,
  Grid,
  Content,
  StyledWrapperForm,
  StyledTitle,
  StyledContacts,
  StyledHeaderForm,
} from "./styled.ts";
import { useModal } from "../../hooks/useModal.ts";

const Consultation = () => {
  const { openModal } = useModal();
  return (
    <Section>
      <Container>
        <Grid onClick={() => openModal("Консультация")}>
          <div style={{ display: "flex", flexDirection: "column", gap: "3vw" }}>
            <Content>
              <h2>Бесплатная 15-минутная</h2>
              <h2>консультация с тренером</h2>
            </Content>
            <StyledWrapperForm>
              <StyledHeaderForm>
                <StyledTitle>Где с вами удобнее связаться</StyledTitle>
                <StyledContacts>
                  <span>WatsApp</span> <span>Telegram</span>
                </StyledContacts>
              </StyledHeaderForm>

              <form>
                <input type="text" placeholder="Ваше имя" />
                <input type="text" placeholder="Номер телефона (начиная с +)" />
              </form>
            </StyledWrapperForm>
          </div>
          <div>
            <img src="../../../public/photo-second.png" alt="image" />
          </div>
        </Grid>
      </Container>
    </Section>
  );
};

export default Consultation;
