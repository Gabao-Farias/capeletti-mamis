import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
    horizontal: true    
})`
    flex: 1;
    flex-direction: row;
    background-color: #fff;
    padding: 10px;
    position: absolute;
    bottom: 0px;
`;

export const NavCard = styled.TouchableOpacity`
    width: 100px;
    height: 100px;
    padding: 10px;
    padding-top: 20px;
    margin-right: 10px;
    margin-left: 10px;
    border-radius: 10px;
    align-items: center;
    background-color: #8A0F74;
`;

export const Description = styled.Text`
    text-align: center;
    margin-top: 10px;
    color: #fff;
`;
