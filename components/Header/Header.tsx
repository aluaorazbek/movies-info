import Link from 'next/link';
import Image from 'next/image';
import IsNeededSearchInput from '../IsNeededSearchInput/IsNeededSearchInput';
import RMDBLogo from '../../public/rmdb-logo.svg';
import RMDBLogoSmall from '../../public/rmdb-logo-small.svg';
import { Wrapper, ContentWrapper, LogoContainer, SearchContainer } from '../styles/Header.styled';

type Props = {
  setQuery?: React.Dispatch<React.SetStateAction<string>>;
};

const Header = ({ setQuery }: Props) => (
  <Wrapper>
    <ContentWrapper>
      <Link href='/'>
        <LogoContainer>
          <div className="rmdb-logo">
            <Image priority src={RMDBLogo} alt='rmdb-logo' />
          </div>
          <div className='rmdb-logo-small'>
            <Image priority src={RMDBLogoSmall} alt='rmdb-logo-small' />
          </div>
        </LogoContainer>
      </Link>
      {setQuery && (
        <SearchContainer>
          <IsNeededSearchInput setQuery={setQuery} />
        </SearchContainer>
      )}
    </ContentWrapper>
</Wrapper>
);

export default Header;
