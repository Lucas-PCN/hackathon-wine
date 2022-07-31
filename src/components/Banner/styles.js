import styled from 'styled-components';
import bannerImage from '../../images/banner2.png';

const BannerContainer = styled.section`
 background-image: url(${bannerImage});
 height: 100vh;
 background-size: cover;
 background-repeat: no-repeat;
`;

export { BannerContainer as default };
