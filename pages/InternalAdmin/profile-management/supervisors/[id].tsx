import { withPageAuth } from '@components/generics/withPageAuth';
import AdminProfile from '@components/subpages/AdminProfile';
import SupervisorProfile from '@components/subpages/SupervisorProfile';
import { GetServerSideProps } from 'next';
import { UserService } from 'src/services';
interface pageOptions {
    userProfile: any;
}

function AdminDetails({ userProfile }: pageOptions) {
    return <SupervisorProfile userProfile={userProfile} />;
}

export default AdminDetails;

export const getServerSideProps: GetServerSideProps = withPageAuth(
    async (ctx: any) => {
        const { id } = ctx.query;
        // console.log({ id });
        try {
            const data = await UserService.getUserById(id);
            // console.log({ data });
            return {
                props: {
                    userProfile: data.data,
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