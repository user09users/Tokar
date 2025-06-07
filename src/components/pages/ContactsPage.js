
import { Helmet } from "react-helmet";

import Contacts from "components/contacts/Contacts";
import Details from "components/details/Details";
import LastStates from "components/lastStates/LastStates";

const ContactsPage = () => {

    return (
        <>
            <Helmet>
                <meta name="description" content='Tocar company contacts page' />

                <title>Our Contacts</title>
            </Helmet>
            <Contacts />
            <Details />
            <LastStates />
        </>
    )

}

export default ContactsPage;