import {type ReactNode} from "react";

type Props = {
    children: ReactNode
    title: string
    childClassName?: string
};
export default function Card({children, title, childClassName}: Props) {
    return (
        <div className='m-10 p-10 rounded-xl bg-zinc-900 shadow-md flex flex-col gap-4'>
            <h2 className='text-2xl font-semibold'>{title}</h2>
            <div className={childClassName}>{children}</div>
        </div>

    );
};
