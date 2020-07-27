const { default: styled } = require("styled-components");

import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
    horizontal: true
})`
    background-color: #fff;
    height: 100px;
    position: absolute;
    bottom: 0px;
    flex: 1;
`;
