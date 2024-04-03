import { ComponentProps } from "react";
import { TableCell } from "./table-cell";
import { IconButton } from "../icon-button";
import { MoreHorizontal } from "lucide-react";
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/pt-br';

dayjs.extend(relativeTime)
dayjs.locale('pt-br')

interface TableLineProps extends ComponentProps<'tr'> {
    code: number;
    name: string;
    email: string;
    createdAt: Date;
    checkedAt: Date;
}

export function TableLine({ code, name, email, createdAt, checkedAt, ...props }: TableLineProps) {
    return (
        <tr {...props} className=' border-b border-white/10 hover: bg-white/5'>
            <TableCell>
                <input type='checkbox' className='size-4 bg-black/20 rounded bornder border-white/10' />
            </TableCell>
            <TableCell>{code}</TableCell>
            <TableCell>
                <div className=' flex flex-col gap-1'>
                    <span className='font-semibold text-white'>{name}</span>
                    <span>{email}</span>
                </div>
            </TableCell>
            <TableCell>{dayjs().to(createdAt)}</TableCell>
            <TableCell>{dayjs().to(checkedAt)}</TableCell>
            <TableCell>
                <IconButton transparent>
                    <MoreHorizontal size={16} />
                </IconButton>
            </TableCell>
        </tr>
    )
}