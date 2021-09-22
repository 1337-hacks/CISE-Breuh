import { PageWrapper, PageContainer } from "./DisplayEvidenceStyle";
import { Link } from "react-router-dom";

// import articles from "../../../../../backend/dummydata/articles";
// import Styles from "../../Evidence-Table/tablestyle";
// import Table from "../../Evidence-Table/evidencetable";
// import tablecolumns from "../../Evidence-Table/tablecolumns";
// import Dropdown from "../../Evidence-Table/dropdown";



const DisplayEvidencePage = () => {

    /* Logic goes here eg. pull data from DB */
    
    return (
      /* HTML code goes here */
      <>
        <PageWrapper>
          {" "}
          {/* Container for Page Background */}
          <PageContainer>
            {" "}
            {/* Container for Page Content */}
            {/* <div>
                    <h2>Select SE Practice to get evidence for the claimed benefits</h2>
                    <Dropdown/>
                    <Styles>
                        <Table
                        data={articles}
                        columns={tablecolumns}
                        />
                    </Styles>
                </div> */}
            <h1>Data</h1>
            <p>Yes lmao eks dee 1234</p>
            
            <Link to="/">
              <button> TEST </button>
            </Link>
          </PageContainer>
        </PageWrapper>
      </>
    );
};

export default DisplayEvidencePage;