import { Box, Button } from '@chakra-ui/react';
import React, { CSSProperties } from 'react';
import { PageTop } from './PageTop';
import { CarouselItem } from './CarouselItem';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export const CarouselPage = () => {
    const indicatorStyles: CSSProperties = {
        background: '#D8D8D8',
        width: 20,
        height: 8,
        borderRadius: '8px',
        display: 'inline-block',
        margin: '0 8px 0 0',
    };
    return (
        <Box>
            <PageTop
                sub="HOW WE WORK"
                title="Our Mode of Operations "
                mx="auto"
                w={['90%', '45%']}
                desc="Grounded in empathy and design thinking, our work process is designed to give the best result to our clients"
            />
            <AnimationOnScroll animateIn="animate__fadeInUp" delay={100}>
                <Box w={['90%', '80%']} mx="auto">
                    <Carousel
                        showStatus={false}
                        autoPlay
                        infiniteLoop
                        animationHandler="fade"
                        useKeyboardArrows
                        renderArrowPrev={(onClickHandler, hasPrev, label) =>
                            hasPrev && (
                                <Button
                                    type="button"
                                    onClick={onClickHandler}
                                    title={label}
                                    position="absolute"
                                    zIndex={2}
                                    top={[
                                        'calc(100% + 30px) ',
                                        'calc(50% - 25px)',
                                    ]}
                                    width="40px"
                                    height="40px"
                                    cursor="pointer"
                                    color="#A03CAE"
                                    borderRadius="50%"
                                    border="1px solid #A03CAE"
                                    background="transparent"
                                    padding={0}
                                    left={0}
                                    // style={{ ...arrowStyles, left: 0 }}
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
                                    position="absolute"
                                    zIndex={2}
                                    top={[
                                        'calc(100% + 30px) ',
                                        'calc(50% - 25px)',
                                    ]}
                                    width="40px"
                                    height="40px"
                                    cursor="pointer"
                                    color="#A03CAE"
                                    borderRadius="50%"
                                    border="1px solid #A03CAE"
                                    background="transparent"
                                    padding={0}
                                    right={0}
                                    // style={{ ...arrowStyles, right: 0 }}
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
                        <CarouselItem
                            title="Concept"
                            desc="In order to give the project a clear vision and direction and to help ensure that all project stakeholders are aligned and working toward a common goal, we define the project scope, objectives, and goals at this stage."
                            dir="ltr"
                            img="/assets/create.jpg"
                        />
                        <CarouselItem
                            title="Budget"
                            desc="Once the project's scope has been understood, its cost is estimated, a budget is created, resources are appropriately allocated, and the project is monitored to ensure that it is carried out within the constraints of available resources."
                            dir="rtl"
                            img="/assets/budget.jpg"
                        />
                        <CarouselItem
                            title="Develop"
                            desc="After having a clear understanding of the project's scope and a financial plan in place, we move on to project ideation, development, and implementation. We conduct research to guide our development of the project's objectives."
                            dir="ltr"
                            img="/assets/develop.jpg"
                        />
                        <CarouselItem
                            title="Result"
                            desc="In order to ensure that projects are finished on schedule, within budget, and with the expected result, we put in the necessary measures by adhering to a result-oriented project execution methodology."
                            dir="rtl"
                            img="/assets/result.jpg"
                        />
                    </Carousel>
                </Box>
            </AnimationOnScroll>
        </Box>
    );
};
