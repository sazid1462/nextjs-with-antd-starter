import Link from "next/link";
import {DASHBOARD_PATH} from "../routes/Slugs";
import {Button} from "antd";
import ErrorLayout from "../components/layout/error_layout/ErrorLayout";
import React from "react";

const Home = () => {
    return (
        <ErrorLayout status={500} subTitle="You should never see this.">
            <Link href={DASHBOARD_PATH}>
                <Button>
                    Go To Dashboard
                </Button>
            </Link>
        </ErrorLayout>
    )
};

export default Home;
