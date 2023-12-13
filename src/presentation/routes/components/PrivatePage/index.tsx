import type { Props } from "./types";
import * as S from "./styles";
import { SideBar } from "./components";

export const PrivatePage = ({ children, ...props }: Props) => {
  return (
    <S.PageContainer {...props}>
      <SideBar />
      <S.PageRightContainer className="pageRightContainer">
        {children}
      </S.PageRightContainer>
    </S.PageContainer>
  );
};
