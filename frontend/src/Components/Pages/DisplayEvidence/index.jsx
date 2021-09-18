import { PageWrapper, PageHeader, PageContainer, PageFooter } from "./DisplayEvidenceStyle";

const DisplayEvidencePage = () => {

    /* Logic goes here eg. pull data from DB */
    
    return ( /* HTML code goes here */
        <>
        <PageHeader> {/* Container for Header */}
            <h1>Test Header</h1>
        </PageHeader>

        <PageWrapper> {/* Container for Page Background */}
            <PageContainer> {/* Container for Page Content */}
                {/* Table goes here */}

                <h1>Data</h1>
                <p>Yes lmao eks dee 1234</p>
            </PageContainer>
        </PageWrapper>

        <PageFooter> {/* Container for Page Footer */}
            <h1>Test Footer</h1>
        </PageFooter>
        </>
    );

};

export default DisplayEvidencePage;