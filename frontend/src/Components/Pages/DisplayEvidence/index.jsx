import { Link } from "react-router-dom";
import { 
  PageWrapper, 
  PageContainer,
  Data,
  DisplayButton,
  PageHeader
} from "./DisplayEvidenceStyle";

// import articles from "../../../../../backend/dummydata/articles";
// import Styles from "../../Evidence-Table/tablestyle";
// import Table from "../../Evidence-Table/evidencetable";
// import tablecolumns from "../../Evidence-Table/tablecolumns";
// import Dropdown from "../../Evidence-Table/dropdown";

const DisplayEvidencePage = () => {

    /* Logic goes here eg. pull data from DB */
    
    return (
      <PageWrapper>
        {/* Container for Page Background */}
        <PageContainer>
          {/* Container for Page Content */}
          <PageHeader>View Evidence</PageHeader>
          <Data>
            <p>This is where data is</p>
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
              <Link to="/">
            <DisplayButton> Home </DisplayButton>
          </Link>
          </Data>
          
        </PageContainer>
      </PageWrapper>
    );
};

export default DisplayEvidencePage;