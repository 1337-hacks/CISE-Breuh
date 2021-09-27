import React, { Component } from 'react';
import axios from 'axios';

import { Link } from "react-router-dom";
import { 
  PageWrapper, 
  PageContainer,
  Data,
  DisplayButton,
  PageHeader
} from "./DisplayEvidenceStyle";

import articles from "./../../Evidence-Table/articles"
import Table from "../../Evidence-Table/evidencetable";
import tablecolumns from "../../Evidence-Table/tablecolumns";
// import Dropdown from "../../Evidence-Table/dropdown";
// import Styles from "../../Evidence-Table/tablestyle";



class DisplayEvidencePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: {}
    };
  }

  /* Logic goes here eg. pull data from DB */

  // componentDidMount() {
  //   // console.log("Print id: " + this.props.match.params.id);
  //   axios
  //     .get('/routes/articles/'+this.props.match.params.id)
  //     .then(res => {
  //       // console.log("Print-showBookDetails-API-response: " + res.data);
  //       this.setState({
  //         articles: res.data
  //       })
  //     })
  //     .catch(err => {
  //       console.log("Error from ShowBookDetails");
  //     })
  // };

  render() {

    //const articles = this.state.articles;

    return (
      <PageWrapper>
        {/* Container for Page Background */}
        <PageContainer>
          {/* Container for Page Content */}
          <PageHeader>View Evidence</PageHeader>
          <Data>
            <div>
                <h2>Select SE Practice to get evidence for the claimed benefits</h2>
                {/* <Dropdown/>
                <Styles> */}
                    <Table data={articles} columns={tablecolumns}/>
                {/* </Styles> */}
            </div>
              <Link to="/">
            <DisplayButton> Home </DisplayButton>
          </Link>
          </Data>
          
        </PageContainer>
      </PageWrapper>
    );
  }
  
}

export default DisplayEvidencePage