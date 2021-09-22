import { Link } from "react-router-dom";
import { BackgroundWrapper, ContentContainer } from "./HomeStyle";

const HomePage = () => {

    return(
        <>
            <BackgroundWrapper>
                <ContentContainer>
                    <div>
                        <Link to='/displayEvidence'>
                            <button> TEST </button>
                        </Link>
                    </div>
                </ContentContainer>
            </BackgroundWrapper>
        </>
    );
};

export default HomePage;