
import { useGetSocialQuery } from "api/apiSlice";

import './social.scss';

const SocialList = () => {

    const {
        data: socialList = [],
        isLoading,
        isFetching,
        isError,
        isSuccess
    } = useGetSocialQuery();

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
            {
                !(isLoading || isError || isFetching) && isSuccess
                    ? renderSocial(socialList)
                    : <div style={{ 'width': '100px' }}>Что-то пошло не так...</div>
            }
        </ul>
    );
};

export default SocialList;