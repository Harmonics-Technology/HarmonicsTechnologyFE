import { Box } from '@chakra-ui/react';
import { SubHeroItem } from '@components/Layouts/SubHeroItem';

export const SubHeroPage = () => {
    return (
        <Box mt="3rem" mb="5rem">
            <SubHeroItem
                heading="We are a Team of Creative Gurus"
                sub="We help startups like yours grow revenue and improve customer loyalty with beautifully design software"
                btn="Book a Free Consultation"
                img="/assets/about.png"
            />
        </Box>
    );
};
