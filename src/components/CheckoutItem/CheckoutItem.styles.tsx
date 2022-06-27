import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 190px;
    display: block;
  }
`;

export const BaseSpan = styled.span`
  width: 23%;
`;

export const Quantity = styled(BaseSpan)`
  display: flex;
`;

type ArrowProps = {
  left?: boolean;
};

export const Arrow = styled.div<ArrowProps>`
  cursor: pointer;
  margin-left: ${({ left }) => left && '5px'};
`;

export const Value = styled.div`
  margin: 0 10px;
`;

export const RemoveButton = styled.div`
  width: 8%;
  padding-left: 12px;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;