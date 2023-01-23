import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    Button,
    Text,
    Box,
    Flex,
    TableContainer,
    Table,
    Thead,
    Tr,
    Tbody,
    Grid,
    VStack,
} from '@chakra-ui/react';
import { PaySlipView, PayslipUserView } from 'src/services';
import { TableData, TableHead } from './TableData';
import moment from 'moment';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { PayslipInfoTag } from './PayslipInfoTag';
import numWords from 'num-words';
import Naira, { CAD } from '@components/generics/functions/Naira';
import { useRef } from 'react';
import { PDFExport } from '@progress/kendo-react-pdf';

type Props = {
    isOpen?: any;
    onClose?: any;
    paySlip?: PayslipUserView;
};

export const PayslipModal = ({ isOpen, onClose, paySlip }: Props) => {
    // console.log({ paySlip });
    const ref = useRef<any>(null);
    function downloadInvoice() {
        if (ref.current) {
            ref.current.save();
        }
    }
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            motionPreset="slideInBottom"
            isCentered
        >
            <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px) " />

            <ModalContent
                pb={5}
                borderRadius="0px"
                w={['88%', '80%']}
                overflow="hidden"
                maxH="100vh"
                maxW="unset"
                pos="fixed"
                mt="1rem"
                mb="1rem"
            >
                <ModalHeader textAlign="center">
                    <>
                        {/* <Text
                            fontSize="1.1rem"
                            mb="1rem"
                            px={['1.5rem', '3.3rem']}
                            fontWeight="700"
                        >
                            Payment Schedule
                        </Text> */}
                    </>
                </ModalHeader>

                <ModalBody>
                    <Box maxH="90vh" overflowY="auto" px={5}>
                        <Flex justify="flex-end" mb="1rem">
                            <Button
                                w={['100%', '20%']}
                                // h="3.5rem"
                                variant="outline"
                                borderColor="brand.400"
                                color="brand.400"
                                onClick={downloadInvoice}
                                _hover={{
                                    bgColor: 'brand.400',
                                    color: 'white',
                                }}
                            >
                                Download
                            </Button>
                        </Flex>
                        <PDFExport
                            ref={ref}
                            paperSize="A4"
                            scale={0.7}
                            margin={40}
                            fileName={`Payslip for the month of
                            ${moment(
                                paySlip?.payslipView?.invoice?.paymentDate,
                            ).format('MMMM YYYY')}.pdf`}
                        >
                            <Box>
                                <Box mb="2rem">
                                    <Text fontWeight="600" mb=".5rem">
                                        Payslip
                                    </Text>
                                    <Text fontSize=".9rem">
                                        Payslip for the month of{' '}
                                        {moment(
                                            paySlip?.payslipView?.invoice
                                                ?.paymentDate,
                                        ).format('MMMM YYYY')}
                                    </Text>
                                </Box>

                                <Flex flexWrap="wrap" mb="2rem" gap="4rem">
                                    <VStack align="flex-start" spacing="1rem">
                                        <PayslipInfoTag
                                            title={'Company Name'}
                                            value={
                                                paySlip?.payslipView?.invoice
                                                    ?.employeeInformation
                                                    ?.client?.organizationName
                                            }
                                        />
                                        <PayslipInfoTag
                                            title={'Name'}
                                            value={
                                                paySlip?.payslipView?.invoice
                                                    ?.name
                                            }
                                        />{' '}
                                        <PayslipInfoTag
                                            title={'Employee id'}
                                            value={
                                                paySlip?.payslipView?.invoice?.employeeInformation?.id?.split(
                                                    '-',
                                                )[0]
                                            }
                                        />{' '}
                                        <PayslipInfoTag
                                            title={'Designation'}
                                            value={
                                                paySlip?.payslipView?.invoice
                                                    ?.employeeInformation
                                                    ?.jobTitle
                                            }
                                        />{' '}
                                        <PayslipInfoTag
                                            title={'Address'}
                                            value={
                                                paySlip?.payslipView?.invoice
                                                    ?.employeeInformation
                                                    ?.client
                                                    ?.organizationAddress
                                            }
                                        />
                                    </VStack>
                                    <VStack align="flex-start" spacing="1rem">
                                        <PayslipInfoTag
                                            title={'Join Date'}
                                            value={moment(
                                                paySlip?.payslipView?.invoice
                                                    ?.employeeInformation
                                                    ?.dateCreated,
                                            ).format('Do MMM YYYY')}
                                        />
                                        <PayslipInfoTag
                                            title={'Pay Period'}
                                            value={`${moment(
                                                paySlip?.payslipView?.invoice
                                                    ?.startDate,
                                            ).format('Do MMM YYYY')} - ${moment(
                                                paySlip?.payslipView?.invoice
                                                    ?.endDate,
                                            ).format('Do MMM YYYY')} `}
                                        />
                                        <PayslipInfoTag
                                            title={'Pay Date'}
                                            value={moment(
                                                paySlip?.payslipView?.invoice
                                                    ?.paymentDate,
                                            ).format('Do MMM YYYY')}
                                        />
                                        <PayslipInfoTag
                                            title={'Pay Frequency'}
                                            value={
                                                paySlip?.payslipView?.invoice
                                                    ?.employeeInformation
                                                    ?.paymentFrequency
                                            }
                                        />
                                    </VStack>
                                </Flex>
                            </Box>
                            <TableContainer>
                                <Table
                                    // variant="striped"
                                    border="1px solid"
                                    borderColor="gray.200"
                                >
                                    <Thead>
                                        <Tr
                                            h="3rem"
                                            fontWeight="600"
                                            bgColor="brand.400"
                                            color="white"
                                        >
                                            <TableHead
                                                name="Earnings"
                                                border
                                                value="1px solid"
                                                borderColor="gray.200"
                                            />
                                            <TableHead name="Amount" />
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        <Tr>
                                            <TableData
                                                name={'Pay'}
                                                border
                                                value="1px solid"
                                                borderColor="gray.200"
                                            />
                                            <TableData
                                                name={
                                                    paySlip?.payslipView
                                                        ?.invoice
                                                        ?.employeeInformation
                                                        ?.currency == 'CAD'
                                                        ? CAD(
                                                              paySlip
                                                                  ?.payslipView
                                                                  ?.invoice
                                                                  ?.totalAmount,
                                                          )
                                                        : Naira(
                                                              paySlip
                                                                  ?.payslipView
                                                                  ?.invoice
                                                                  ?.totalAmount,
                                                          )
                                                }
                                            />
                                        </Tr>
                                        <Tr color="brand.400" fontWeight="600">
                                            <TableData
                                                name={`Total Earning for ${
                                                    paySlip?.payslipView
                                                        ?.invoice
                                                        ?.employeeInformation
                                                        ?.paymentFrequency ==
                                                    'Monthly'
                                                        ? 'the month'
                                                        : paySlip?.payslipView
                                                              ?.invoice
                                                              ?.employeeInformation
                                                              ?.paymentFrequency ==
                                                          'Weekly'
                                                        ? 'the week'
                                                        : 'two weeks'
                                                }`}
                                                border
                                                value="1px solid"
                                                borderColor="gray.200"
                                            />
                                            <TableData name={'3,250.00'} />
                                        </Tr>
                                        <Tr fontWeight="600">
                                            <TableData
                                                name={
                                                    'Total Earning for the year till Date'
                                                }
                                                border
                                                value="1px solid"
                                                borderColor="gray.200"
                                            />
                                            <TableData
                                                name={
                                                    paySlip?.payslipView
                                                        ?.invoice
                                                        ?.employeeInformation
                                                        ?.currency == 'CAD'
                                                        ? CAD(
                                                              paySlip?.totalEarnings,
                                                          )
                                                        : Naira(
                                                              paySlip?.totalEarnings,
                                                          )
                                                }
                                            />
                                        </Tr>
                                    </Tbody>
                                </Table>
                            </TableContainer>
                            <Flex
                                align="center"
                                justify="space-between"
                                mt="2rem"
                            >
                                <Text mb="0">
                                    Net Pay:{' '}
                                    {paySlip?.payslipView?.invoice
                                        ?.employeeInformation?.currency == 'CAD'
                                        ? CAD(
                                              paySlip?.payslipView?.invoice
                                                  ?.totalAmount,
                                          )
                                        : Naira(
                                              paySlip?.payslipView?.invoice
                                                  ?.totalAmount,
                                          )}
                                </Text>
                                <Box
                                    border="1px solid"
                                    borderColor="gray.200"
                                    p="1rem"
                                    w="60%"
                                >
                                    <Text mb=".5rem">In Words</Text>
                                    <Text mb="0" textTransform="capitalize">
                                        {numWords(
                                            paySlip?.payslipView?.invoice
                                                ?.totalAmount,
                                        )}{' '}
                                        {paySlip?.payslipView?.invoice
                                            ?.employeeInformation?.currency ==
                                        'CAD'
                                            ? 'dollars '
                                            : 'naira '}
                                        only
                                    </Text>
                                </Box>
                            </Flex>
                        </PDFExport>
                    </Box>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};
