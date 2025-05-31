import Contacts from "components/contacts/Contacts";
import Details from "components/details/Details";
import { Helmet } from "react-helmet";

const ContactsPage = () => {

    return (
        <>
            <Helmet>
                <meta name="description" content='Tocar company contacts page' />

                <title>Our Contacts</title>
            </Helmet>
            <Contacts />
            <Details />
        </>
    )

}

export default ContactsPage;