import { Box } from '@chakra-ui/react';
import { SubHeroItem } from '@components/Layouts/SubHeroItem';

export const WorksHero = () => {
    return (
        <Box mt={['1rem', '3rem']} mb="5rem">
            <SubHeroItem
                heading="We offer you professional technological services."
                sub="We help startups like yours grow revenue and improve customer loyalty with beautifully design software"
                btn="Book a Free Consultation"
                img="/assets/aboute.jpg"
            />
        </Box>
    );
};
