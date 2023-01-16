import { filterPagingSearchOptions } from '@components/generics/filterPagingSearchOptions';
import { withPageAuth } from '@components/generics/withPageAuth';
import TimesheetHistory from '@components/subpages/SupervisorTimeSheetHistory';
import { GetServerSideProps } from 'next';
import React from 'react';
import {
    TimeSheetHistoryViewPagedCollectionStandardResponse,
    TimeSheetService,
} from 'src/services';

function history({
    timeSheets,
}: {
    timeSheets: TimeSheetHistoryViewPagedCollectionStandardResponse;
}) {
    return <TimesheetHistory timeSheets={timeSheets} />;
}

export default history;

export const getServerSideProps: GetServerSideProps = withPageAuth(
    async (ctx) => {
        const pagingOptions = filterPagingSearchOptions(ctx);
        try {
            const data = await TimeSheetService.getSuperviseesTimeSheet(
                pagingOptions.offset,
                pagingOptions.limit,
                pagingOptions.search,
                pagingOptions.date,
            );
            return {
                props: {
                    timeSheets: data,
                },
            };
        } catch (error: any) {
            console.log(error);
            return {
                props: {
                    data: [],
                },
            };
        }
    },
);
