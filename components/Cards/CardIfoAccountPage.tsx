import Link from 'next/link';
import * as React from 'react';

export interface IAppProps {
}

export default function CardIfoAccountPage(props: IAppProps) {
    return (
        <p className="my-2">
            Bạn chưa theo dõi truyện nào cả. Để theo dõi truyện, nhấn vào Theo dõi
            như hình bên dưới: Bạn nên{" "}
            <Link
                className="text-[#288ad6] dark:text-[#ff9601] dark:hover:text-[#ff0000] hover:text-[#ae4ad9]  hover:underline"
                href="/auth/login"
            >
                Đăng nhập
            </Link>{" "}
            để truy cập truyện đã theo dõi của bạn ở bất cứ đâu
        </p>
    );
}
