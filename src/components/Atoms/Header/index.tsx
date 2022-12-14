import { useNavigate } from 'react-router-dom';

import { BsGithub, BsLinkedin, BsYoutube } from 'react-icons/bs';
import { MdHome } from 'react-icons/md';

import * as Atom from './atoms';
import { Container } from '../Container';
import { FlexBox } from '../Flexbox';

const Header = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Atom.HeaderContainer
        onClick={() => navigate('/')}
        align="center"
        justify="space-between"
        direction="row"
        wrap="wrap"
      >
        <Atom.HeaderItem>
          <MdHome size="20" />
        </Atom.HeaderItem>
        <div>
          <FlexBox align="center" justify="flex-end" direction="row" gap="xxxs">
            <a target="_blank" href="https://github.com/Greedwy-Blu/" rel="noreferrer">
              <Atom.HeaderItem>
                <BsGithub size="20" />
              </Atom.HeaderItem>
            </a>
         
            
          </FlexBox>
        </div>
      </Atom.HeaderContainer>
    </Container>
  );
};

export default Header;
