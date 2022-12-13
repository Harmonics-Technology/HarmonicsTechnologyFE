import {
    Box,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Td,
    useToast,
} from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { FaEllipsisH } from "react-icons/fa";
import { InitiateResetModel, SettingsService, UserService } from "src/services";
import fileDownload from "js-file-download";

export function TableData({ name }: { name: string | undefined | null }) {
    return (
        <Td
            pl="1rem"
            fontSize="13px"
            color="brand.200"
            fontWeight="400"
            // textTransform="capitalize"
            py=".8rem"
        >
            {name}
        </Td>
    );
}
export function TableStatus({ name }: { name: boolean | undefined }) {
    return (
        <td>
            <Box
                fontSize="10px"
                bgColor={name == true ? "brand.400" : "red"}
                borderRadius="4px"
                color="white"
                fontWeight="bold"
                padding=".2rem 1rem"
                width="fit-content"
                cursor="pointer"
                textTransform="uppercase"
            >
                {name == true ? "Active" : "Inactive"}
            </Box>
        </td>
    );
}
export function TableState({ name }: { name: string }) {
    return (
        <td>
            <Box
                fontSize="10px"
                bgColor={name == "ACTIVE" ? "brand.400" : "red"}
                borderRadius="4px"
                color="white"
                fontWeight="bold"
                padding=".2rem 1rem"
                width="fit-content"
                cursor="pointer"
                textTransform="uppercase"
            >
                {name}
            </Box>
        </td>
    );
}
export function TableContract({ url }: { url: any }) {
    console.log({ url });
    const downloadFile = (url: string) => {
        console.log(url);
        axios
            .get(url, {
                responseType: "blob",
            })
            .then((res) => {
                fileDownload(res.data, `${url.split(" ").pop()}`);
            });
    };
    return (
        <td>
            <Box
                fontSize="1.4rem"
                fontWeight="bold"
                padding=".2rem 1rem"
                width="fit-content"
                cursor="pointer"
                onClick={() => downloadFile(url)}
            >
                <AiOutlineDownload />
            </Box>
        </td>
    );
}
export function TableActions({
    id,
    route,
    email,
}: {
    id: any;
    route: string;
    email: any;
}) {
    const toast = useToast();
    const resendInvite = async (data: InitiateResetModel) => {
        // console.log(data.email);
        try {
            const result = await UserService.resendInvite(data);
            if (result.status) {
                // console.log({ result });
                toast({
                    title: "Invite Sent",
                    status: "success",
                    isClosable: true,
                    position: "top-right",
                });
                return;
            }
            toast({
                title: result.message,
                status: "error",
                isClosable: true,
                position: "top-right",
            });
        } catch (error) {
            console.log({ error });
        }
    };
    return (
        <td>
            <Menu>
                <MenuButton>
                    <Box
                        fontSize="1rem"
                        pl="1rem"
                        fontWeight="bold"
                        cursor="pointer"
                        color="brand.300"
                    >
                        <FaEllipsisH />
                    </Box>
                </MenuButton>
                <MenuList>
                    <MenuItem onClick={() => resendInvite({ email })}>
                        Resend Invite
                    </MenuItem>
                    <MenuItem>
                        <Link href={`${route}/${id}`}>View Profile</Link>
                    </MenuItem>
                </MenuList>
            </Menu>
        </td>
    );
}
export function TableContractAction({
    id,
    timeSheets,
}: {
    id: any;
    timeSheets?: boolean;
}) {
    return (
        <td>
            <Menu>
                <MenuButton>
                    <Box
                        fontSize="1rem"
                        pl="1rem"
                        fontWeight="bold"
                        cursor="pointer"
                        color="brand.300"
                    >
                        <FaEllipsisH />
                    </Box>
                </MenuButton>
                <MenuList>
                    <MenuItem>
                        {timeSheets === true ? (
                            <Link href={`/SuperAdmin/timesheets/${id}`}>
                                View Timesheet
                            </Link>
                        ) : (
                            <Link
                                href={`/SuperAdmin/profile-management/team-members/${id}`}
                            >
                                View Profile
                            </Link>
                        )}
                    </MenuItem>
                </MenuList>
            </Menu>
        </td>
    );
}
export function ToggleStatus({ id, status }: { id: any; status: string }) {
    const toast = useToast();
    const router = useRouter();
    const toggleStatus = async (data: string) => {
        // console.log(data.email);
        try {
            const result = await SettingsService.toggleStatus(data);
            if (result.status) {
                console.log({ result });
                toast({
                    title: result.message,
                    status: "success",
                    isClosable: true,
                    position: "top-right",
                });
                router.reload();
                return;
            }
            toast({
                title: result.message,
                status: "error",
                isClosable: true,
                position: "top-right",
            });
        } catch (error) {
            console.log({ error });
        }
    };
    return (
        <td>
            <Menu>
                <MenuButton>
                    <Box
                        fontSize="1rem"
                        pl="1rem"
                        fontWeight="bold"
                        cursor="pointer"
                        color="brand.300"
                    >
                        <FaEllipsisH />
                    </Box>
                </MenuButton>
                <MenuList>
                    <MenuItem onClick={() => toggleStatus(id)}>
                        {status == "ACTIVE" ? "Deactivate" : "Activate"}
                    </MenuItem>
                </MenuList>
            </Menu>
        </td>
    );
}
