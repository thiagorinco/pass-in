import { ComponentProps } from "react";

interface TableHeaderProps extends ComponentProps<'th'> { }

export function TableHeader(props: TableHeaderProps) {
    return (
        <td {...props} className='py-3 px-3 text-sm font-semibold text-left' />
    )
}