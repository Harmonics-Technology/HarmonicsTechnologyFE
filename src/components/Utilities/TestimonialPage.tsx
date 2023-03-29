import { Box, Button } from '@chakra-ui/react';
import React, { CSSProperties } from 'react';
import { PageTop } from './PageTop';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import { TestimonialItem } from './TestimonialItem';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export const TestimonialPage = () => {
    const arrowStyles: CSSProperties = {
        position: 'absolute',
        zIndex: 2,
        top: 'calc(50% - 25px)',
        width: 40,
        height: 40,
        cursor: 'pointer',
        color: '#A03CAE',
        borderRadius: '50%',
        border: '1px solid #A03CAE',
        background: 'transparent',
        padding: 0,
    };

    const indicatorStyles: CSSProperties = {
        background: '#D8D8D8',
        width: 20,
        height: 8,
        borderRadius: '8px',
        display: 'inline-block',
        margin: '0 8px 0 0',
    };
    return (
        <Box mt={['5rem', 'unset']}>
            <PageTop
                sub="Testimonials"
                title="What our clients say"
                mx="auto"
                desc="Crafted with passion and precision, our work is a testament to our commitment to excellence."
            />
            <AnimationOnScroll animateIn="animate__fadeInUp" delay={100}>
                <Box w="70%" mx="auto">
                    <Carousel
                        showStatus={false}
                        autoPlay
                        infiniteLoop
                        animationHandler="fade"
                        showArrows={false}
                        useKeyboardArrows
                        renderArrowPrev={(onClickHandler, hasPrev, label) =>
                            hasPrev && (
                                <Button
                                    type="button"
                                    onClick={onClickHandler}
                                    title={label}
                                    style={{ ...arrowStyles, left: 0 }}
                                >
                                    <BsChevronLeft />
                                </Button>
                            )
                        }
                        renderArrowNext={(onClickHandler, hasNext, label) =>
                            hasNext && (
                                <Button
                                    type="button"
                                    onClick={onClickHandler}
                                    title={label}
                                    style={{ ...arrowStyles, right: 0 }}
                                >
                                    <BsChevronRight />
                                </Button>
                            )
                        }
                        renderIndicator={(
                            onClickHandler,
                            isSelected,
                            index,
                            label,
                        ) => {
                            if (isSelected) {
                                return (
                                    <li
                                        style={{
                                            ...indicatorStyles,
                                            background: '#A03CAE',
                                            width: 40,
                                        }}
                                        aria-label={`Selected: ${label} ${
                                            index + 1
                                        }`}
                                        title={`Selected: ${label} ${
                                            index + 1
                                        }`}
                                    />
                                );
                            }
                            return (
                                <li
                                    style={indicatorStyles}
                                    onClick={onClickHandler}
                                    onKeyDown={onClickHandler}
                                    value={index}
                                    key={index}
                                    role="button"
                                    tabIndex={0}
                                    title={`${label} ${index + 1}`}
                                    aria-label={`${label} ${index + 1}`}
                                />
                            );
                        }}
                    >
                        <TestimonialItem
                            name="Doyin Adebayo"
                            role="team lead, OCT Groups"
                            content="Over the years I have had to struggle with growth in my business but with the help of Harmonic Technologies, my business has been able to grow. During the design period, they carried me along with all their progress so far by conducting weekly meetings where they provide me with updates on my design and we deliberate more on achieving my goal."
                            img="/assets/aboutb.png"
                        />
                        <TestimonialItem
                            name="Doyin Adebayo"
                            role="team lead, OCT Groups"
                            content="Over the years I have had to struggle with growth in my business but with the help of Harmonic Technologies, my business has been able to grow. During the design period, they carried me along with all their progress so far by conducting weekly meetings where they provide me with updates on my design and we deliberate more on achieving my goal."
                            img="/assets/aboutc.png"
                        />
                        <TestimonialItem
                            name="Doyin Adebayo"
                            role="team lead, OCT Groups"
                            content="Over the years I have had to struggle with growth in my business but with the help of Harmonic Technologies, my business has been able to grow. During the design period, they carried me along with all their progress so far by conducting weekly meetings where they provide me with updates on my design and we deliberate more on achieving my goal."
                            img="/assets/aboute.png"
                        />
                        <TestimonialItem
                            name="Doyin Adebayo"
                            role="team lead, OCT Groups"
                            content="Over the years I have had to struggle with growth in my business but with the help of Harmonic Technologies, my business has been able to grow. During the design period, they carried me along with all their progress so far by conducting weekly meetings where they provide me with updates on my design and we deliberate more on achieving my goal."
                            img="/assets/aboutd.png"
                        />
                    </Carousel>
                </Box>
            </AnimationOnScroll>
        </Box>
    );
};
