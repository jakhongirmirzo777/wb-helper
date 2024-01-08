import styled from "styled-components";
import { SvgLoading } from "@/assets/icons";
const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  .icon {
    animation: rotate 1s linear infinite;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;

const Loading = () => {
  return (
    <Wrapper>
      <SvgLoading className="icon" />
    </Wrapper>
  );
};

export default Loading;
