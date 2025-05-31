import { useState, useEffect } from "react";
import useTocarService from "services/TocarService";
import setContent from "utils/setContent";

import './social.scss';

const SocialList = () => {

    const [socialList, setSocialList] = useState([]);

    const { getData, clearError, process, setProcess } = useTocarService();

    useEffect(() => {
        getData('social')
            .then(res => setSocialList(res))
            .then(() => setProcess('confirmed'));
    }, []);

    const renderSocial = (socialList) => {
        return (
            socialList.map(({ name, href, icon, alt, id }) => {
                return (
                    <li className={`social__list-item ${name}`} key={id}>
                        <a href={href}>
                            <img src={icon} alt={alt} />
                        </a>
                    </li>
                );
            })
        );
    };

    return (
        <ul className="social__list">
            {setContent(process, renderSocial, socialList)}
        </ul>
    );
};

export default SocialList;