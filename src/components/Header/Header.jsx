import { Flex, Box, Link } from 'rebass'
import { Logo } from '../Logo';

const Header = () => {
    return (<Flex
        px={25}
        color='white'
        bg='#2196F3'
        alignItems='center'>
        <Logo />
        <Box mx='auto' />
        <Link variant='nav' href='#!' sx={{color: 'white'}}>
        Create a Room
        </Link>
    </Flex >);
};


export default Header;