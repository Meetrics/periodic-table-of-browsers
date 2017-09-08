import gql from 'graphql-tag';

export const BROWSER_QUERY = gql`
    query {
    browsersUniq {
        name
        versions {
        id
        version
        }
    }
    }
`;

export const WINDOW_PROPS_QUERY = gql`
    query {
    windowProperties {
        id
        name
        type
    }
    }
`;

export const DOCUMENT_PROPS_QUERY = gql`
    query {
    documentProperties {
        id
        name
        type
    }
    }
`;

export const BROWSER_HAS_WINDOW_PROPS_QUERY = gql`
    query ($browserId: Int) {
    browsers_has_WindowProperties(Browsers_id: $browserId) {
        WindowProperties_id
    }
    }
`;

export const BROWSER_HAS_DOC_PROPS_QUERY = gql`
    query ($browserId: Int) {
    browsers_has_DocumentProperties(Browsers_id: $browserId) {
        DocumentProperties_id
    }
    }
`;
