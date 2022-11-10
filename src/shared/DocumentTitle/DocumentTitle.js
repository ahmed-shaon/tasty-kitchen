import { useEffect, useState } from "react"

const useDocumentTitle = title => {
    const [documentTitle, setDocumenttitle] = useState(title);
    useEffect( () => {
        document.title = documentTitle;
    },[documentTitle])
    return [documentTitle, setDocumenttitle];

}

export default useDocumentTitle;