import React from 'react';
import {Button} from 'antd';
import Link from 'next/link';
import {ROOT_PATH} from "../routes/Slugs";
import ErrorLayout from "../components/layout/error_layout/ErrorLayout";

const ErrorPage = () => {
    return (
        <ErrorLayout status={400} subTitle="Sorry, something went wrong. Please try again later.">
            <Link href={ROOT_PATH}>
                <Button>
                    Go To Dashboard
                </Button>
            </Link>
        </ErrorLayout>
    );
};

export default ErrorPage;
