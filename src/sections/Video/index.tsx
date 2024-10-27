
import { Container } from "../../styled.root.ts";
import { Title } from "./styled.ts";

const Video: React.FC = () => {
    return (
        <section>
            <Container>
                <div>
                    <Title>проморолик</Title>
                    <div>
                        <video width="100%" height="100%" controls>
                            <source src="/video/video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Video;
