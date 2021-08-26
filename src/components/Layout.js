import React  from 'react';

import Header from './Header';
import Navigation from './Navigation';
import  styled  from 'styled-components';

const Wrapper = styled.div`
    @media(min-width: 700px) {
        dispaly: flex;
        top: 64px;
        position: relative;
        height: calc(100%-64px);
        width: 100%;
        flex: auto;
        flex-direction: column;
    }
`;

const Main = styled.main`
    position: fixed;
    height: calc(100% - 185px);
    width: 100%;
    padding: 1em;
    overflow-y: scroll;

    @media (min-width: 700px) {
        flex: 1;
        margin-left: 220px;
        height: calc(100% - 64px);
        width: calc(100% - 220px);
    }
`;
const Layout = ({ children }) => {
    return (
        <div>
           <Header />
           <Wrapper>
                <Navigation />
                <Main>{ children }</Main>
           </Wrapper>
           
        </div>
    );
};
export default Layout;